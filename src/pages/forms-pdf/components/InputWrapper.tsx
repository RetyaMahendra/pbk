import TextField from '@mui/material/TextField';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import { InputWrapperProps } from '../types';
import { Draggable } from 'react-beautiful-dnd';

const InputWrapper = ({
  formValues,
  index,
  register,
  watch,
  setValue,
  formId,
}: InputWrapperProps) => {
  const isDisabled = watch(`${formId}.${index}.isEditingTitle`);
  return (
    <Draggable draggableId={formValues.id} index={index}>
      {(provided) => (
        <div
          className='flex flex-col gap-2'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='flex items-center gap-2 w-full'>
            <input
              className='w-full'
              key={formValues.id}
              {...register(`${formId}.${index}.title`)}
              disabled={!isDisabled}
            />
            {isDisabled ? (
              <EditOffOutlinedIcon
                role='button'
                onClick={() =>
                  setValue(`${formId}.${index}.isEditingTitle`, false)
                }
              />
            ) : (
              <ModeEditOutlinedIcon
                role='button'
                onClick={() =>
                  setValue(`${formId}.${index}.isEditingTitle`, true)
                }
              />
            )}
          </div>
          <TextField
            variant='outlined'
            key={formValues.id}
            {...register(`${formId}.${index}.formValue`)}
          />
        </div>
      )}
    </Draggable>
  );
};

export default InputWrapper;
