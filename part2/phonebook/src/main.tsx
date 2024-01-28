import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const people = [{ name: "Arto Hellas", phone: "040-123456" }];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App people={people} />
);
