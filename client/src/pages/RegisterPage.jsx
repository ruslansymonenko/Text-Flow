import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <form 
      onSubmit={e => e.preventDefault()}
      className='w-1/4 h-60 mx-auto mt-40'
      >
      <h1 className='text-lg text-white text-center'>
        Реєстрація
      </h1>
      <label className='text-lg text-gray-400'>
        Username:
        <input 
          type="text"
          placeholder='User name'
          className='text-lg mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
          />
      </label>
      <label className='text-lg text-gray-400'>
        Password:
        <input 
          type="password"
          placeholder='Password'
          className='text-lg mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
          />
      </label>

      <div className='flex gap-8 justify-center mt-4'>
        <button 
          type='submit'
          className='flex justify-center items-center text-xs bg-gray-500 text-white rounded-sm py-2 px-4'
          >
            Підтвердити
          </button>
          <Link
            to={'/login'}
            className='flex justify-center items-center text-xs text-white'
          >
            Вже зареєстровані?
          </Link>
      </div>
    </form>
  )
}
