import { createRoot } from "react-dom/client";
import Pet from "./pet";
import SearchParams from "./SearchParams";

const App = () => {
  return(
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams/>
  </div>
  )
};
const Root = createRoot(document.getElementById("root"));
Root.render(<App/>);
