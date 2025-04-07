import React from 'react'
import Button from '../Button/Button'

const Category = ({ category }) => {
    const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } = category

    const handleReadMore = () => {
        document.getElementById('my_modal_1').showModal()
    };

    return (
        <div className="text-center border-1 shadow-2xl border-gray-200 pb-4 rounded-2xl">
            <img src={strCategoryThumb} alt={strCategory} />
            <p>{idCategory}</p>
            <h2 className="text-2xl font-semibold text-blue-400">{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 30)}... <Button onClick={handleReadMore}>Read More</Button></p>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <p className='text-gray-500 text-xl'>{strCategoryDescription}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Category;
