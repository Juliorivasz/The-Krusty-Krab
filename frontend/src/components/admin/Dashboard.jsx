import '../../assets/css/dashboard.css';

import { useState } from 'react';

import { NavAdmin } from './NavAdmin'
import { RegisterProduct } from '../modal/RegisterProduct';

import { SearchProduct } from './SearchProduct';
import { Categories } from './categories';
import { Products } from './Products';


export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
      

  return (
    <>
    <div className='body'>
        <NavAdmin/>
        <div className="container-dashboard">
            <main className="main-content">
                <SearchProduct/>
                <h1>Categoría</h1>
                <Categories/>
                <Products openModal={openModal}/>
            </main>
        </div>
        {/* es un modal */}
        <RegisterProduct 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    </div>
    </>
  )
}
