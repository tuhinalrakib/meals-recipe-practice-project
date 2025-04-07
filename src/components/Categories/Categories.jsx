import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
    const [categories,setCategories] = useState([])
    const [errors,setErrors] = useState(null)

    useEffect(()=>{
        const fetchApi = async ()=>{
            try{
                const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                if(!res){
                    throw new Error('Failed fetch data')
                }
                const data = await res.json()
                setCategories(data.categories)
                }catch(e){
                    setErrors(e.message)
                }
            }
        fetchApi()
    },[])

    console.log(categories)
    console.log(errors)

    return (
        <div className='w-[90%] mx-auto grid grid-cols-3 gap-5 my-6'>
            {
                categories.map(category=><Category category={category}></Category>)
            }
        </div>
    );
};

export default Categories;