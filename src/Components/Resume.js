import React, { useState } from "react";

const WorkCard = ({ title, company, location, years, description, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: isOpen ? "2px solid #F97316" : "1px solid #e8e8e8",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "24px 32px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          background: isOpen ? "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.05) 100%)" : "transparent",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ margin: "0 0 4px 0", fontSize: "20px", fontWeight: "700", color: "#1a1a2e" }}>
              {title}
            </h3>
            <p style={{ margin: 0, fontSize: "15px", color: "#F97316", fontWeight: "600" }}>
              {company}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                whiteSpace: "nowrap",
              }}
            >
              {years}
            </span>
            <span style={{ fontSize: "13px", color: "#888", display: "flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </span>
          </div>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? "#F97316" : "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#fff" : "#666"}
            strokeWidth="2"
            style={{
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <ul style={{ margin: 0, padding: "0 32px 24px 32px", listStyle: "none" }}>
          {description.map((item, index) => (
            <li
              key={index}
              style={{
                position: "relative",
                paddingLeft: "20px",
                marginBottom: "10px",
                fontSize: "14px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "8px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#F97316",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SkillCard = ({ name, icon }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        border: "1px solid #e0e0e0",
        transition: "all 0.3s ease",
        cursor: "default",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{
          width: "64px",
          height: "64px",
          objectFit: "contain",
        }}
      />
      <span
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#333333",
          textTransform: "uppercase",
          letterSpacing: "1px",
          textAlign: "center",
          borderTop: "1px solid #eeeeee",
          paddingTop: "12px",
          width: "100%",
        }}
      >
        {name}
      </span>
    </div>
  );
};

const Resume = ({ data }) => {
  const skillmessage = data?.skillmessage;

  return (
    <section id="resume">
      <div
        style={{
          padding: "60px 0",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              Experience
            </h2>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#1a1a2e",
                margin: "0 0 20px 0",
                lineHeight: "1.2",
              }}
            >
              Work History
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              My professional journey across startups and enterprise teams
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {data?.work?.map((job, index) => (
              <div
                key={job.company}
                style={{
                  display: "flex",
                  gap: "24px",
                  paddingBottom: index === data.work.length - 1 ? "0" : "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: index === 0 
                        ? "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" 
                        : "#fff",
                      border: index === 0 ? "none" : "3px solid #F97316",
                      boxShadow: index === 0 ? "0 0 0 4px rgba(249, 115, 22, 0.2)" : "none",
                      flexShrink: 0,
                      marginTop: "28px",
                    }}
                  />
                  {index !== data.work.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        background: "linear-gradient(180deg, #F97316 0%, #e0e0e0 100%)",
                        marginTop: "8px",
                      }}
                    />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <WorkCard
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    years={job.years}
                    description={job.description}
                    defaultOpen={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "60px 0",
          background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              Skills
            </h2>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#1a1a2e",
                margin: "0 0 20px 0",
                lineHeight: "1.2",
              }}
            >
              Technical Expertise
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              {skillmessage}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "20px",
              maxWidth: "100%",
            }}
          >
            {data?.skills?.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "60px 0",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
              Education
            </h2>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#1a1a2e",
                margin: "0",
                lineHeight: "1.2",
              }}
            >
              Academic Background
            </h1>
          </div>

          {data?.education?.map((edu) => (
            <div
              key={edu.school}
              style={{
                background: "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.05) 100%)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid rgba(249, 115, 22, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "20px", fontWeight: "700", color: "#1a1a2e" }}>
                  {edu.degree}
                </h3>
                <p style={{ margin: "0 0 4px 0", fontSize: "16px", color: "#F97316", fontWeight: "600" }}>
                  {edu.school}
                </p>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                  {edu.description} • {edu.graduated}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
