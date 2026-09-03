import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Reveal, RevealWords } from "./Reveal";

const quotes = [
  {
    text: "They rebuilt a swamp of a back yard into the room we live in all summer. The stonework is unreal.",
    name: "Marisol V.",
    detail: "Ridgemont Ave.",
  },
  {
    text: "Six seasons of weekly service and I have never once had to call about a missed visit.",
    name: "Dev & Priya S.",
    detail: "Hollow Creek",
  },
  {
    text: "The lighting plan changed the whole house. Neighbours literally knocked to ask who did it.",
    name: "Tom B.",
    detail: "Aldergrove",
  },
];

export function Voices() {
  return (
    <section id="voices" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95]">
          <RevealWords text="What the street says." />
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.09}>
              <motion.blockquote
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <Quote className="size-8 text-accent" />
                <p className="mt-6 font-display text-xl font-semibold leading-snug sm:text-2xl">
                  {q.text}
                </p>
                <footer className="mt-8 border-t border-border pt-5">
                  <p className="font-semibold">{q.name}</p>
                  <p className="text-sm text-muted-foreground">{q.detail}</p>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
