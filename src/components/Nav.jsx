// src/components/Nav.js
import React from 'react';

function Nav() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul>
        <li><a href="#women">Women's</a></li>
        <li><a href="#men">Men's</a></li>
        <li><a href="#street">On The Street</a></li>
        <li><a href="#catwalk">The Catwalk</a></li>
        <li><a href="#adwatch">AdWatch</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
