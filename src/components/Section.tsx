//npx shadcn@latest init
//In vielen Projekten wird eine Utility-Funktion namens cn oder classnames verwendet, um CSS-Klassen programmgesteuert zusammenzufügen.
import { cn } from "@/lib/utils";

import { PropsWithChildren } from "react";

export default function Section(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <section className={cn("max-w-5xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
}
