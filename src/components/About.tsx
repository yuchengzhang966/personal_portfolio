export default function About() {
  const skillCategories = [
    {
      title: "DeFi & Blockchain",
      skills: ["Solidity", "Circom / ZK Proofs", "DeFi Protocol Design", "Funding Rate Modeling", "On-chain Data Analysis", "DAML"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      title: "AI & Automation",
      skills: ["LLM Agents (MCP)", "RAG Pipelines", "LangChain", "n8n Workflows", "OpenAI API", "Monte Carlo Simulation"],
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Full-Stack Development",
      skills: ["React / Next.js", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL"],
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      title: "Data & Visualization",
      skills: ["D3.js", "Recharts", "Hadoop / Spark", "Pandas / NumPy", "Spline 3D", "Framer Motion"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-16">
          I build at the intersection of AI and DeFi — from zero-knowledge proof systems for trustless agent execution to quantitative research on funding-rate capture vaults. I love taking ideas from whiteboard to production, whether that&apos;s an institutional trading OS, an AI-powered workflow, or an academic paper backed by real data.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${category.color} px-3 py-1.5 rounded-full text-xs font-medium border`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
