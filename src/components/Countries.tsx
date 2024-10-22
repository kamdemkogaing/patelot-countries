import CountriesCards from "./CountriesCards";
import Section from "./Section";
import { Checkbox } from "./ui/checkbox";

export default function Countries() {
  // state
  const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];

  // comportement

  // render
  return (
    <div>
      <Section className="flex max-md:flex-col max-md:items-start max-md:gap-8 items-center justify-between mb-8 bg-accent/50 transition-colors p-4">
        <div className="max-md:w-full">
          <input
            className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
            type="range"
            name=""
            id=""
          />
        </div>
        <div className="flex max-md:gap-8 max-md:flex-col gap-10">
          {continents.map((el, index) => {
            return (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id="terms" />
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
      {continents.map((el, index) => (
        <Section key={index} className="mb-4">
          <CountriesCards />
        </Section>
      ))}
    </div>
  );
}
