"use client";
import { useState } from "react";

const skills = [
  { name: "Golang", level: 95, category: "lang" },
  { name: "Python", level: 75, category: "lang" },
  { name: "TypeScript", level: 70, category: "lang" },
  { name: "Kubernetes", level: 90, category: "infra" },
  { name: "GCP", level: 90, category: "infra" },
  { name: "Docker", level: 88, category: "infra" },
  { name: "Elasticsearch", level: 85, category: "data" },
  { name: "Redis", level: 88, category: "data" },
  { name: "Kafka/PubSub", level: 85, category: "data" },
  { name: "Gemini AI", level: 80, category: "ai" },
  { name: "Vertex AI", level: 78, category: "ai" },
  { name: "Datadog", level: 85, category: "infra" },
];

const projects = [
  {
    title: "Real-Time Video Clip Generation Platform",
    tech: "Golang, GKE, PubSub, ES, Redis, KEDA",
    description: "End-to-end pipeline processing 50K+ concurrent video clips: clip request, HLS/DASH generation, MP4 transcoding, AI enrichment (thumbnails, descriptions, embeddings), search indexing, CDN delivery. Auto-scales 1-30 pods via KEDA.",
    metrics: ["50K+ concurrent jobs", "8+ worker types", "99.9% uptime"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI-Powered Thumbnail Generation",
    tech: "Golang, Gemini 2.5 Flash, Vertex AI, Multi-region",
    description: "Video analysis through Google Gemini AI for intelligent frame selection, overlay removal, and sport-specific smart cropping. Multi-region rotation across 15 GCP regions with exponential backoff.",
    metrics: ["15 GCP regions", "5 concurrency/pod", "3 Gemini models"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Slack-Integrated Infrastructure Bot",
    tech: "Node.js, Claude Code, Slack Bolt, GKE",
    description: "Remote ops tool enabling kubectl, gcloud, PubSub management from mobile Slack. Features interactive approval buttons, session-based permissions, and per-command-type authorization.",
    metrics: ["Full mobile ops", "Interactive approvals", "Session persistence"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Backend-Driven Presentation API",
    tech: "Golang, Redis, LaunchDarkly, Elasticsearch",
    description: "API controlling frontend UI layouts, carousels, and content sections dynamically. Enables instant A/B testing, feature rollouts, and UI updates without app releases across 6+ client platforms.",
    metrics: ["6+ platforms", "A/B testing", "Zero-deploy UI updates"],
    color: "from-orange-500 to-red-500",
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "FuboTV Inc.",
    period: "Sept 2021 - Present",
    location: "Bengaluru",
    highlights: [
      "Architected real-time clip generation platform on GKE processing 50K+ concurrent video clips",
      "Achieved 10x latency improvement (3s to 300ms) through concurrency tuning and Redis caching",
      "Scaled backend to 100K+ users, 10M+ daily requests with 99.9% uptime",
      "Integrated Gemini AI with multi-region failover across 15 GCP regions",
      "Resolved ES cluster hot-node saturation (1M+ write rejections) through shard rebalancing",
      "Built Slack-integrated ops bot for remote infrastructure management from mobile",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Edisn.ai",
    period: "2021",
    location: "Bengaluru",
    highlights: [
      "Built back-office application for sports metadata management",
      "Designed RESTful APIs with Firebase and Cloud Functions",
    ],
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredSkills = activeFilter === "all" ? skills : skills.filter(s => s.category === activeFilter);

  return (
    <main className="bg-gray-950 text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            Open to opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Manan Sethi
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">Senior Software Engineer</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Building high-scale distributed systems with <span className="text-blue-400">Golang</span>,{" "}
            <span className="text-cyan-400">Kubernetes</span>, and{" "}
            <span className="text-purple-400">AI</span>. Serving 10M+ daily requests at FuboTV.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://linkedin.com/in/manansethi12" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">LinkedIn</a>
            <a href="https://github.com/Manansethi12" target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-colors">GitHub</a>
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium transition-colors">Hire Me</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10M+", label: "Daily Requests" },
            { value: "99.9%", label: "Uptime" },
            { value: "50K+", label: "Concurrent Jobs" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {[
              { key: "all", label: "All" },
              { key: "lang", label: "Languages" },
              { key: "infra", label: "Infrastructure" },
              { key: "data", label: "Data" },
              { key: "ai", label: "AI/ML" },
            ].map((f) => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === f.key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4">
                <span className="w-32 text-sm text-gray-400">{skill.name}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="text-sm text-gray-500 w-10">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-gray-900/50" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${project.color} text-white`}>{project.tech}</div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.metrics.map((m) => (
                    <span key={m} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.company} className="border-l-2 border-blue-500 pl-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company} &middot; {exp.location}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-blue-500 mt-0.5">&#9656;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gray-900/50" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400 mb-8">Open to Senior Backend/Platform Engineer roles. Available for full-time in India or remote globally.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:manfam1999@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">manfam1999@gmail.com</a>
            <a href="tel:+919131712128" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-colors">+91 9131712128</a>
          </div>
          <div className="flex gap-6 justify-center mt-6">
            <a href="https://linkedin.com/in/manansethi12" target="_blank" className="text-gray-500 hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Manansethi12" target="_blank" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        &copy; 2026 Manan Sethi
      </footer>
    </main>
  );
}
