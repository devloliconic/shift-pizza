import generatePicker from 'antd/es/date-picker/generatePicker';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import React from 'react';
import { ControllerProps, FieldPath, FieldValues, useController } from 'react-hook-form';

import { ErrorMessage, InputLabel } from '../styled';

type RangeValue = [Date | null, Date | null] | null;

export interface DatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;

  onCalendarChange?: (val: RangeValue) => void;
  onChange?: (val: RangeValue) => void;
  onOpenChange?: (open: boolean) => void;
  value?: RangeValue;
}
locale.lang.locale = 'ru';

const FnsDatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export const DatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  ...props
}: DatePickerProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      {label ? <InputLabel>{label}</InputLabel> : null}

      <FnsDatePicker
        {...field}
        disabled={props.disabled}
        format={'dd.MM.yyyy'}
        style={{ width: '100%' }}
        status={fieldState.invalid ? 'error' : ''}
        placeholder={''}
      />
      <ErrorMessage style={fieldState.invalid ? { display: 'block' } : { display: 'none' }}>
        {fieldState.error?.message}
      </ErrorMessage>
    </div>
  );
};
