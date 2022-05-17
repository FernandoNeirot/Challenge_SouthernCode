import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';



export default function CardToPhoto(props) {
    const { info:{img_src,camera:{full_name},earth_date}}=props;
    
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <CameraAltIcon  aria-label="recipe"/>
        }
        title={`${full_name}`}
        subheader={`Earth Date${earth_date}`}
      />
      <CardMedia
        component="img"
        height="200"
        image={img_src}
        alt="photo"
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>           
      </CardActions>
    </Card>
  );
}
