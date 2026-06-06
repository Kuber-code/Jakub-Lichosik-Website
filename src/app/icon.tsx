import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          border: "1px solid rgba(0,212,255,0.3)",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#00d4ff",
            fontFamily: "monospace",
            letterSpacing: "-0.5px",
          }}
        >
          JL
        </span>
      </div>
    ),
    { ...size }
  );
}
