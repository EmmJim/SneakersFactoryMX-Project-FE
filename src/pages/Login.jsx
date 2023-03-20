import React from 'react'

const Login = () => {
  return (
    <div className='h-screen bg-orange-600 flex flex-col space-y-7 justify-center items-center'>
        <h1 className='text-6xl font-bold title hover:cursor-pointer ease-out duration-1000 text-white'>SneakersFactoryMX</h1>
        <div className='w-2/5 bg-white p-5 rounded-lg shadow-2xl'>
            <h2 className='text-2xl font-bold text-center'>Sign In</h2>
            <hr className='my-3'/>
            <form className='mt-8 space-y-4'>
                <div className='flex flex-col space-y-3'>
                    <label className='font-bold'>Email: </label>
                    <input type="email" name="email" id="email" placeholder='Your email here' className='p-2 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1'/>
                </div>
                <div className='flex flex-col space-y-3'>
                    <label className='font-bold'>Password: </label>
                    <input type="password" name="password" id="password" placeholder='Your password here' className='p-2 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1'/>
                </div>
                <div className='flex justify-center'>
                    <button className='p-2 bg-orange-600 text-white font-bold rounded-lg hover:cursor-pointer hover:scale-105 duration-300 ease-out'>Log In</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login