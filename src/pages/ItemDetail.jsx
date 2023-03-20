import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCartItems, handleResetCart } from '../store/cart';

//Components
import Navbar from '../components/Navbar'

const ItemDetail = () => {
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
        <div className='h-screen bg-slate-100'>
            <Navbar cart={cart} handleResetCart={handleResetCart} />
            <div className='w-3/4 mx-auto my-10'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img src='https://static.zattini.com.br/produtos/tenis-nike-air-zoom-couro-resistance-masculino/90/D12-7601-890/D12-7601-890_zoom1.jpg?ts=1661527985&ims=544x' className='h-96 rounded-lg shadow-lg'/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-xl'>Nike Blazer Jumbo Low</h1>
                        <p className='mt-1 text-gray-500'>Calzado para Hombres</p>
                        <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus fugiat tempore, repellendus explicabo porro ipsum ab dignissimos provident labore voluptatibus ratione illum sit, unde voluptas cumque reprehenderit distinctio dicta similique.</p>
                        <div className='flex justify-between items-center mt-6'>
                            <p className='text-xl font-bold'>$499</p>
                            <div className='space-x-3'>
                                <input type="number" name="quantity" id="quantity" className='w-12 text-center rounded-lg border' value={0} onChange={() => {}}/>
                                <button 
                                    className='bg-yellow-500 p-1 rounded-lg text-white font-bold hover:bg-orange-600 ease-out duration-300' 
                                    onClick={handleOnSelectItem}
                                >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail