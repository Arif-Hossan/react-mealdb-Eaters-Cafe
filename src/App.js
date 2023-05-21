import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Contact from './components/Contact/Contact';
import { CategoryLoader} from './loaders/categoryloader';
import Category from './components/Category/Category';
import CategoryFood from './components/CategoryFood/CategoryFood';


function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/food',
          loader:CategoryLoader,
          element:<Category></Category>
        },
        {
          path:'/category/:categoryName',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`);
          },
          element:<CategoryFood></CategoryFood>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
