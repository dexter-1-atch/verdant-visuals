import { Leaf, Instagram, Facebook, Mail } from "lucide-react";

const columns = [
  { title: "Services", items: ["Lawn care", "Garden design", "Patios", "Irrigation", "Lighting"] },
  { title: "Company", items: ["Our story", "Crews", "Careers", "Reviews"] },
  { title: "Areas", items: ["Ridgemont", "Aldergrove", "Hollow Creek", "Fernbrook"] },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep pt-20 text-bone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-gradient-lime text-lime-foreground">
                <Leaf className="size-4.5" />
              </span>
              <span className="font-display text-lg font-extrabold">
                Very<span className="text-accent">Green</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/60">
              Landscape design, build and care. Mon–Sat, 7am–6pm. 118 Wren Row, Ridgemont.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#quote"
                  aria-label="VeryGreen social link"
                  className="grid size-11 place-items-center rounded-full border border-bone/20 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#quote"
                      className="link-underline text-sm text-bone/70 transition-colors hover:text-bone"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <p className="text-outline -mb-3 select-none font-display text-[clamp(3rem,15vw,13rem)] font-extrabold leading-[0.8] text-bone/25">
            VERYGREEN
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-bone/15 py-7 text-xs text-bone/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} VeryGreen Landscaping Co.</p>
          <p>Licensed · Insured · WSIB covered</p>
        </div>
      </div>
    </footer>
  );
}
