import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealWords } from "./Reveal";
import patio from "@/assets/work-patio.jpg";
import lawn from "@/assets/work-lawn.jpg";
import lighting from "@/assets/work-lighting.jpg";
import pruning from "@/assets/work-pruning.jpg";

const projects = [
  { img: patio, title: "Ridgemont Fire Terrace", tag: "Hardscape · 2025", span: "sm:col-span-7", h: "h-[26rem]" },
  { img: lighting, title: "Aldergrove Night Walk", tag: "Lighting · 2025", span: "sm:col-span-5", h: "h-[26rem]" },
  { img: lawn, title: "The Curved Lawn House", tag: "Design + Build · 2024", span: "sm:col-span-5", h: "h-[30rem]" },
  { img: pruning, title: "Boxwood Formal Garden", tag: "Maintenance · ongoing", span: "sm:col-span-7", h: "h-[30rem]" },
];

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Reveal delay={i * 0.08} className={p.span}>
      <motion.div
        ref={ref}
        whileHover={{ scale: 0.985 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative w-full overflow-hidden rounded-[2rem] bg-forest-deep ${p.h}`}
      >
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 size-full scale-115 object-cover transition-all duration-1000 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-125 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-veil opacity-90" />
        <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            {p.tag}
          </p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="max-w-[16ch] font-display text-2xl font-bold leading-tight text-bone sm:text-3xl">
              {p.title}
            </h3>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-bone/30 text-bone transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-forest-deep py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 size-[34rem] rounded-full bg-accent/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Selected work
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[0.92] text-bone">
          <RevealWords text="Yards we still drive past on purpose." />
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-12">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
