//-----------------------------Packages---------------------------

import { BrowserRouter }    from 'react-router-dom';

//----------------------------/Packages---------------------------


//---------------------------Components---------------------------

import ApplicationRoutes    from './components/ApplicationRoutes';
import Footer               from './components/Footer';

//--------------------------/Components---------------------------


export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            
            <ApplicationRoutes />
            <Footer />
            
        </BrowserRouter>
    </div>
  );
}
