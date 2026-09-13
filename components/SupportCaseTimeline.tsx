"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import type { PortfolioSupportStory } from "@/data/portfolio";

export function SupportCaseTimeline({ story }: { story: PortfolioSupportStory }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepCount = story.steps.length;
  const step = story.steps[activeStep];

  if (!step) return null;

  const showPrevious = activeStep > 0;
  const showNext = activeStep < stepCount - 1;

  return (
    <section id="customer-support-work" className="section section-grid-line support-proof-section" aria-labelledby="support-proof-title">
      <div className="container-shell">
        <div className="support-proof-heading">
          <div>
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 className="section-title" id="support-proof-title">{story.title}</h2>
          </div>
          <p>{story.intro}</p>
        </div>

        <div className="support-progress" aria-label="Customer support case steps">
          {story.steps.map((item, index) => (
            <button
              type="button"
              className={index === activeStep ? "is-active" : ""}
              onClick={() => setActiveStep(index)}
              aria-pressed={index === activeStep}
              aria-label={`Show ${item.phase}: ${item.title}`}
              key={item.phase}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.shortLabel}</small>
            </button>
          ))}
        </div>

        <article className="support-proof-card" aria-live="polite">
          <div className="support-proof-copy">
            <p className="case-kicker">{step.phase}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>

            <div className="support-proof-controls" aria-label="Support case navigation">
              <button
                type="button"
                onClick={() => setActiveStep((current) => Math.max(0, current - 1))}
                disabled={!showPrevious}
              >
                <ArrowLeft size={16} /> Previous
              </button>
              <span>{activeStep + 1} / {stepCount}</span>
              <button
                type="button"
                onClick={() => setActiveStep((current) => Math.min(stepCount - 1, current + 1))}
                disabled={!showNext}
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <figure className="support-evidence">
            <div className="support-evidence-media">
              <Image
                src={step.image}
                alt={step.imageAlt}
                width={step.width}
                height={step.height}
                sizes="(max-width: 900px) 100vw, 58vw"
                className={step.height > step.width ? "is-portrait" : ""}
              />
              {step.redactions ? step.redactions.map((redaction) => (
                <span
                  className={`evidence-redaction ${redaction}`}
                  aria-hidden="true"
                  key={redaction}
                />
              )) : null}
            </div>
            <figcaption>
              <LockKeyhole size={14} /> Support evidence · private email and network details are masked
            </figcaption>
          </figure>
        </article>

        <div className="support-outcome">
          <CheckCircle2 size={21} />
          <div>
            <small>Confirmed outcome</small>
            <strong>{story.outcome}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
