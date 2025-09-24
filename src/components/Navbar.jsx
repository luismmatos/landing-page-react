import React from 'react'

function Navbar() {
  return (
    <>
      <header className='header'>
        <ul className='left-link'>
          <li><a href='#'>Header Logo</a></li>
        </ul>
        <ul className='right-link'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contacts</a></li>
        </ul>
      </header>
    </>
  )
}

export default Navbar