import { useForm, useFieldArray } from 'react-hook-form';
import Divider from '@mui/material/Divider';
import { FormValues, ColumnInit } from './types';
import Columns from './components/Columns';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import InputWrapper from './components/InputWrapper';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FormsPdf = () => {
  const { control, watch, register, setValue } = useForm<FormValues>({
    defaultValues: {
      firstColumnForm: [],
      secondColumnForm: [],
      thirdColumnForm: [],
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'firstColumnForm',
  });

  const { fields: secondColumn, append: appendSecondColumnForm } =
    useFieldArray({
      control,
      name: 'secondColumnForm',
    });

  const { fields: thirdColumn, append: appendThirdColumnForm } = useFieldArray({
    control,
    name: 'thirdColumnForm',
  });
  const [defaultColumn, setDefaultColumn] = useState('firstColumnForm');

  const columnData: ColumnInit[] = [
    { data: fields, id: 'firstColumnForm' },
    { data: secondColumn, id: 'secondColumnForm' },
    { data: thirdColumn, id: 'thirdColumnForm' },
  ];

  function moveToSameColumn(
    start: Array<FormValues>,
    sourceIndex: number,
    destinationIndex: number
  ) {
    const [movedItem] = start.splice(sourceIndex, 1);
    start.splice(destinationIndex, 0, movedItem);
    return start;
  }

  function moveToAnotherColumn(
    start: Array<FormValues>,
    end: Array<FormValues>,
    sourceIndex: number,
    destinationIndex: number
  ) {
    const [movedItem] = start.splice(sourceIndex, 1);
    end.splice(destinationIndex, 0, movedItem);
    return [start, end];
  }

  function handleDragEnd({ source, destination }: DropResult) {
    if (destination === undefined || destination === null) return null;
    const { droppableId: sourceId, index: sourceIndex } = source;
    const { droppableId: destinationId, index: destinationIndex } = destination;

    if (sourceId === destinationId && destinationIndex === sourceIndex)
      return null;

    const start = watch(sourceId as any);
    const end = watch(destinationId as any);

    if (start === end) {
      const newList = moveToSameColumn(start, sourceIndex, destinationIndex);
      setValue(destinationId as any, newList);
    } else {
      const [sourceArray, destinationArray] = moveToAnotherColumn(
        start,
        end,
        sourceIndex,
        destinationIndex
      );
      setValue(sourceId as any, sourceArray);
      setValue(destinationId as any, destinationArray);
    }
  }

  function handleAppendForm() {
    switch (defaultColumn) {
      case 'firstColumnForm':
        append({
          formValue: 'default value',
          title: `default title ${watch(`${defaultColumn}`).length}`,
          isEditingTitle: false,
        });
        setDefaultColumn('secondColumnForm');
        break;
      case 'secondColumnForm':
        appendSecondColumnForm({
          formValue: 'default value',
          title: `default title ${watch(`${defaultColumn}`).length}`,
          isEditingTitle: false,
        });
        setDefaultColumn('thirdColumnForm');
        break;
      case 'thirdColumnForm':
        appendThirdColumnForm({
          formValue: 'default value',
          title: `default title ${watch(`${defaultColumn}`).length}`,
          isEditingTitle: false,
        });
        setDefaultColumn('firstColumnForm');
        break;
    }
  }

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <button
          className='border border-solid p-2 rounded-md'
          onClick={handleAppendForm}
        >
          add form
        </button>
        <button className='border border-solid p-2 rounded-md'>
          <Link
            to='/pdf'
            state={{
              listForms: [
                { data: watch('firstColumnForm'), id: 'firstColumnForm' },
                { data: watch('secondColumnForm'), id: 'secondColumnForm' },
                { data: watch('thirdColumnForm'), id: 'thirdColumnForm' },
              ],
            }}
          >
            Generate PDF
          </Link>
        </button>
      </div>

      <Divider sx={{ my: 2 }} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='grid grid-cols-3 gap-4'>
          {columnData.map(({ data, id }) => (
            <Columns id={id} key={id}>
              {data.map((formValues, index) => (
                <InputWrapper
                  formValues={formValues}
                  formId={id}
                  index={index}
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  key={formValues.id}
                />
              ))}
            </Columns>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default FormsPdf;
