import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#1D1723",
          color: "#FAF7FB",
        }}
      >
        <div style={{ fontSize: 20, color: "#FFC79A", marginBottom: 20 }}>
          soumya.dev
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Soumya Bhate
        </div>
        <div style={{ fontSize: 36, color: "#FFA0BE", marginTop: 12 }}>
          Data Scientist &amp; ML Engineer
        </div>
        <div style={{ fontSize: 24, color: "#E0D3E6", marginTop: 24 }}>
          Pipelines · Statistics · LLM-powered applications
        </div>
      </div>
    ),
    { ...size }
  );
}