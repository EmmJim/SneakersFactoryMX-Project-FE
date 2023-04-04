import React from 'react'

const FiltersCard = () => {
    return (
        <aside className='w-1/6 p-5 my-10 overflow-y-auto h-screen sticky top-0 scrollbar' id='style-1'>
            <h2 className='font-bold text-xl'>Filtros</h2>
            <div className='bg-white p-5 mt-5 rounded-lg'>
                <div className=''>
                    <p className='font-bold mb-3'>Estilo</p>
                    <ul>
                        <li>Calzado Deportivo</li>
                        <li>Zapatos</li>
                        <li>Casual</li>
                        <li>Tendencias</li>
                        <li>Calzado Deportivo</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <p className='font-bold mb-3'>Tallas</p>
                    <ul className='grid grid-cols-3 gap-2'>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>24</li>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>25</li>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>26</li>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>27</li>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>28</li>
                        <li className='border-2 hover:border-black cursor-pointer text-center'>29</li>
                    </ul>
                </div>

                <div className='mt-5'>
                    <p className='font-bold mb-3'>Género</p>
                    <ul>
                        <li className='flex space-x-3'>
                        <input type="checkbox" name="hombre" id="hombre" />
                        <p>Hombre</p>
                        </li>
                        <li className='flex space-x-3'>
                        <input type="checkbox" name="mujer" id="mujer" />
                        <p>Mujer</p>
                        </li>
                        <li className='flex space-x-3'>
                        <input type="checkbox" name="unisex" id="unisex" />
                        <p>Unisex</p>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </aside>
    )
}

export default FiltersCard