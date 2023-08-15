import {
  Control,
  useFieldArray,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

interface DynamicTableProps {
  nestIndex: number;
  control: Control<any, any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EFEFEF4D',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Tables = ({
  nestIndex,
  control,
  register,
  setValue,
  watch,
}: DynamicTableProps) => {
  const { fields: columns, append: appendColumn } = useFieldArray({
    control,
    name: `forms.${nestIndex}.columns`,
  });

  const { fields: rows, append: appendRow } = useFieldArray({
    control,
    name: `forms.${nestIndex}.rows`,
  });

  function handleToggleEditColumn(index: number, state: boolean) {
    setValue(`forms.${nestIndex}.columns.${index}.isEditing`, state);
  }

  function handleAddAction() {
    appendColumn({ column: 'Default Column', isEditing: false });
    appendRow({
      row: [{ value: 'Default Row', isEditing: false }],
    });
  }

  function handleAddRow() {
    const currentRow = [...rows] as any[];
    const newRow = currentRow.map((val) => ({
      ...val,
      row: [...val.row, { value: 'Default Row', isEditing: false }],
    }));
    setValue(`forms.${nestIndex}.rows`, newRow);
  }

  const renderAddColumnsRowsButton = (
    <IconButton
      size='small'
      aria-label='add-column'
      sx={{ position: 'absolute', left: '-7px', top: '-6px' }}
      onClick={handleAddAction}
    >
      <AddCircleOutlineTwoToneIcon />
    </IconButton>
  );

  const renderAddRowsButton = (
    <IconButton
      size='small'
      aria-label='add-column'
      sx={{ position: 'absolute', left: '-7px', bottom: '-6px' }}
      onClick={handleAddRow}
    >
      <AddCircleOutlineTwoToneIcon />
    </IconButton>
  );

  const renderDynamicColumnRows = () => {
    return (
      <TableRow>
        {columns.map((_, index) => {
          return (
            <NestedTableRow
              key={index}
              {...{ register, watch, nestIndex, index }}
            />
          );
        })}
      </TableRow>
    );
  };

  return (
    <>
      <TextField variant='standard' {...register(`forms.${nestIndex}.title`)} />
      <TableContainer component={Paper} sx={{ position: 'relative' }}>
        {renderAddColumnsRowsButton}
        {renderAddRowsButton}
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
            },
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((_, idx: number) => {
                const isEditingColumn = !watch(
                  `forms.${nestIndex}.columns.${idx}.isEditing`
                );
                return (
                  <StyledTableCell
                    onDoubleClick={() => handleToggleEditColumn(idx, true)}
                    key={idx}
                  >
                    <input
                      className='w-full'
                      {...register(`forms.${nestIndex}.columns.${idx}.column`)}
                      disabled={isEditingColumn}
                    />
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>{renderDynamicColumnRows()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;

const NestedTableRow = ({
  nestIndex,
  register,
  watch,
  index,
}: Omit<DynamicTableProps, 'type' | 'control' | 'setValue'> & {
  index: number;
}) => {
  const row = watch(`forms.${nestIndex}.rows.${index}.row`);

  return (
    <TableCell component='th' scope='row'>
      {row.map((_: any, idx: number) => {
        return (
          <TextField
            key={idx}
            fullWidth
            sx={{ mb: 2 }}
            {...register(`forms.${nestIndex}.rows.${index}.row.${idx}.value`)}
          />
        );
      })}
    </TableCell>
  );
};
