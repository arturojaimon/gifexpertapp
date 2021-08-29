import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers.js/getGIfs';
export const GifGrid = ({category}) => {
        // const [images, setImages] = useState([]);
        const {data : images,loading} = useFetchGifs(category);
        // useEffect(()=>{
        //     getGifs(category).then(imgs => setImages(imgs))
        // },[]);
    return (
        <>
             <h3>{category}</h3>
             {loading && <p>Loading</p>}
             <div className = 'card-grid'>
                {
                    images.map((img)=>{
                        return <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    })
                }
            </div>
        </>
       
    )
}
