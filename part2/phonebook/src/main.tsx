import "./index.css";
import { people } from "./dummyData.ts";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App people={people} />
);
