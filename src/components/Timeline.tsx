"use client";

import { useState } from "react";
import { timeline } from "@/data/profile";

const [from, to] = timeline.range;
const span = to - from;
const pct = (year: number) => `${((year - from) / span) * 100}%`;
const years = Array.from({ length: Math.floor(to - from) + 1 }, (_, i) => from + i);

type Selected = { label: string; note: string };

const defaultSelected: Selected = {
  label: "Now",
  note: "Final stretch of Computer Science and Design at SUTD, graduating in 2027. Select any bar to see what happened when.",
};

export function Timeline() {
  const [selected, setSelected] = useState<Selected>(defaultSelected);

  const pick = (item: Selected) =>
    setSelected((cur) => (cur.label === item.label ? defaultSelected : item));

  return (
    <figure className="chart" style={{ margin: 0 }} aria-labelledby="chart-title">
      <div className="chart-head">
        <h2 id="chart-title">2020 to now</h2>
        <div className="legend" aria-hidden="true">
          <span><i style={{ background: "var(--ink)" }} />Work</span>
          <span><i style={{ background: "var(--teal)" }} />Study</span>
          <span><i style={{ background: "var(--lead)" }} />Leadership</span>
          <span><i className="dot" />Award</span>
        </div>
      </div>

      <p className="chart-hint">Swipe sideways to see the whole timeline.</p>
      <div className="chart-scroll">
      <div className="chart-grid" style={{ ["--years" as string]: span }}>
        {timeline.rows.map((row) => (
          <div key={row.name} style={{ display: "contents" }}>
            <div className="row-name">{row.name}</div>
            <div className="track">
              {row.bars.map((bar) => {
                const narrow = (bar.end - bar.start) / span < 0.1;
                return (
                  <button
                    key={bar.label}
                    type="button"
                    className={`bar ${bar.kind}${narrow ? " narrow" : ""}`}
                    style={{ left: pct(bar.start), width: `calc(${pct(bar.end)} - ${pct(bar.start)} - 3px)` }}
                    aria-pressed={selected.label === bar.label}
                    onClick={() => pick(bar)}
                  >
                    <span>{bar.label}</span>
                  </button>
                );
              })}
              <span className="now-line" style={{ left: pct(timeline.now) }} />
            </div>
          </div>
        ))}
        <div className="row-name">Awards</div>
        <div className="track short">
          {timeline.milestones.map((m) => (
            <button
              key={m.label}
              type="button"
              className="milestone"
              style={{ left: pct(m.at) }}
              aria-pressed={selected.label === m.label}
              onClick={() => pick(m)}
            >
              <span>{m.label}</span>
            </button>
          ))}
          <span className="now-line" style={{ left: pct(timeline.now) }} />
        </div>
        <div className="axis-spacer" />
        <div className="axis" aria-hidden="true">
          {years.map((y) => (
            <span key={y} style={{ left: pct(y) }}>
              {y === from ? y : `’${String(y).slice(2)}`}
            </span>
          ))}
        </div>
      </div>
      </div>

      <figcaption className="chart-detail" aria-live="polite">
        <strong>{selected.label}</strong>
        {selected.note}
      </figcaption>
    </figure>
  );
}
