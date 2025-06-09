import { Box } from '@mui/material'

import { ProductCard } from 'features'


export const App = () => (
  <Box sx={{ '*': { boxSizing: 'border-box' } }}>
    <ProductCard
      title="Название товара"
      origin="Тайданд"
      price={1010100}
      currency="RUB"
      imageUrl="/palms.jpg"
    />
  </Box>
)
