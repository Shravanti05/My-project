import { createRoot } from "react-dom/client";
import {Link , BrowserRouter, Routes , Route } from "react-router-dom";
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
import SearchParams from "./SearchParams";
import Details from "./details";

const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : Infinity,
      cacheTime : Infinity,
    },
  },
});

const App = () => {
  return(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchParams />} />
    </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  )
};
const Root = createRoot(document.getElementById("root"));
Root.render(<App/>);
