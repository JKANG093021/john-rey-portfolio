import { ImageResponse } from "next/og";

export const alt = "John Rey Baliguat - Technical, Admin, Customer, and Web Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at 82% 20%, #133c72 0%, #07111f 36%, #030810 76%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#7fb1ff", fontSize: 22, letterSpacing: 4 }}>
          TECHNICAL SUPPORT • ADMIN OPERATIONS • CUSTOMER SUPPORT • WEB SYSTEMS
        </div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 800, marginTop: 28 }}>
          John Rey Baliguat<span style={{ color: "#2f80ff" }}>.</span>
        </div>
        <div style={{ display: "flex", maxWidth: 930, fontSize: 42, lineHeight: 1.16, marginTop: 14 }}>
          Reliable support for the people, processes, websites, and systems behind the work.
        </div>
        <div style={{ display: "flex", gap: 18, marginTop: 54, fontSize: 22, color: "#a9b9cd" }}>
          <span>Philippines</span><span>•</span><span>Remote</span><span>•</span><span>Full-time</span><span>•</span><span>Part-time</span><span>•</span><span>Project-based</span>
        </div>
      </div>
    ),
    size,
  );
}
