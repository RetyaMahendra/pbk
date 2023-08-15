import { useState, useRef, ChangeEvent } from 'react';
import EmptyLogo from '../../logo.png';
import {
  Box,
  Button,
  Modal,
  IconButton,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActions,
  Divider,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
  gap: 2,
  flexDirection: 'column',
};

const boxImage = {
  border: '1px dashed gray',
  height: 250,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const buttonImage = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const ProductManagement = () => {
  const [productList, setProductList] = useState<Array<any>>([]);
  const [productForm, setProductForm] = useState({
    name: '',
    url: '',
    file: '',
  });
  const [open, setOpen] = useState(false);
  const [isErrorForm, setErrorForm] = useState<{ [key: string]: boolean }>({
    name: false,
    url: false,
    file: false,
  });
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setProductForm({
      ...productForm,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleAddProduct() {
    setProductList([...productList, { ...productForm }]);
    setProductForm({
      name: '',
      url: '',
      file: '',
    });
    setOpen(false);
  }

  function handleDeleteProduct(idx: number) {
    const currentProduct = [...productList];
    currentProduct.splice(idx, 1);
    setProductList(currentProduct);
  }

  const renderEmpty = () => {
    return (
      productList.length < 1 && (
        <div className='flex items-center h-[calc(100vh-30px)] justify-center'>
          <div className='flex flex-col gap-4 items-center'>
            <img src={EmptyLogo} alt='empty' />
            <p className='font-semibold text-2xl'>
              Add Product to see the content
            </p>
            <Button variant='contained' onClick={() => setOpen(true)}>
              Add Product
            </Button>
          </div>
        </div>
      )
    );
  };

  console.log(productList);

  const renderModalForm = (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-form-product'
      aria-describedby='modal-add-product'
    >
      <Box sx={style}>
        <Box sx={boxImage}>
          {productForm?.file && (
            <img
              src={productForm.file}
              alt='product'
              className='h-full w-full'
            />
          )}
          <IconButton
            size='large'
            sx={buttonImage}
            onClick={() => {
              if (inputFileRef.current) {
                inputFileRef.current.click();
              }
            }}
          >
            <AddCircleOutlineOutlinedIcon fontSize='large' />
          </IconButton>
        </Box>
        <TextField
          id='product-name'
          label='Product Name'
          variant='outlined'
          fullWidth
          name='name'
          required
          onChange={handleChange}
        />
        <TextField
          id='product-url'
          label='Product URL'
          variant='outlined'
          fullWidth
          name='url'
          required
          onChange={handleChange}
        />
        <input
          type='file'
          id='files'
          accept='.png, .jpg, .jpeg, .svg'
          hidden
          name='file'
          onChange={handleChangeFile}
          ref={inputFileRef}
        />
        <Button variant='contained' onClick={handleAddProduct}>
          Add Product
        </Button>
      </Box>
    </Modal>
  );

  const renderProductList = (product: any, idx: number) => {
    return (
      productList.length > 0 && (
        <Card sx={{ position: 'relative' }}>
          <IconButton
            size='small'
            sx={{ position: 'absolute', right: '0' }}
            onClick={() => {
              if (inputFileRef.current) {
                inputFileRef.current.click();
              }
            }}
          >
            <ClearIcon
              fontSize='small'
              color='error'
              onClick={() => handleDeleteProduct(idx)}
            />
          </IconButton>
          <CardMedia
            component='img'
            sx={{ height: 140, objectFit: 'scale-down' }}
            image={product.file}
            alt='product-image'
          />
          <CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href={product.url} target='_blank' rel='noreferrer'>
                <Button size='small' color='primary'>
                  Product Link
                </Button>
              </a>
            </CardActions>
            <Typography variant='h5' component='div'>
              {product.name}
            </Typography>
          </CardContent>
        </Card>
      )
    );
  };

  const renderToolbarActions = () => {
    return (
      productList.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            mb: 2,
          }}
        >
          <Button variant='contained' onClick={() => setOpen(true)}>
            Add Product
          </Button>
          <Divider flexItem />
        </Box>
      )
    );
  };

  return (
    <div className='p-4 relative'>
      {renderEmpty()}
      {renderModalForm}
      {renderToolbarActions()}
      <Grid container spacing={2}>
        {productList.map((product, idx) => (
          <Grid item xs={4} sm={3} md={3} key={idx}>
            {renderProductList(product, idx)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductManagement;
