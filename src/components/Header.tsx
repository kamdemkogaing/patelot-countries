import { cn } from "@/lib/utils";
import Link from "next/link";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Section from "./Section";

//npx shadcn@latest add button
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <div className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">patelot.de</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/kamdemkogaing"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.facebook.com/patrick.kamdem"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <FacebookIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrick-kamdem-b88b3630b"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </div>
  );
}
