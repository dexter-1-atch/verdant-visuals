import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Leaf, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Voices", href: "#voices" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-700 [transition-timing-function:var(--ease-out-soft)] sm:px-8",
          solid ? "my-3 rounded-full bg-forest-deep/85 py-3 shadow-lift backdrop-blur-xl" : "py-6",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5 text-bone">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-lime text-lime-foreground transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:rotate-[140deg]">
            <Leaf className="size-4.5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Very<span className="text-accent">Green</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-bone/80 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+15550142"
            className="flex items-center gap-2 text-sm font-medium text-bone/80 transition-colors hover:text-accent"
          >
            <Phone className="size-4" /> (555) 014-2GRN
          </a>
          <Button variant="hero" size="pill" className="h-11 px-6 text-sm">
            Free estimate
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid size-11 place-items-center rounded-full border border-bone/25 text-bone md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-4 overflow-hidden rounded-3xl bg-forest-deep/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1 p-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-display text-2xl font-bold text-bone"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="pill" className="mt-3">
            Free estimate
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
