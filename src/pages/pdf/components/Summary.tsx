import SummaryImage from '../../../summary.png';
import TextField from '@mui/material/TextField';

const Summary = ({ index, register }: any) => {
  return (
    <div className='flex gap-8 w-full'>
      <div className='flex flex-col gap-2'>
        <TextField
          type='text'
          variant='standard'
          {...register(`forms.${index}.title`)}
        />
        <img src={SummaryImage} alt='summary-points' height='150' width='150' />
      </div>
      <div className='flex flex-col gap-2 flex-1'>
        <TextField
          type='text'
          variant='standard'
          {...register(`forms.${index}.details.label`)}
        />
        <TextField
          type='text'
          variant='standard'
          fullWidth
          {...register(`forms.${index}.details.points`)}
        />
      </div>
    </div>
  );
};

export default Summary;
