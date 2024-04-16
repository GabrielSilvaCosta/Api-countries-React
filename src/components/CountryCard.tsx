import { Country } from "../Types/CountriesTypes";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm md:max-w-md   ">
      <Link to={`/country/${country.cca2}`}>
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-48 object-cover object-center rounded-t-lg md:h-64 md:rounded-none md:rounded-l-lg "
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {country.name.common}
        </h2>

        <p className="mt-2">
          <span className="font-semibold">Population:</span>{" "}
          {country.population}
        </p>

        <p className="mt-2">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
