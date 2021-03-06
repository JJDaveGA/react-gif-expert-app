import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading && <p>Cargando...</p>}
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img} 
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid;
