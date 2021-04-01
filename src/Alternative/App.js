import React from "react";
import Wrapper from "./Components/Wrapper";
import Navbar from "./Components/Navbar";
import { useRoutes } from "hookrouter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const routes = {
  '/': () => <Home />,
  '/about*': () => <About />, //the * means 'more to follow' 
  '/contact/:name': ({ name }) => <Contact name={name}/>
}

const App = () => {
  const match = useRoutes(routes)
  return (
    <Wrapper>
      <Navbar />
      { match || <NotFound /> }
    </Wrapper>
  )
};

export default App;