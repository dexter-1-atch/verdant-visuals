const items = [
  "Lawn care",
  "Hardscaping",
  "Garden design",
  "Irrigation",
  "Tree & hedge",
  "Night lighting",
  "Snow & salt",
  "Seasonal colour",
];

export function Marquee() {
  return (
    <div className="border-y border-forest-deep/15 bg-accent py-5">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {items.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="flex items-center gap-8 px-8 font-display text-xl font-bold uppercase tracking-tight text-accent-foreground sm:text-2xl"
                >
                  {item}
                  <span className="text-accent-foreground/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
