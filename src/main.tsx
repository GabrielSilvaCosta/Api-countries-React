import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Country } from "./Types/CountriesTypes";

function Main() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Erro ao recuperar dados:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <App countries={countries} />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
