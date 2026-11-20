import { Github, Linkedin, FileText } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./reveal";

const EMAIL = "faizanfarooq.mail@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/FaizanFarooq3", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/faizanfarooq/", Icon: Linkedin },
  { label: "Resume (PDF)", href: "/resume.pdf", Icon: FileText },
];

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Reveal as="footer" id="footer" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-[110px]">
        <h2 className="font-serif text-4xl text-foreground sm:text-6xl">Md Faizan Farooq</h2>

        <button
          type="button"
          onClick={copy}
          className="mt-6 block text-left text-base text-foreground transition-opacity hover:opacity-60"
        >
          {EMAIL}
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            {copied ? "copied" : "click to copy"}
          </span>
        </button>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-foreground no-underline transition-opacity hover:opacity-60"
            >
              <Icon size={16} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs text-muted-foreground">
          © 2026 — built between 11pm and 3am, like all good ML pipelines
        </p>
      </div>
    </Reveal>
  );
}