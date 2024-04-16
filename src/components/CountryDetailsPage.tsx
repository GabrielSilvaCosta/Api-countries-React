import { Link, useParams } from "react-router-dom";
import { Country } from "../Types/CountriesTypes";

interface CountryDetailsPageProps {
  countries: Country[];
}

export default function CountryDetailsPage({
  countries,
}: CountryDetailsPageProps) {
  const { countryCode } = useParams();
  const country = countries.find((country) => country.cca2 === countryCode);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen text-gray-800 font-sans ">
      <div className="container mx-auto px-4 py-8 ">
        <button className="border border-blue-500 text-blue-500 mb-4 text-sm font-semibold focus:outline-none hover:underline dark:text-blue-400 dark:hover:underline dark:focus:underline inline-block px-4 py-2 rounded-md">
          <Link
            to="/"
            className="text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-400 focus:text-blue-400"
          >
            Back
          </Link>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12   items-center ">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full mb-4 md:mb-0 md:mr-4 rounded-md shadow-md dark:shadow-none dark:shadow-white"
          />

          <div className="space-y-16">
            <h1 className="text-3xl font-bold mb-4 dark:text-white dark:hover:text-white hover:text-gray-800 focus:text-gray-800">
              {country.name.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {country.name.official}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Border Countries:</span>{" "}
                {country.borders.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
