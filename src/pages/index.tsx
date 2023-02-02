import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CheckoutPage } from '@/pages/CheckoutPage';
import { MenuPage } from '@/pages/MenuPage';

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/order" element={<CheckoutPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
