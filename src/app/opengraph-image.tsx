import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jakub Lichosik — Software Engineer · DevOps / SRE · Scrum & Delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#00d4ff",
            marginBottom: 24,
            fontFamily: "monospace",
          }}
        >
          lichosik.dev
        </div>

        {/* Name */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 72, fontWeight: 700, color: "#e8e8f0", lineHeight: 1 }}>
            Jakub
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "transparent",
              lineHeight: 1,
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Lichosik
          </span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 24, color: "#6b7280", marginBottom: 48, lineHeight: 1.4 }}>
          Software Engineer · DevOps / SRE · Scrum & Delivery
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["C++", "Python", "Kotlin", "AWS", "Kubernetes", "PSPO I"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#6b7280",
                fontSize: 13,
                fontFamily: "monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom right — location */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 14,
            color: "#4b5563",
            fontFamily: "monospace",
          }}
        >
          Katowice, PL · prev. Zurich + Zug, CH
        </div>
      </div>
    ),
    { ...size }
  );
}
