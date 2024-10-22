import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Spacing } from "@/components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Countries />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
