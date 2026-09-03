import { motion } from "motion/react";
import { Scissors, Trees, Droplets, Lightbulb, Hammer, Flower2 } from "lucide-react";
import { Reveal, RevealWords } from "./Reveal";

const services = [
  {
    icon: Scissors,
    title: "Weekly Lawn Care",
    copy: "Precision mowing with alternating stripes, edging, blowdown and clipping haul-away.",
    price: "from $65 / visit",
  },
  {
    icon: Flower2,
    title: "Garden Design",
    copy: "Planting plans built around bloom sequence, texture and how your light actually moves.",
    price: "from $1,800",
  },
  {
    icon: Hammer,
    title: "Patios & Stonework",
    copy: "Natural stone, permeable pavers, seat walls and fire features laid on proper base.",
    price: "from $9,400",
  },
  {
    icon: Trees,
    title: "Tree & Hedge",
    copy: "Structural pruning, canopy thinning and topiary shaping by certified arborists.",
    price: "from $240",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    copy: "Zoned drip and rotor systems on weather-aware controllers. Water less, grow more.",
    price: "from $2,600",
  },
  {
    icon: Lightbulb,
    title: "Night Lighting",
    copy: "Low-voltage uplighting, path runs and warm 2700K washes that flatter every façade.",
    price: "from $3,100",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95]">
            <RevealWords text="Everything outside your front door." />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-muted-foreground">
              Six crews, one standard. Pick a single service or hand us the whole property on a
              year-round plan.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-forest transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:translate-y-0" />
                <div className="relative z-10">
                  <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-forest transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold transition-colors duration-500 group-hover:text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-bone/75">
                    {s.copy}
                  </p>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-forest transition-colors duration-500 group-hover:text-accent">
                    {s.price}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
