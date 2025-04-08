import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import Button from './components/Button/Button'



function App() {
  const [showCategories,setShowCategories] = useState(false)
  
  const handleCategories = ()=>{
    setShowCategories(true) 
  }
  
 

  return (
    <>
      <Navbar></Navbar>
      <div className="categories flex justify-center items-center gap-5 m-5">
          <Button bgColor='#3498db' textColor="#ddd">Home</Button>
          <Button bgColor='#8e44ad' textColor='#ffffff' onClick={handleCategories}>By Catgories</Button>
      </div>
          {
            showCategories && <Categories></Categories>
          }
    </>
  )
}

export default App
