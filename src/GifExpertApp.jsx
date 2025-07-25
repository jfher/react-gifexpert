import { useState } from 'react'
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components' // Archivo de barril

export const GIfExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory= (newCategory) => {
        if( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GIfExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            {categories.map( category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
