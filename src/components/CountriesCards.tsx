import { Card } from "./ui/card";

export default function CountriesCards() {
  return (
    <Card className="flex p-4 max-md:flex-col max-md:gap-4 flex-row justify-between max-md:items-start items-center hover:bg-accent/50 transition-colors rounded">
      <div className="">
        {/* <Image src="" alt="pflage" /> */}
        Pflage
      </div>
      <div className="">
        <p className="text-lg font-semibold">Land:</p>
        <p className="text-sm text-muted-foreground">Kamerun</p>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Haupstadt:</p>
        <p className="text-sm text-muted-foreground">Douala</p>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Bewölkerung:</p>
        <p className="text-sm text-muted-foreground">20 Millionen</p>
      </div>
    </Card>
  );
}
