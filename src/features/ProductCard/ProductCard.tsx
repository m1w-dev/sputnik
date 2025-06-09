import {
  Card,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material'

import { formatPrice } from 'utils'


type ProductCardProps = {
  title: string
  origin: string
  price: number
  currency: Currency
  imageUrl: string
}
export const ProductCard = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}: ProductCardProps) => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: [1, 650],
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: ['column', 'row'],
    }}>
    <CardMedia
      alt={title}
      component="img"
      image={imageUrl}
      sx={{
        width: [1, 300],
        aspectRatio: '4/3',
        objectFit: 'cover',
        objectPosition: 'center center',
        display: 'inline-block',
      }}
    />
    <CardContent sx={{
      px: [2, 4],
      py: [1, 2],
      overflow: 'auto',
    }}>
      <Typography variant="subtitle1" color="primary" noWrap>
        {formatPrice(price, currency)}
      </Typography>
      <Typography variant="h5" noWrap>{title}</Typography>
      <Typography variant="subtitle2" noWrap>{origin}</Typography>
    </CardContent>
  </Card>
)
