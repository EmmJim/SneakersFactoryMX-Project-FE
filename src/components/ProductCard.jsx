import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({handleOnSelectItem}) => {
  return (
    <div className=''>
        <Link to={'/item'} className=''>
          <img src='https://static.zattini.com.br/produtos/tenis-nike-air-zoom-couro-resistance-masculino/90/D12-7601-890/D12-7601-890_zoom1.jpg?ts=1661527985&ims=544x' className='bg-white shadow-md hover:shadow-xl ease-out duration-300 hover:cursor-pointer'/>
        </Link>
        <p className='mt-5'>Nike Blazer Low Jumbo</p>
        <p className='mt-1 text-gray-500'>Calzado para Hombres</p>
        <div className='flex justify-between items-center mt-6'>
            <p className='text-xl font-bold'>$499</p>
            <button 
                className='bg-yellow-500 p-1 rounded-lg text-white font-bold hover:bg-orange-600 ease-out duration-300' 
                onClick={handleOnSelectItem}
            >Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard