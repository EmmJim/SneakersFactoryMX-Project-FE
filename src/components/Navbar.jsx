import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {handleResetCart} from '../store/cart'

const Navbar = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const emptyCart = () => {
        dispatch(handleResetCart())
    }

    return (
        <div className='p-4 bg-orange-600 text-white flex justify-between items-center'>
            <ul>
                <li>
                    <Link to={'/calzado'} className='text-3xl font-bold title hover:cursor-pointer ease-out duration-1000 hover:text-yellow-300'>SneakersFactoryMX</Link>
                </li>
            </ul>
            <div className='flex space-x-5'>
                <ul>
                    <li className='font-bold hover:cursor-pointer hover:text-yellow-400 ease-out duration-300'>Mi cuenta</li>
                </ul>
                <ul>
                    <li className='font-bold hover:cursor-pointer hover:text-yellow-400 ease-out duration-300'>Mis pedidos</li>
                </ul>
                <ul>
                    <li className="submenu text-black">
                            <i className="fa-solid fa-cart-shopping text-white text-xl hover:cursor-pointer hover:text-yellow-400 ease-out duration-300"></i>
                            <div id="carrito" className='grid grid-cols-4 gap-5 overflow-auto rounded-lg scrollbar'>
                                <div className='flex flex-col'>
                                    <table id="lista-carrito" className="w-full text-center">
                                            <thead className=''>
                                                <tr>
                                                    <th className=''>Imagen</th>
                                                    <th className=''>Nombre</th>
                                                    <th className=''>Precio</th>
                                                    <th className=''>Cantidad</th>
                                                    <th className=''></th>
                                                </tr>
                                            </thead>
                                            <tbody>{cart.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img src={product.img} className="w-20"/>
                                                    </td>
                                                    <td>{product.nombre}</td>
                                                    <td>{product.precio}</td>
                                                    <td>{product.cantidad}</td>
                                                    <td><i className="fa-solid fa-circle-xmark text-red-600"></i></td>
                                                </tr>
                                            ))}</tbody>
                                        </table>

                                        <button  id="vaciar-carrito" className=" mt-10 p-2 bg-gray-600 text-white rounded-lg" onClick={emptyCart}>Vaciar Carrito</button>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar