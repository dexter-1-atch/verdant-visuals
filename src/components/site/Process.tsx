import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, RevealWords } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Walkthrough",
    copy: "We meet on site, measure sun, soil and drainage, and listen to how you actually use the space.",
  },
  {
    n: "02",
    title: "The plan",
    copy: "A drawn plan with plant list, materials and a fixed price. No surprises halfway through.",
  },
  {
    n: "03",
    title: "Build week",
    copy: "One dedicated crew, tidy site every evening, daily photo updates straight to your phone.",
  },
  {
    n: "04",
    title: "Kept green",
    copy: "We hand over a care calendar — or take it on ourselves and you never think about it again.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95]">
          <RevealWords text="Four steps. Then it just looks after itself." />
        </h2>

        <div ref={ref} className="relative mt-16 pl-12 sm:pl-20">
          <div className="absolute left-4 top-2 h-full w-px bg-border sm:left-7" />
          <motion.div
            style={{ height }}
            className="absolute left-4 top-2 w-px bg-gradient-lime sm:left-7"
          />

          <div className="flex flex-col gap-14">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -left-12 top-1 grid size-8 place-items-center rounded-full bg-forest text-[0.65rem] font-bold text-primary-foreground sm:-left-[4.35rem] sm:size-10 sm:text-xs">
                    {s.n}
                  </span>
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
