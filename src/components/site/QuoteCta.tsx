import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type FormEvent, type MouseEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, RevealWords } from "./Reveal";

const perks = ["Fixed-price quotes", "Licensed & insured", "No lock-in contracts"];

function MagneticSubmit() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="w-fit"
    >
      <Button type="submit" variant="hero" size="xl" className="group">
        Get my estimate
        <ArrowRight className="size-5 transition-transform duration-500 group-hover:translate-x-1.5" />
      </Button>
    </motion.div>
  );
}

export function QuoteCta() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Request received", {
      description: "A VeryGreen designer will call you within one business day.",
    });
  };

  return (
    <section id="quote" className="grain relative overflow-hidden bg-gradient-forest py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[30rem] animate-float rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="max-w-xl font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.9] text-bone">
            <RevealWords text="Let's get your yard on the schedule." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md leading-relaxed text-bone/70">
              Tell us where you are and what's bugging you about the space. We'll bring measurements,
              plant ideas and a real number.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-bone/80">
                  <Check className="size-4 text-accent" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-bone/15 bg-bone/8 p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                required
                placeholder="Name"
                aria-label="Name"
                className="h-13 rounded-2xl border-bone/20 bg-bone/10 text-bone placeholder:text-bone/45 focus-visible:ring-accent"
              />
              <Input
                required
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                className="h-13 rounded-2xl border-bone/20 bg-bone/10 text-bone placeholder:text-bone/45 focus-visible:ring-accent"
              />
              <Input
                required
                placeholder="Street address"
                aria-label="Street address"
                className="h-13 rounded-2xl border-bone/20 bg-bone/10 text-bone placeholder:text-bone/45 focus-visible:ring-accent sm:col-span-2"
              />
              <textarea
                rows={4}
                placeholder="What are we working with?"
                aria-label="Project details"
                className="rounded-2xl border border-bone/20 bg-bone/10 px-4 py-3 text-sm text-bone outline-none placeholder:text-bone/45 focus-visible:ring-2 focus-visible:ring-accent sm:col-span-2"
              />
            </div>
            <div className="mt-7">
              <MagneticSubmit />
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
