import { useState } from "react";

type Achievement = {
  title: string;
  context: string;
  note: string;
  image?: string;
};

const achievements: Achievement[] = [
  {
    title: "AMP Award (H1 2026)",
    context: "@ CDK Global — Create Possibilities",
    note: "Recognized for zero-escalation client installs (Norm Reeves) and SQL Skip Query automation adopted across all DMS Data Techs.",
    image: "/amp-award.png",
  },
  {
    title: "Ignite Award (2x Winner)",
    context: "@ CDK Global — Sep '25 & Apr '26",
    note: "Recognized for topping the team scorecard, automating bad-email query generation, and active participation in the AI Community.",
    image: "/ignite-award.png",
  },
  {
    title: "Spark Award (3x Winner)",
    context: "@ CDK Global — Jul '25, Dec '25 & Jan '26",
    note: "Recognized for consistent top performance, cycle-time reductions, automations, and Data Science & Python initiatives.",
    image: "/spark-award.png",
  },
];

export function Achievements() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {achievements.map((item, i) => {
        const dimmed = hovered !== null && hovered !== i;
        const active = hovered === i;
        return (
          <div
            key={item.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              opacity: dimmed ? 0.35 : 1,
              transform: active ? "translateY(-4px)" : "translateY(0)",
              boxShadow: active ? "0 12px 40px oklch(0 0 0 / 8%)" : "none",
            }}
            className="flex min-h-[360px] w-full flex-col border border-border bg-card p-6 transition-all duration-300"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={`${item.title} certificate`}
                className="h-[160px] w-full border border-border object-contain"
                loading="lazy"
              />
            ) : (
              <div className="mx-auto h-[160px] w-full bg-muted" aria-hidden />
            )}

            <h3 className="mt-6 text-base font-medium text-foreground">{item.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{item.context}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
          </div>
        );
      })}
    </div>
  );
}