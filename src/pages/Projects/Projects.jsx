import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { projects } from '../../data/resumeData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ShapeGrid from '../../components/reactbits/ShapeGrid';
import './Projects.css';

export default function Projects() {
  useScrollReveal();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page-transition">
      {/* ShapeGrid Background */}
      <div className="projects-bg">
        <ShapeGrid
          speed={0.25}
          squareSize={40}
          direction='diagonal'
          borderColor={theme === 'light' ? '#e6e6ec' : '#1C1824'}
          hoverFillColor={theme === 'light' ? '#f4f4f8' : '#16161C'}
          shape='square'
          hoverTrailAmount={0}
        />
      </div>

      <section className="section" id="projects-page">
        <div className="container">
          <div className="projects-header reveal">
            <span className="section-label">My Work</span>
            <h2 className="section-title">Projects I&apos;ve Built</h2>
            <p className="section-subtitle">
              A collection of full-stack applications showcasing my skills in web
              development, AI integration, and system design.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card card reveal" key={index}>
                <div className="project-card-header">
                  <div className="project-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link cursor-target"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">{project.date}</span>

                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span className="tag cursor-target" key={i}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
