import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Voices } from "@/components/site/Voices";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Footer } from "@/components/site/Footer";

const title = "VeryGreen Landscaping — Design, Build & Lawn Care";
const description =
  "VeryGreen Landscaping designs, builds and maintains standout gardens: lawn care, patios, irrigation and night lighting. Free on-site estimates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Voices />
        <QuoteCta />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
