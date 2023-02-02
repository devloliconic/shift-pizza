import { Input as AntInput } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { ReactNode } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { ErrorMessage, InputLabel } from '../styled';

export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<UseControllerProps<TFieldValues, TName>, 'render'> {
  label?: string;
  type?: string;
  size?: SizeType;
  placeholder?: string;
  prefix?: ReactNode;
  disabled?: boolean;
  onSubmit?: () => void;
  max?: number;
  min?: number;
  width?: number;
}

export const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  type,
  placeholder,
  disabled,
  size,
  label,
  prefix,
  onSubmit,
  width,
  max,
  min,
  ...props
}: InputProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <AntInput
        {...field}
        style={width ? { width: width } : undefined}
        disabled={disabled}
        size={size}
        prefix={prefix}
        placeholder={placeholder}
        status={fieldState.invalid ? 'error' : ''}
        type={type}
        allowClear={false}
        onBlur={onSubmit}
        max={max}
        min={min}
      />
      <ErrorMessage style={fieldState.invalid ? { display: 'block' } : { display: 'none' }}>
        {fieldState.error?.message}
      </ErrorMessage>
    </div>
  );
};
