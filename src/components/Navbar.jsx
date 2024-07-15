import React from 'react'

const Navbar = () => {

  return (
    <header className='shadow-header sticky top-0 z-10 bg-white dark:bg-light-dark'>
        <div className='container flex justify-between items-center py-6'>
            <h1>Where in the world?</h1>

            <button className='space-x-1'>
                <i className='bi bi-moon'></i>
                <span>Dark Mode</span>
            </button>
        </div>
    </header>
  )
}
export default Navbar