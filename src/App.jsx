import Navbar from "./components/Navbar";
import homeBg from "./assets/101.gif";
import skillsBg from "./assets/102.gif";
import projectsBg from "./assets/103.gif";
import contactBg from "./assets/hero.jpg";
import profile from "./assets/profile.png";
import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Dino-Game-clone",
    desc: "A Clone of chrome's dino gamed",
    link: "https://github.com/Ritesh-Gupta-op/Dino-Gameclone",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Portfolio Site",
    desc: "A modern personal portfolio built for showcasing work and contact links.",
    link: "",
    tags: ["Vite", "CSS","React","Git","Vanilla JSX"],
  },
  {
    title: "ENTITY COMPONENT MANAGER",
    desc: "A lightweight and modular Entity Component System (ECS) manager designed to simplify game development by decoupling data (components) from behavior (systems).",
    link: "https://github.com/Ritesh-Gupta-op/Entity_component_manager",
    tags: ["C++", "VS STUDIO"],
  },
  {
    title: "TIC TAC TOE",
    desc: "A simple Tic Tac Toe game built using programming logic where two players take turns marking spaces in a 3×3 grid The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.",
    link: "https://github.com/Ritesh-Gupta-op/Basic01-tic-tac-toe-",
    tags: ["HTML", "CSS","javascript"],
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/Ritesh-Gupta-op", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritesh-gupta-317965383?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "linkedin" },
  { label: "X", href: "https://x.com/anuj_is_coding", icon: "x" },
  { label: "Resume", href: "/resume.pdf", icon: "document" },
];

const SocialIcon = ({ type, className }) => {
  switch (type) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.81 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.553 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21 0 1.596-.015 2.88-.015 3.27 0 .325.21.705.825.585C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.447 20.452H17.2V14.8c0-1.34-.027-3.066-1.87-3.066-1.87 0-2.155 1.46-2.155 2.966v5.752H9.146V9h3.093v1.561h.043c.43-.815 1.484-1.67 3.055-1.67 3.267 0 3.872 2.15 3.872 4.947v6.615zM5.337 7.433a1.79 1.79 0 110-3.58 1.79 1.79 0 010 3.58zm1.536 13.019H3.8V9h3.073v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.268V1.73C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M23.25 4.062a1.128 1.128 0 00-1.486-.515l-6.72 3.202-2.842-7.267a1.127 1.127 0 00-1.734-.514L5.289 5.301 1.118 4.233A1.127 1.127 0 000 5.336v13.329a1.127 1.127 0 001.118 1.102l11.84-1.1 7.465 2.99a1.129 1.129 0 001.456-1.297l-1.89-8.768 3.071-6.096a1.128 1.128 0 00-.01-1.433z" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0019.414 7L14 1.586A2 2 0 0012.586 1H6zm7 1.5L18.5 7H13a1 1 0 01-1-1V3.5zM6 4h6v4a2 2 0 002 2h4v10H6V4zm3 10h6v2H9v-2zm0-4h6v2H9v-2z" />
        </svg>
      );
    default:
      return null;
  }
};

const skills = [
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: "JS", color: "text-yellow-300" },
      { label: "Python", icon: "🐍", color: "text-sky-200" },
      { label: "C++", icon: "C++", color: "text-slate-200" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: "⚛", color: "text-cyan-300" },
      { label: "React Native", icon: "RN", color: "text-sky-300" },
      { label: "Next.js", icon: "N", color: "text-white" },
      { label: "Tailwind CSS", icon: "TW", color: "text-cyan-300" },
      { label: "Redux Toolkit", icon: "RT", color: "text-violet-300" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "N", color: "text-lime-300" },
      { label: "Express", icon: "Ex", color: "text-white" },
      { label: "Socket.io", icon: "S", color: "text-sky-300" },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { label: "MongoDB", icon: "M", color: "text-emerald-300" },
      
      { label: "Git", icon: "G", color: "text-orange-400" },
    ],
  },
];

function App() {
  const [flip, setFlip] = useState(false);

  const handleProfileClick = () => {
    setFlip(true);
    window.setTimeout(() => setFlip(false), 1000);
  };

  const handleSectionPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleSectionPointerLeave = (event) => {
    event.currentTarget.style.setProperty("--mouse-x", "50%");
    event.currentTarget.style.setProperty("--mouse-y", "50%");
  };

  return (
    <>
      <section id="home" className="relative min-h-screen scroll-mt-24">
        <img src={homeBg} alt="home background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35"></div>
        <Navbar />
        <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pb-10 pt-28 md:flex-row md:items-start md:gap-16">
          <div className="w-full md:w-2/3">
            <h1 className="text-white font-bold text-5xl md:text-7xl">Hi, There welcome!</h1>
            <p className="mt-6 text-lg text-white">
              Hi! I am Ritesh Gupta, a passionate web developer and designer.
            </p>
          </div>

          <div className="glass-card w-full max-w-[440px] rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-[0_45px_140px_rgba(0,0,0,0.18)] backdrop-blur-[32px]">
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt="profile"
                className={`profile-coin ${flip ? "flip" : ""} h-24 w-24 rounded-[28px] object-cover ring-1 ring-white/20 cursor-pointer`}
                onClick={handleProfileClick}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Profile</p>
                <h2 className="text-xl font-semibold text-white">Ritesh Gupta</h2>
                <p className="text-sm text-zinc-300">Full-Stack Developer</p>
              
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.slice(0, 4).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-white/90 transition hover:bg-white/10"
                  aria-label={link.label}
                >
                  <SocialIcon type={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" onPointerMove={handleSectionPointerMove} onPointerLeave={handleSectionPointerLeave} className="interactive-section relative min-h-screen scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6 lg:px-10 text-white overflow-hidden">
        <img src={projectsBg} alt="projects background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">Featured work</p>
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">My GitHub Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-red-400/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-red-400">↗</span>
                </div>
                <p className="mb-4 text-sm text-zinc-300">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" onPointerMove={handleSectionPointerMove} onPointerLeave={handleSectionPointerLeave} className="interactive-section relative min-h-screen scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 text-white">
        <img src={skillsBg} alt="skills background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">Skills</p>
            <h2 className="text-4xl font-bold">What I build with</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((category) => (
              <div key={category.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-5 text-xl font-semibold">{category.title}</h3>
                <div className="grid gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100"
                    >
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold ${item.color}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" onPointerMove={handleSectionPointerMove} onPointerLeave={handleSectionPointerLeave} className="interactive-section min-h-screen scroll-mt-24 border-t border-white/10 bg-zinc-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">Blog</p>
          <h2 className="text-4xl font-bold">Coming soon</h2>
        </div>
      </section>

      <section id="contact" onPointerMove={handleSectionPointerMove} onPointerLeave={handleSectionPointerLeave} className="interactive-section relative min-h-screen scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6 lg:px-10 text-white overflow-hidden">
        <img src={contactBg} alt="contact background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">Contact</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Contact me & links</h2>
          <p className="mb-8 max-w-2xl text-zinc-300">
            Open for freelance work, collaborations, and new ideas.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-semibold">Get in touch</h3>
              <a href="mailto:hello@yourmail.com" className="text-red-400 hover:underline">
               Kingofpirates451@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-semibold">Quick links</h3>
              <div className="grid gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/20 px-4 py-3 text-zinc-200 transition hover:border-red-400/50 hover:text-red-400"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
                      <SocialIcon type={link.icon} className="h-5 w-5" />
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;