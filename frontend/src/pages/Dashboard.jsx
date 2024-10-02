import '../../assets/css/dashboard.css';

import { useState } from 'react';

import { NavAdmin } from '../admin/NavAdmin'
import { RegisterProduct } from '../../components/modal/RegisterProduct';

import { SearchProduct } from '../admin/SearchProduct';
import { Categories } from '../admin/categories';
import { Products } from '../admin/Products';


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
