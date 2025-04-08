import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
    const [categories,setCategories] = useState([])
    const [errors,setErrors] = useState(' ')

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCategories(data.categories))
        .catch(e=>setErrors(e.message))
    },[])

    console.log(categories)
    console.log(errors)

    return (
        <div className='w-[90%] mx-auto grid grid-cols-3 gap-5 my-6'>
            {
                categories.length > 0 ? (categories.map(category=><Category key={category.idCategory} category={category}></Category>))
                :(
                    <P className="text-red-500">{errors}</P>
                )
            }
        </div>
    );
};

export default Categories;