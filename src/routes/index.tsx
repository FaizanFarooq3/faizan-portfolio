import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsList } from "@/components/projects-list";
// import { Certifications } from "@/components/certifications";
import { FramePlayer } from "@/components/frame-player";
import { skills } from "@/data/portfolio";
import { WorkHistory } from "@/components/work-history";

const title = "Md Faizan Farooq — Data Scientist & ML Engineer";
const description =
  "Data Scientist and ML Engineer building production ML pipelines, customer risk & churn models, and scalable ETL architectures with Python, SQL, XGBoost, PyTorch, FastAPI, and Docker.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="flex min-h-screen items-center pt-28 pb-16">
          <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-[55%_45%]">
            <div>
              <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                Hi, I'm Faizan Farooq.
              </h1>
              <p className="mt-4 font-serif text-5xl leading-[1.05] font-bold text-foreground sm:text-6xl">
                I build production ML systems and scalable data pipelines.
              </p>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
                I'm a Data Scientist &amp; ML Engineer focused on turning raw, messy data into
                reliable predictive systems. From automated ETL architectures and feature
                engineering to tuning models with XGBoost and PyTorch and serving them via
                FastAPI and Docker, I build end-to-end pipelines designed for production.
              </p>
            </div>
            <div className="flex justify-center md:translate-x-[-48px] md:justify-end">
              <FramePlayer state="wave" size={400} alt="Illustration waving hello" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE + SKILLS */}
        <Reveal as="section" id="experience" className="scroll-mt-24 py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="eyebrow">work history</h2>
              <WorkHistory />
            </div>

            <div>
              <h2 className="eyebrow">skills</h2>
              <div className="mt-10 flex justify-center md:justify-start">
                <FramePlayer
                  state="typing"
                  size={300}
                  trigger="visible"
                  alt="Illustration typing at a keyboard"
                />
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="glass-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROJECTS */}
        <Reveal as="section" className="py-24">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <p className="eyebrow">gallery</p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Things I've built
              </h2>
            </div>
            <FramePlayer
              state="404"
              size={300}
              className="self-center md:translate-x-[-48px] md:self-auto"
              alt="Illustration holding a laptop"
            />
          </div>
          <ProjectsList />
        </Reveal>

        {/* CERTIFICATIONS — Uncomment when ready to add awards/certs
        <Reveal as="section" id="certifications" className="scroll-mt-24 py-24">
          <p className="eyebrow">certifications</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">Credentials</h2>
          <Certifications />
        </Reveal>
        */}
      </main>

      <SiteFooter />
    </div>
  );
}