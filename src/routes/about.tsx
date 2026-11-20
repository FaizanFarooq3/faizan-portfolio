import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { FramePlayer } from "@/components/frame-player";
import { Achievements } from "@/components/achievements";

const title = "About — Md Faizan Farooq";
const description =
  "About Md Faizan Farooq, a Data Scientist and ML Engineer building production ML pipelines, customer risk & churn models, and scalable ETL architectures.";

const EMAIL = "faizanfarooq.mail@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/faizanfarooq/";
const RESUME_URL = "/resume.pdf";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <Link
        to="/"
        className="fixed top-4 left-6 z-50 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground no-underline transition-opacity hover:opacity-60 md:top-5"
      >
        <ArrowLeft size={14} strokeWidth={1.5} />
        back
      </Link>

      <main className="mx-auto max-w-4xl px-6 pt-36 pb-24">
        <Reveal>
          <h1 className="font-serif text-5xl font-bold text-foreground sm:text-6xl">A bit more</h1>

          <div className="mt-14 flex justify-center md:justify-start">
            <FramePlayer state="conversation" size={400} alt="Illustration closing a laptop" />
          </div>

          <div className="mt-14 max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              I studied Electronics and Communication Engineering in Hyderabad (graduating in 2024),
              which mostly taught me that I'd much rather debug a broken data pipeline than a
              circuit board. Somewhere between raw spreadsheets and SQL queries, I realized I liked
              the unglamorous side of data—taking chaotic, real-world records and turning them into
              systems that actually hold up in production.
            </p>
            <p>
              That path started with a Data Analyst internship at Enrun India and led me to CDK
              Global in January 2025. Day to day, I work on large-scale dealership CRM and DMS data
              migrations—validating 300,000+ records per rollout and leading data delivery across
              North America partner launches. Whenever I see a team repeating the same manual fix,
              my instinct is to automate it: replacing legacy workflows with Python and automated
              SQL skip-queries that now save roughly 40 hours every month.
            </p>
            <p>
              I'm much more interested in whether something actually works in the real world than
              how impressive it looks in a notebook. Getting a model to score well on a clean
              dataset is the easy part; the interesting problem is everything around it—making sure
              the data stays reliable, the predictions make sense to the people using them, and the
              whole thing doesn't break the moment it leaves your laptop.
            </p>
            <p>
              Away from the keyboard, I'm big on consistency. I serve as Club Secretary at my
              Toastmasters club, train at the gym most days of the week, read books on habits and
              philosophy, and spend my weekends building ML systems that always start as "a quick
              experiment."
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <button
              type="button"
              onClick={copyEmail}
              className="text-sm text-foreground transition-opacity hover:opacity-60"
            >
              {EMAIL}
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                {copied ? "copied" : "click to copy"}
              </span>
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-xs text-foreground no-underline transition-opacity hover:opacity-60"
            >
              LinkedIn →
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-xs text-foreground no-underline transition-opacity hover:opacity-60"
            >
              resume (PDF) →
            </a>
          </div>
        </Reveal>

        <Reveal as="section" id="achievements" className="scroll-mt-24 pt-24">
          <p className="eyebrow">achievements</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">Recognitions</h2>
          <Achievements />
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}