import {
  FieldArrayWithId,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form';

type BaseForm = {
  formValues: FieldArrayWithId<
    FormValues,
    'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm',
    'id'
  >;
};

type FormKeys = {
  formValue: string;
  title: string;
  isEditingTitle: boolean;
};

type FormValues = {
  firstColumnForm: Array<FormKeys>;
  secondColumnForm: Array<FormKeys>;
  thirdColumnForm: Array<FormKeys>;
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
  data: FieldArrayWithId<
    FormValues,
    'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm',
    'id'
  >[];
  id: 'firstColumnForm' | 'secondColumnForm' | 'thirdColumnForm';
}

export type {
  FormValues,
  ColumnsProps,
  FormKeys,
  InputWrapperProps,
  ColumnInit,
};
