import { SiteHeader } from "@/components/AppNavbar";
import { Hero } from "./home/page";



export default function Home() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      <Hero />
    </main>
  );
}
