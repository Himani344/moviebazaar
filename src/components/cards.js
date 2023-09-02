import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

 function HimImageList() {
  return (
    <ImageList sx={{ width: 1300, height: 1120 }} cols={4} rowHeight={364}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            
          
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default HimImageList;

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.PMRgTc7QJrf_nBSQY5gHGgHaEo?pid=ImgDet&rs=1',
    title: 'Sanam Teri kasam',
  },
  {
    img: 'https://2.bp.blogspot.com/-FRxJmbGM1jc/Vpd7kiEqlWI/AAAAAAAAAY0/ZmmcTXoiVK8/s1600/HD-3-Idiots-Wallpapers.jpg',
    title: '3 Idiots',

  },
  {
    img: 'https://th.bing.com/th/id/OIP.XLpaRzfWDIj61NUXjone8gHaKl?w=119&h=180&c=7&r=0&o=5&pid=1.7',
    title: 'Hum Aapke Hai Kaun',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.b4KuUXQtSwXwpHTjSMGpfwHaEK?pid=ImgDet&rs=1',
    title: 'Hum Sath Sath Hai',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.DxjCIR4SNx8odMkJr1P8aQHaFb?w=238&h=180&c=7&r=0&o=5&pid=1.7',
    title: 'Mai Hu Na',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.Iu_k4ovONUqw1GhMcN3q7AHaFj?pid=ImgDet&rs=1',
    title: 'Kal Ho Na Ho',
  },
  {
    img: 'https://wartalaap.com/wp-content/uploads/2021/03/King-768x432.jpg',
    title: 'Kuch Kuch Hota hai',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.qSjUbtJxNRtgzQFkvJXxEwHaKr?w=178&h=257&c=7&r=0&o=5&pid=1.7',
    title: 'Barfi',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.KLIdd6Aus_niFnVAUsYK8AHaEo?w=178&h=111&c=7&r=0&o=5&pid=1.7',
    title: '2 States',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.EyBCVARq5754WI-krjXmnQHaEK?pid=ImgDet&rs=1',
    title: 'Kabhi Khushi Kabhi Gham',
  },
  {
    img: 'https://th.bing.com/th/id/R.f0f92412b8b9c411af03cb4823eace22?rik=S%2fGKUsHLmnRIcw&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f51Z0eLVX-tL.jpg&ehk=9KdNS5r00r4UbO4JOUe5xlo0kelu6D2PjFGl5s%2fL9cs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    title: 'Talaash',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.GpLmdK8VeOYlUqcUDy_zsQHaDt?pid=ImgDet&rs=1',
    title: 'Baby',
  },
];