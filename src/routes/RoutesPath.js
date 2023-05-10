import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import MenShoes from '../pages/MenShoes';
import WomenShoes from '../pages/WomenShoes';
import KidShoes from '../pages/KidShoes';

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="men" element={<MenShoes />} />
      <Route path="women" element={<WomenShoes />} />
      <Route path="kids" element={<KidShoes />} />
    </Routes>
  );
}

export default RoutesPath;
