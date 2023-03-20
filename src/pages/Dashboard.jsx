import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartItems, handleResetCart } from '../store/cart';

//Components
import FiltersCard from '../components/FiltersCard';
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard';

const Dashboard = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // const [cart, setCart] = useState([]);

  console.log(cart)

  const handleOnSelectItem = () => {
    dispatch(setCartItems({
      id: Math.random() * 100,
      img: 'https://static.zattini.com.br/produtos/tenis-nike-air-zoom-couro-resistance-masculino/90/D12-7601-890/D12-7601-890_zoom1.jpg?ts=1661527985&ims=544x',
      nombre: 'Nike Blazer Low Jumbo',
      precio: 499,
      cantidad: 1
    }))
  }

  const handleResetCart = () => {
    dispatch(handleResetCart());
  }

  return (
    <div className='h-auto bg-slate-100'>
        <Navbar cart={cart} handleResetCart={handleResetCart} />
        <div className='flex'>
          <FiltersCard />
        <div className='w-5/6 p-5 m-10'>
          <h1 className='font-bold text-xl'>Calzado para Hombre</h1>
          <div className='grid grid-cols-3 gap-5 mt-10'>
            
            <ProductCard handleOnSelectItem={handleOnSelectItem} />
            <ProductCard handleOnSelectItem={handleOnSelectItem} />
            <ProductCard handleOnSelectItem={handleOnSelectItem} />
            
            
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard