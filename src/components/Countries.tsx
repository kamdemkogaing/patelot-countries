/* a Server Component shouldn't contain browser-specific things like click handlers or hooks such as useState. If you need that, you should add "use client" at the top to tell Next.js to send the JavaScript needed for that component, making it a Client Component: */
"use client";
import { useState } from "react";
import CountriesCards from "./CountriesCards";
import useDataCountriesSelection from "./hooks/useDataCountriesSelection";
import IsLoading from "./IsLoading";
import Section from "./Section";
import { Button } from "./ui/button";

export default function Countries() {
  const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];

  // state
  const [rangeValue, setRangeValue] = useState<number>(30);
  const [selectedRadio, setSelectedRadio] = useState<string>(" ");

  const { data, isLoading, error } = useDataCountriesSelection(
    "https://restcountries.com/v3.1/all"
  );

  // comportement
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSelectedRadio = (e) => {
    setSelectedRadio(e.target.id);
  };

  const handleDelete = () => {
    setSelectedRadio(" ");
  };

  // render
  return (
    <div>
      <Section className="flex max-md:flex-col max-md:items-start max-md:gap-8 items-center justify-between mb-8 bg-accent/50 transition-colors p-4">
        <div className="max-md:w-full">
          <input
            className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
            type="range"
            min={1}
            max={250}
            value={rangeValue}
            onChange={handleChange}
          />
        </div>
        <div className="flex max-md:gap-8 max-md:flex-col gap-10">
          {continents.map((el, index) => {
            return (
              <div key={index} className="flex items-center space-x-2">
                <input
                  checked={el === selectedRadio}
                  type="checkbox"
                  name="continent"
                  id={el}
                  onChange={handleSelectedRadio}
                  className="w-4 h-4 text-muted-foreground bg-gray-100 rounded focus:bg-accent/50 dark:focus:bg-accent/50 cursor-pointer transition-colors"
                />
                <label
                  htmlFor={el}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {el}
                </label>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>{isLoading && <IsLoading />}</Section>

      <Section>
        {selectedRadio !== " " && (
          <Button onClick={handleDelete} className="my-8">
            SUCHE ZURÜCKSETZEN
          </Button>
        )}
      </Section>

      {data && !error && (
        <Section>
          {data
            .filter((country) => {
              return country.continents[0].includes(selectedRadio);
            })
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => {
              return <CountriesCards key={index} country={country} />;
            })}
        </Section>
      )}
    </div>
  );
}
