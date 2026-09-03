import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDownRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-garden.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const copyFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="grain relative min-h-[100svh] overflow-hidden bg-forest-deep">
      <motion.img
        src={heroImg}
        alt="Manicured emerald lawn and sculpted hedges at golden hour"
        width={1920}
        height={1280}
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-veil" />

      <motion.div
        style={{ y: copyY, opacity: copyFade }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-bone/25 bg-bone/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-bone backdrop-blur-md"
        >
          <Sparkles className="size-3.5 text-accent" />
          Est. 2009 · Fully insured crews
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.9rem,9vw,7.5rem)] font-extrabold leading-[0.88] text-bone">
          {["Gardens", "that stay", "impossibly"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block bg-gradient-lime bg-clip-text pb-2 text-transparent"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.51, ease: [0.16, 1, 0.3, 1] }}
            >
              green.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-8 border-t border-bone/20 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-bone/75 sm:text-lg">
            Full-service design, build and maintenance for homes that deserve a landscape people
            slow down for. Weekly care, seasonal transformations, zero guesswork.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Book a walkthrough
              <ArrowDownRight className="size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            </Button>
            <div className="flex items-center gap-3 text-bone">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-bone/70">4.9 · 380+ neighbours</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.4em] text-bone/50 lg:block"
      >
        scroll
      </motion.div>
    </section>
  );
}
