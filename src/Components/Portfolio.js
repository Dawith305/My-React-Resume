import React from "react";

const ProjectCard = ({ title, category, image, url }) => {
  const projectImage = "images/portfolio/" + image;
  const techMatch = title.match(/\(([^)]+)\)/);
  const tech = techMatch ? techMatch[1] : null;
  const cleanTitle = title.replace(/\s*\([^)]*\)/, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
        e.currentTarget.querySelector('.project-overlay').style.opacity = "1";
        const arrow = e.currentTarget.querySelector('.view-arrow');
        if (arrow) arrow.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
        e.currentTarget.querySelector('.project-overlay').style.opacity = "0";
        const arrow = e.currentTarget.querySelector('.view-arrow');
        if (arrow) arrow.style.transform = "translateX(0)";
      }}
    >
      <div
        style={{
          position: "relative",
          paddingTop: "60%",
          overflow: "hidden",
          background: "#f5f5f5",
        }}
      >
        <img
          src={projectImage}
          alt={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        />
        
        <div
          className="project-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.9) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </div>

        {tech && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              backdropFilter: "blur(4px)",
              letterSpacing: "0.5px",
            }}
          >
            {tech}
          </div>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: "18px",
            fontWeight: "700",
            color: "#1a1a2e",
            lineHeight: "1.3",
          }}
        >
          {cleanTitle}
        </h3>
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "14px",
            color: "#666",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#F97316",
            }}
          />
          {category}
        </p>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#F97316",
            transition: "gap 0.3s ease",
          }}
        >
          <span>View Project</span>
          <svg
            className="view-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "transform 0.3s ease" }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const Portfolio = ({ data }) => {
  if (!data) return null;

  return (
    <section
      id="portfolio"
      style={{
        padding: "80px 0",
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
            Portfolio
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
            Featured Projects
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
            Check out some of my public works showcasing web and mobile development expertise
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {data.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
