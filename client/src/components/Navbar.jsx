import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
  
  const isAuth = false;

  const activeStyles = {
    color: 'white',
  }

  return (
    <div className='flex py-4 justify-between item-center'>
      <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>
        E
      </span>

      {
        isAuth && <ul className='flex gap-8'>
        <li>
          <NavLink
          className='text-sx text-gray-400 hover:text-white' 
          to={'/'}
          href="/"
          style={({isActive}) => isActive ? activeStyles : undefined}
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink 
          className='text-sx text-gray-400 hover:text-white'
          to={'/posts'} 
          href="/"
          style={({isActive}) => isActive ? activeStyles : undefined}
          >
            Мої публікації
          </NavLink>
        </li>
        <li>
          <NavLink 
          className='text-sx text-gray-400 hover:text-white'
          to={'/new'} 
          href="/"
          style={({isActive}) => isActive ? activeStyles : undefined}
          >
            Добавити публікацію
          </NavLink>
        </li>
      </ul>
      }

      <div className='flex justify-center items-center bg-gray-500 text-xs text-white rounded-sm px-4 py-2'>
        {
          isAuth ? (
            <button>Вихід</button>
          ) : (
            <Link to={'/login'}>
              <button>Вхід</button>
            </Link>
          )
        }
      </div>
    </div>
  )
}
