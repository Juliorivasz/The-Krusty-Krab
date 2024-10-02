import '../assets/styles/dashboard.css';

import { useState } from 'react';

import { RegisterProduct } from '../modal/RegisterProduct';

import { Categories } from '../admin/categories';
import { Products } from '../admin/Products';
import { Header } from '../layouts/Header';


export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
      

  return (
    <>
    <Header/>
    <div className='body'>
        <div className="container-dashboard">
            <main className="main-content">
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
