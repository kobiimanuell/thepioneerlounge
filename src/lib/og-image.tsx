import { ogLogoBase64 } from "./og-logo";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function ogImageElement(title: string, eyebrow?: string) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#faf8f3",
        backgroundImage:
          "radial-gradient(circle at 85% 20%, rgba(242,92,25,0.16) 0%, rgba(242,92,25,0) 55%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${ogLogoBase64}`}
          width={56}
          height={56}
          alt=""
        />
        <span
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#16140f",
            letterSpacing: -0.5,
          }}
        >
          The Pioneer Lounge
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {eyebrow && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#f25c19",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 4,
                color: "#625d53",
              }}
            >
              {eyebrow}
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            color: "#16140f",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 22,
          color: "#625d53",
          fontWeight: 500,
        }}
      >
        thepioneerlounge.vercel.app
      </div>
    </div>
  );
}
