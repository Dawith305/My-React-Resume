import React, { useState, useEffect } from "react";

const titles = [
  "Senior Software Engineer",
  "Vue.js Developer",
  "React Developer",
  "Full-Stack Engineer",
  "TypeScript Enthusiast",
];

const Header = ({ data }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "resume", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return null;

  const profilepic = "images/" + data.image;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Experience" },
    { id: "portfolio", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          {navItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? "current" : ""}>
              <a className="smoothscroll" href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 40px 80px",
          backgroundImage: "url('images/mountain-1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(15, 15, 35, 0.85) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(22, 33, 62, 0.85) 100%)",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "20%",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                padding: "6px",
                boxShadow: "0 0 60px rgba(249, 115, 22, 0.4), 0 0 120px rgba(234, 88, 12, 0.2)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20%",
                  overflow: "hidden",
                  background: "#1a1a2e",
                }}
              >
                <img
                  src={profilepic}
                  alt={data.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#F97316",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                boxShadow: "0 4px 20px rgba(249, 115, 22, 0.5)",
              }}
            >
              Open to Opportunities
            </div>
          </div>

          <div style={{ flex: "1 1 400px", textAlign: "left" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#F97316",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Hello, I'm
            </p>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: "800",
                color: "#fff",
                margin: "0 0 16px 0",
                lineHeight: "1.1",
              }}
            >
              {data.name}
            </h1>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)",
                margin: "0 0 24px 0",
                lineHeight: "1.4",
              }}
            >
              <span style={{ color: "#F97316" }}>
                {displayText}
                <span
                  style={{
                    borderRight: "3px solid #F97316",
                    marginLeft: "4px",
                    animation: "blink 1s infinite",
                  }}
                />
              </span>
              <br />
              <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "clamp(16px, 2vw, 20px)" }}>
                based in {data.address.city}
              </span>
            </h2>
            <style>
              {`
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
              `}
            </style>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.8",
                marginBottom: "32px",
                maxWidth: "550px",
              }}
            >
              {data.bio}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a
                href={data.resumedownload}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(249, 115, 22, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(249, 115, 22, 0.4)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="smoothscroll"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "transparent",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#F97316";
                  e.currentTarget.style.background = "rgba(249, 115, 22, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Let's Talk
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              {data.social?.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "18px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F97316";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <i className={social.className}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
