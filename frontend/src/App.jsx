//-----------------------------Packages---------------------------
import { 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route

} from 'react-router-dom';


//---------------------------Components---------------------------
import Home                 from './pages/Home';
import SectionPosts         from './pages/SectionPosts';
import RootLayout           from './layouts/RootLayout';
import SectionLayout        from './layouts/SectionLayout';
import DentSection          from './pages/DentSection';
import FarmSection          from './pages/FarmSection';
import BeautySection        from './pages/BeautySection';



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path='/'
                element={<RootLayout />}
            >
                <Route 
                    index
                    element={<Home />}
                />

                
            </Route>


            <Route element={<SectionLayout />}>
                <Route
                    path='stomatologie'
                    element={<DentSection />}
                ></Route>

                <Route
                    path='beauty'
                    element={<BeautySection />}
                ></Route>

                <Route
                    path='farmacie'
                    element={<FarmSection />}
                ></Route>
            </Route>


            <Route
                path='stomatologie/posts'
                element={<SectionPosts />}
            ></Route>

            <Route
                path='beauty/posts'
                element={<SectionPosts />}
            ></Route>

            <Route
                path='farmacie/posts'
                element={<SectionPosts />}
            ></Route>
        </>
    )
)


export default function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}
