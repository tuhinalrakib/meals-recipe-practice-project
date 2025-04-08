import React, { useState } from 'react'
import Button from '../Button/Button'

const Category = ({ category }) => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } = category

    const handleReadMore = () => {
        // document.getElementById('my_modal_1').showModal()
        setIsModalOpen(true)
    };

    const handleCloseModal = ()=>{
        setIsModalOpen(false)
    }

    return (
        <div className="text-center border-1 shadow-2xl border-gray-200 pb-4 rounded-2xl">
            <img src={strCategoryThumb} alt={strCategory} />
            <p>{idCategory}</p>
            <h2 className="text-2xl font-semibold text-blue-400">{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 30)}... <Button onClick={handleReadMore}>Read More</Button></p>

            {/* Modal */}
            <dialog open={isModalOpen} className="modal">
                <div className="modal-box">
                    <p className='text-gray-500 text-xl'>{strCategoryDescription}</p>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn">Close</button>
                        {/* <form method="dialog">
                        </form> */}
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Category;
