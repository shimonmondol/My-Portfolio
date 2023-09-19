import {createBrowserRouter,} from "react-router-dom";
import Main from './Main';
import Home from './../Home';
import About from './../About';
import Skill from './../Skill';
import Project from './../Project';
import Contact from './../Contact';

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>     
    },
    {
        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/about",
        element:<About></About>
    },
    {
      path:"/skill",
      element:<Skill></Skill>
    },
    {
      path:"/project",
      element:<Project></Project>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    }
  ]);