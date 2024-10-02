import '../assets/styles/header.css';

import tkk from '/TKK.svg';

import { Logo } from '../components/Logo';
import { Ubication } from '../components/Ubication';
import { Nav } from './Nav';
import { Search } from '../components/Search';
import { Button } from '../components/button';

export const Header = () => {
  return (
    <header>
        <Logo urlImage={tkk}/>
        <Ubication/>
        <div className='container-nav-search'>
            <Nav/>
            <Search/>
        </div>
        <Button text='Entrar'/>
    </header>
  )
}
