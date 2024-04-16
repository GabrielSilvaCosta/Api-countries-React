import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CountryDetailsPage from "./components/CountryDetailsPage";
import { Country } from "./Types/CountriesTypes";

interface AppProps {
  countries: Country[];
}

function App({ countries }: AppProps) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/country/:countryCode"
          element={<CountryDetailsPage countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
