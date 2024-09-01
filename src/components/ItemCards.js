// src/components/ItemCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Componente funcional que recibe las props "item"
function ItemCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        {/* Otros detalles como imagen, descripción corta */}
      </CardContent>
    </Card>
  );
}

export default ItemCard;
