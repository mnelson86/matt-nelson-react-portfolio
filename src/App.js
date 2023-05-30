import './App.css';
import { Fragment, useState } from 'react';
import { TitleBar } from './title-bar/TitleBar';
import { Menu } from './menu/Menu';
import { Home } from './home/Home';
import { Footer } from './footer/Footer';
import { Contact } from './contact/Contact';

const App = () => {
  const [nav, setNav] = useState('Home')
  return (
    <Fragment>
      <div className='flex flex-col min-h-screen bg-slate-300 bg-image'>
        <TitleBar />
        <div className='grid flex-grow grid-cols-12 gap-5 m-5 mb-0'>
          <div className='col-span-3 text-center'>
            <Menu nav={nav} setNav={setNav} />
          </div>
          {nav === 'Home' && (
            <div className='col-span-9 text-center'>
              <Home />
            </div>
          )}
          {nav === 'Contact' && (
            <div className='col-span-9 text-center'>
              <Contact nav={nav} setNav={setNav} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
