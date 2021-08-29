import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['one punch']);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = {setcategories}/>
            <hr/>
            <ol>
             {
             categories.map((category) =>(
                 <GifGrid 
                    key = {category}
                    setcategories = {category}
                 />
                ))
            }
            </ol>
                
        </>
    )
            }
