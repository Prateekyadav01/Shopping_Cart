import Navbar from './components/Navbar'



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* ... etc. */}
    </Route>
  )
);


const App = () => {
  return <>
    
    <RouterProvider router={router} />
  </>;
};

export default App;
