import { createRoot } from "react-dom/client";
import {Link , BrowserRouter, Routes , Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./details";

const App = () => {
  return(
    <BrowserRouter>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchParams />} />
    </Routes>
    </BrowserRouter>
  )
};
const Root = createRoot(document.getElementById("root"));
Root.render(<App/>);
