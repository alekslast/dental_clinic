//-----------------------------Packages---------------------------
import { 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route

} from 'react-router-dom';


//---------------------------Components---------------------------
import Home                 from './pages/Home';
import Farmacie             from './pages/Farmacie';
import RootLayout           from './layouts/RootLayout';



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<RootLayout />}
        >
            <Route 
                index
                element={<Home />}
            />

            <Route
                path='stomatologie'
                element={<Farmacie />}
            ></Route>

            <Route
                path='beauty'
                element={<Farmacie />}
            ></Route>

            <Route
                path='farmacie'
                element={<Farmacie />}
            ></Route>
        </Route>
    )
)


export default function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}
