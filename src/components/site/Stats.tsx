import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1240, suffix: "+", label: "Properties transformed" },
  { value: 17, suffix: " yrs", label: "Digging in this county" },
  { value: 98, suffix: "%", label: "Clients renew each spring" },
  { value: 42, suffix: "k", label: "Native plants in the ground" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-none">
      {n.toLocaleString()}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-forest py-20 text-bone sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-bone/20 pt-6">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-3 text-sm text-bone/65">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
