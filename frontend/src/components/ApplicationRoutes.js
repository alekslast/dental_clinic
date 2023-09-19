import { Routes, Route }    from 'react-router-dom';

//------------------------------Pages-----------------------------

import Home                 from '../pages/Home';
import Stomatologie         from '../pages/Stomatologie';
import Beauty               from '../pages/Beauty';
import Farmacie             from '../pages/Farmacie';

//-----------------------------/Pages-----------------------------


const ApplicationRoutes = () => {
    return (
        <div className='pages'>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                >
                </Route>

                <Route
                    path='/stomatologie'
                    element={<Stomatologie />}
                >
                </Route>

                <Route
                    path='/beauty'
                    element={<Beauty />}
                >
                </Route>

                <Route
                    path='/farmacie'
                    element={<Farmacie />}
                >
                </Route>
            </Routes>
        </div>
    )
}

export default ApplicationRoutes;