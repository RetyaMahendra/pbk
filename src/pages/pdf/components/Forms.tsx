import TextField from '@mui/material/TextField';
import { useFieldArray } from 'react-hook-form';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

const Forms = ({ nestIndex, control, register }: any) => {
  const { fields: leftColumn, append: appendLeft } = useFieldArray({
    control,
    name: `forms.${nestIndex}.leftColumn`,
  });
  const { fields: rightColumn, append: appendRight } = useFieldArray({
    control,
    name: `forms.${nestIndex}.rightColumn`,
  });
  const [form, setForm] = useState('leftColumn');

  function handleAddForm() {
    switch (form) {
      case 'leftColumn':
        return () => {
          appendLeft({ label: 'default label', value: 'default value' });
          setForm('rightColumn');
        };
      case 'rightColumn':
        return () => {
          appendRight({ label: 'default label', value: 'default value' });
          setForm('leftColumn');
        };
      default:
        return;
    }
  }

  const renderFormContainer = (column: string, idx: number) => (
    <div className='grid grid-cols-2 gap-x-8 items-baseline' key={idx}>
      <TextField
        variant='standard'
        {...register(`forms.${nestIndex}.${column}.${idx}.label`)}
      />
      <TextField
        size='small'
        fullWidth
        {...register(`forms.${nestIndex}.${column}.${idx}.value`)}
      />
    </div>
  );

  return (
    <>
      <div className='flex gap-4 '>
        <TextField
          variant='standard'
          {...register(`forms.${nestIndex}.title`)}
          fullWidth
        />
        <IconButton
          size='small'
          aria-label='add-form'
          onClick={handleAddForm()}
        >
          <AddCircleOutlineTwoToneIcon color='primary' />
        </IconButton>
      </div>
      <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
        {leftColumn.map((_, idx) => renderFormContainer('leftColumn', idx))}
        {rightColumn.map((_, idx) => renderFormContainer('rightColumn', idx))}
      </div>
    </>
  );
};

export default Forms;
