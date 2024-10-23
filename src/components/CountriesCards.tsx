/* eslint-disable @next/next/no-img-element */
import { Card } from "./ui/card";

export default function CountriesCards({ country }) {
  return (
    <Card className="grid md:grid-cols-4 gap-10 max-md:items-start max-md:gap-4 hover:bg-accent/50 transition-colors rounded p-8 my-8">
      <div className="">
        <img
          src={country.flags.svg}
          alt={country.translations.deu.common}
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <p className="text-lg font-semibold">Land:</p>
        <p className="text-sm text-muted-foreground break-all">
          {country.translations.deu.common}
        </p>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Haupstadt:</p>
        <p className="text-sm text-muted-foreground">{country.capital}</p>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Bewölkerung:</p>
        <p className="text-sm text-muted-foreground">
          {country.population.toLocaleString()}
        </p>
      </div>
    </Card>
  );
}
