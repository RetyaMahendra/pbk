import { useForm, useFieldArray } from 'react-hook-form';
import Divider from '@mui/material/Divider';
import { FormValues } from './types';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { StrictModeDroppable } from '../../components/droppable-strict';
import Button from '@mui/material/Button';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Summary from './components/Summary';

const Builder = () => {
  const { control, watch, register, setValue, handleSubmit } =
    useForm<FormValues>({
      defaultValues: {
        forms: [],
      },
    });
  const { fields, append } = useFieldArray({
    control,
    name: 'forms',
  });

  function handleDragEnd({ source, destination }: DropResult) {
    if (!destination) return;
    const currentFieldArray = watch('forms');
    const [movedItem] = currentFieldArray.splice(source.index, 1);
    currentFieldArray.splice(destination.index, 0, movedItem);
    setValue('forms', currentFieldArray);
  }

  const onSubmit = (data: any) => console.log('data', data);

  function handleAppendTable() {
    append({
      type: 'table',
      title: 'default title',
      columns: [{ column: 'Default Column', isEditing: false }],
      rows: [
        {
          row: [{ value: 'Default Row', isEditing: false }],
        },
      ],
    });
  }

  function handleAppendForms() {
    append({
      type: 'forms',
      title: 'default title',
      leftColumn: [{ label: 'default label', value: 'default value' }],
      rightColumn: [{ label: 'default label', value: 'default value' }],
    });
  }

  function handleAppendSummary() {
    append({
      type: 'summary',
      title: 'Score Summary',
      details: {
        label: 'Score Factors',
        points:
          '1. Less than 6 months with timely payments after delinquency on at least one open contract',
      },
    });
  }

  function handleAppendDetailKredit() {
    append({
      type: 'detail-kredit',
      title: 'Detail Kredit',
      subtitle: 'Kredit/Pembiayaan',
      header: [
        { title: 'Pelapor', value: 'Default Pelapor' },
        { title: 'Cabang', value: 'Cabang bank pelapor' },
        { title: 'Baki Debet', value: 'Total Debet Pelapor' },
        { title: 'Tanggal Update', value: '01 Januari 1970' },
      ],
    });
  }

  const renderActionRows = (
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        <Button variant='outlined' onClick={handleAppendForms}>
          Add Forms
        </Button>
        <Button variant='outlined' onClick={handleAppendSummary}>
          Add Summary
        </Button>
        <Button variant='outlined' onClick={handleAppendTable}>
          Add Table
        </Button>
      </div>
      <Button variant='outlined'>
        <Link
          to='/form-pdf'
          state={{
            listForms: watch('forms'),
          }}
        >
          Generate PDF
        </Link>
      </Button>
    </div>
  );

  return (
    <div className='p-4'>
      {renderActionRows}
      <Divider sx={{ my: 2 }} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <StrictModeDroppable droppableId='dropArea'>
          {(provided) => (
            <div
              className='flex flex-col w-full gap-4'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {fields.map((formValues, index) => (
                <Draggable
                  draggableId={formValues.id}
                  index={index}
                  key={formValues.id}
                >
                  {(provided) => (
                    <div
                      className='flex flex-col gap-4'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {(() => {
                        if (formValues.type === 'forms') {
                          return (
                            <Forms
                              nestIndex={index}
                              {...{ register, control }}
                            />
                          );
                        } else if (formValues.type === 'table') {
                          return (
                            <Tables
                              nestIndex={index}
                              {...{ register, control, setValue, watch }}
                            />
                          );
                        } else if (formValues.type === 'summary') {
                          return <Summary {...{ register, index }} />;
                        }
                      })()}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};

export default Builder;
