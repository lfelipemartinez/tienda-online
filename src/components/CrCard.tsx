import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChips from './CrChips';
import CrRating from './CrRating';
import CrBtnAction from './CrBtnAction';
import { useState } from 'react';
import CrModal from './CrModal';
import { Stack } from '@mui/material';
import { Products } from '../types/Products';

interface Props {
  items: Products
}
export default function CrCard({ items }: Props) {

  const [isCheck, setCheck] = useState(true)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCheck = () => {

    setCheck(!isCheck)
  }

  const handleShow = () => {

    console.log('show')
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Stack direction='row' m={2} spacing={2}>
          <CrChips />

        </Stack>
        <CardMedia
          sx={{ height: 500 }}
          component={'img'}
          image={items.image}
          title="green iguana"
          style={{

            width: '200',
            height: '200',
            objectFit: 'contain'
          }}
          alt='img'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CrRating />
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between'

          }}
        >
          <CrBtnAction isShow isCheck={isCheck} handleShow={handleClickOpen} />
          <CrBtnAction isCheck={isCheck} handleCheck={handleCheck} />

        </CardActions>
      </Card>
      <CrModal open={open} handleClose={handleClose} />
    </>
  );
}
