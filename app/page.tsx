"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "Flask / Django", icon: Server },
  { name: "Node.js / Express", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "REST APIs", icon: Server },
  { name: "Git / GitHub", icon: Code2 },
];

const projects = [
  {
    title: "AI-Based CCTV Accident Detection System",
    type: "AI • Computer Vision • Full Stack",
    description:
      "An AI-based application for detecting vehicle accidents and fire incidents from CCTV/video streams, with vehicle tracking, monitoring dashboard and alert storage.",
    tech: ["Python", "YOLOv8", "OpenCV", "DeepSORT", "Flask", "MySQL"],
    featured: true,
  },
  {
    title: "Real Estate Web Application",
    type: "Freelance • Full Stack",
    description:
      "Responsive real estate application with property listings, search/filtering, authentication, CRUD operations, image management and customer inquiries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Auth.js", "Cloudinary", "Vercel"],
    featured: true,
  },
  {
    title: "Inventory Management System",
    type: "Java • Database",
    description:
      "Inventory management application for product and stock information with CRUD operations, SQL queries and object-oriented application structure.",
    tech: ["Java", "MySQL", "SQL", "OOP"],
    featured: false,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight" onClick={closeMenu}>
            Alex<span className="text-cyan-400">.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:alexpandian0307@gmail.com"
            className="hidden rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10 md:block"
          >
            Let&apos;s talk
          </a>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="container-page flex flex-col gap-4 border-t border-white/10 py-5 md:hidden">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-slate-200"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="grid-bg relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(129,140,248,.10),transparent_30%)]" />
        <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={15} /> Available for software developer opportunities
            </div>

            <p className="mb-3 text-lg text-slate-400">Hello, I&apos;m</p>
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Alexpandian <span className="gradient-text">A</span>
            </h1>
            <h2 className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
              Entry-level Software Developer
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build practical, database-driven web applications and AI-powered
              solutions using Java, Python, React.js, SQL and modern full-stack tools.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View my work <ArrowUpRight size={18} />
              </a>
              <a
                href="/Alexpandian-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" /> Coimbatore, Tamil Nadu
              </span>
              <a
                href="mailto:alexpandian0307@gmail.com"
                className="inline-flex items-center gap-2 hover:text-cyan-300"
              >
                <Mail size={16} className="text-cyan-400" /> alexpandian0307@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass mx-auto w-full max-w-sm rounded-3xl p-7 shadow-glow"
          >
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 via-indigo-500/10 to-purple-500/15">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-4xl font-black text-cyan-300">
                  AA
                </div>
                <p className="text-lg font-bold">Software Developer</p>
                <p className="mt-2 text-sm text-slate-400">Java • Python • React • SQL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="ABOUT ME" title="Building solutions with code." />
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
            <div className="space-y-5 text-slate-400 leading-8">
              <p>
                I&apos;m an entry-level Software Developer with hands-on experience
                gained through freelance development projects. I enjoy turning
                requirements into clean, responsive and functional applications.
              </p>
              <p>
                My technical foundation covers object-oriented programming, DBMS,
                REST APIs, CRUD operations, problem solving and modern web
                development.
              </p>
              <p>
                I&apos;m looking for an opportunity where I can contribute to a
                development team, learn from experienced engineers and grow into a
                strong software professional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<BriefcaseBusiness />} title="Experience" value="6 Months Freelance" />
              <InfoCard icon={<Code2 />} title="Primary Stack" value="Java + Python + React" />
              <InfoCard icon={<Database />} title="Database" value="MySQL + MongoDB" />
              <InfoCard icon={<CheckCircle2 />} title="Education" value="B.E. CSE • 2025" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section border-y border-white/5 bg-white/[0.015]">
        <div className="container-page">
          <SectionHeading eyebrow="TECHNICAL SKILLS" title="Tools I work with." />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map(({ name, icon: Icon }) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={name}
                className="glass rounded-2xl p-5 transition hover:border-cyan-400/30"
              >
                <Icon className="mb-4 text-cyan-400" size={22} />
                <p className="font-semibold text-slate-100">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="PROJECTS" title="Selected work." />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`glass flex flex-col rounded-3xl p-6 ${
                  project.featured ? "lg:scale-[1.02]" : ""
                }`}
              >
                <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section border-y border-white/5 bg-white/[0.015]">
        <div className="container-page">
          <SectionHeading eyebrow="EXPERIENCE" title="Freelance software development." />
          <div className="glass rounded-3xl p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Freelance Software Developer</h3>
                <p className="mt-2 text-cyan-300">6 Months</p>
              </div>
              <span className="h-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                Full Stack Development
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Built and delivered a responsive real estate web application.",
                "Implemented property listings, search/filtering and authentication.",
                "Developed CRUD operations, image management and customer inquiry features.",
                "Worked with Next.js, TypeScript, Tailwind CSS, Auth.js, Cloudinary and Vercel.",
                "Applied testing, SEO/performance optimization and production deployment practices.",
                "Handled client handover for the completed application.",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-400" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container-page">
          <SectionHeading eyebrow="CONTACT" title="Let&apos;s build something useful." />
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="leading-8 text-slate-400">
                I&apos;m open to entry-level software development opportunities,
                freelance projects and technical collaborations.
              </p>
              <div className="mt-7 space-y-4">
                <ContactLink icon={<Mail />} label="Email" value="alexpandian0307@gmail.com" href="mailto:alexpandian0307@gmail.com" />
                <ContactLink icon={<Phone />} label="Phone" value="+91 9787685889" href="tel:+919787685889" />
                <ContactLink icon={<MapPin />} label="Location" value="Coimbatore, Tamil Nadu" />
              </div>

              <div className="mt-7 flex gap-3">
                <SocialButton href="https://github.com/" icon={<Github />} label="GitHub" />
                <SocialButton href="https://www.linkedin.com/" icon={<Linkedin />} label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container-page flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Alexpandian A. All rights reserved.</p>
          <a href="#home" className="hover:text-cyan-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-bold tracking-[0.25em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 text-cyan-400">{icon}</div>
      <p className="text-xs uppercase tracking-widest text-slate-500">{title}</p>
      <p className="mt-2 font-semibold text-slate-200">{value}</p>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="text-cyan-400">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-widest text-slate-500">{label}</span>
        <span className="mt-1 block text-sm text-slate-200">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-4 rounded-2xl border border-white/5 p-4 transition hover:bg-white/5">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-2xl border border-white/5 p-4">{content}</div>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
    >
      {icon} {label}
    </a>
  );
}