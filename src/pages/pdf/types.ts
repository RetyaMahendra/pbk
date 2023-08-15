import {
  FieldArrayWithId,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form';

type BaseForm = {
  formValues: FieldArrayWithId<FormValues, 'forms', 'id'>;
};

type FormKeys = {
  type: string;
  title?: string;
  value?: string;
  columns?: Array<{ column: string; isEditing?: boolean }>;
  rows?: Array<any>;
  leftColumn?: Array<{ label: string; value: string }>;
  rightColumn?: Array<{ label: string; value: string }>;
  details?: { label: string; points: string };
  subtitle?: string;
  header?: Array<{ title: string; value: string }>;
};

type FormValues = {
  forms: Array<FormKeys>;
};

interface ColumnsProps {
  id: 'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm';
  children: React.ReactNode;
}

interface InputWrapperProps extends BaseForm {
  formId: 'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm';
  index: number;
  register: UseFormRegister<FormValues>;
  watch: UseFormWatch<FormValues>;
  setValue: UseFormSetValue<FormValues>;
}

interface ColumnInit {
  data: FieldArrayWithId<FormValues, 'forms', 'id'>[];
  id: 'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm';
}

export type {
  FormValues,
  ColumnsProps,
  FormKeys,
  InputWrapperProps,
  ColumnInit,
};
