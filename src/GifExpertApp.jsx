import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Demon Slayer']);
    //console.log(categories);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory))return;
        //console.log('Valorant');
        setcategories([newCategory, ...categories]);
        //console.log(newCategory)
    }

  return (
    <>
    <h1>GiftExpertApp</h1>

    <AddCategory 
    onNewCategory = {(value) => onAddCategory (value)} 
    />


      {
      categories.map((category) =>(
          <GifGrid 
                key={category}
                category={category}
          />
      ))
      }

    </>
  )
}
