import React, {useEffect} from 'react'
import { useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);
  return (
    <>  
      <h3>{category}</h3>
      {
        isLoading && (<h2>cargando..</h2>)
      }
      <div>
        {images.map((image) =>
          <GifItem 
            key={image.id}
            {...image}
          />
        )}
      </div>
    </>
  )
}
