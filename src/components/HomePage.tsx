import React, { useState, useEffect } from "react";

import CountryCard from "./CountryCard";
import { Country } from "../Types/CountriesTypes";

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(event.target.value);
  };

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (country) =>
        regionFilter === "" ||
        country.region.toLowerCase() === regionFilter.toLowerCase()
    );

  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="flex items-center justify-between mb-4 ">
        <input
          type="text"
          placeholder="Search countries..."
          className="p-2 border border-gray-500 rounded-md mr-4 w-1/2 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          value={regionFilter}
          onChange={handleRegionFilter}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
