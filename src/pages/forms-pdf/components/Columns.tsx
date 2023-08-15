import React, { FC } from 'react';
import { ColumnsProps } from '../types';
import { StrictModeDroppable } from '../../../components/droppable-strict';

const Columns: FC<ColumnsProps> = ({ id, children }) => {
  return (
    <StrictModeDroppable droppableId={id}>
      {(provided) => (
        <div
          className='flex flex-col w-full gap-3'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </StrictModeDroppable>
  );
};

export default Columns;
