import React from "react";

const About = ({ data }) => {
  if (!data) return null;

  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#F97316",
              marginBottom: "16px",
            }}
          >
            About Me
          </h2>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#1a1a2e",
              margin: "0",
              lineHeight: "1.2",
            }}
          >
            My Story
          </h1>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.05) 100%)",
            borderRadius: "24px",
            padding: "48px",
            border: "1px solid rgba(249, 115, 22, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#444",
              marginBottom: "40px",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            {data.bio}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Location
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#1a1a2e", fontWeight: "600" }}>
                  {data.address.city}
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Email
                </p>
                <a 
                  href={`mailto:${data.email}`}
                  style={{ margin: 0, fontSize: "16px", color: "#1a1a2e", fontWeight: "600", textDecoration: "none" }}
                >
                  {data.email}
                </a>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Phone
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#1a1a2e", fontWeight: "600" }}>
                  {data.phone}
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Experience
                </p>
                <p style={{ margin: 0, fontSize: "16px", color: "#1a1a2e", fontWeight: "600" }}>
                  6+ Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
