'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Project data - Add new projects here!
const projects = [
  {
    id: 8,
    title: "VAEB – ETHDenver 2026 Winner",
    description: "ZK-proof system enabling AI agents to execute blockchain transactions without ever touching private keys.",
    type: "web",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-600",
    icon: "🏆",
    tags: ["ZK Proofs", "Solidity", "Circom", "MCP", "DAML"],
    link: "#vaeb-modal",
  },
  {
    id: 9,
    title: "HyperLuck OS",
    description: "Institutional-grade execution OS with 3D visualizations and real-time dashboards for professional trading.",
    type: "web",
    gradient: "from-cyan-500 via-teal-600 to-blue-700",
    icon: "⚡",
    tags: ["React", "Spline 3D", "Framer Motion", "Recharts", "Vite"],
    link: "#hyperluck-modal",
  },
  {
    id: 10,
    title: "Funding Rate Efficient Frontier",
    description: "Academic paper on funding-rate vault capacity limits — submitted to D² 2026 at Columbia Business School.",
    type: "dashboard",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    icon: "📄",
    tags: ["Python", "DeFi Research", "Monte Carlo", "Hyperliquid", "Aave"],
    link: "#funding-modal",
  },
  {
    id: 1,
    title: "Paper to Threads n8n",
    description: "An n8n workflow to convert academic papers into engaging Twitter/X threads, making research more accessible.",
    type: "automation",
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-600",
    icon: "🤖",
    tags: ["n8n", "Automation", "AI", "OpenAI"],
    link: "https://github.com/yuchengzhang966/paper_to_threads_n8n",
  },

  {
    id: 2,
    title: "COVID-19 Dashboard",
    description: "Interactive data visualization with D3.js",
    type: "dashboard",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
    icon: "📊",
    tags: ["React", "D3.js", "Vite", "Data Viz"],
    link: "https://covid-vaccine-main.vercel.app"
  },
  {
    id: 3,
    title: "GoBuddy AI",
    description: "AI agent demo for business travelers — RAG-powered policy Q&A, intent parsing, and personalized booking.",
    type: "mobile",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    icon: "✈️",
    tags: ["AI", "Voice Assistant", "Travel Tech", "Mobile App"],
    link: "#gobuddy-modal",
  },
  {
    id: 4,
    title: "PDF to Branded PowerPoint Converter",
    description: "A Python tool that converts PDF presentations into professionally branded PowerPoints, using AI to extract content and apply custom templates.",
    type: "automation",
    gradient: "from-rose-400 via-pink-500 to-orange-400",
    icon: "🖼️",
    tags: ["Python", "OpenAI", "AI", "Automation"],
    link: "https://github.com/yuchengzhang966/ppt",
  },
  {
    id: 5,
    title: "Ethereum Big Data Analysis",
    description: "An analysis of the Ethereum ecosystem using Hadoop and Spark to find correlations between ETH price, NFT sales, and Twitter activity.",
    type: "dashboard",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    icon: "📈",
    tags: ["Hadoop", "Spark", "Big Data", "Scala"],
    link: "https://github.com/yuchengzhang966/BigDataEther",
  },
  {
    id: 6,
    title: "Reversi Game",
    description: "A multiplayer web-based Reversi game where users can compete, view rankings, and spectate matches. Features user authentication, bot opponents, and game history.",
    type: "web",
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    icon: "🎮",
    tags: ["React", "Node.js", "MongoDB", "Redis", "WebSockets"],
    link: "https://reversi.pro",
  },
  {
    id: 7,
    title: "SageArk.io",
    description: "Led the end-to-end development of a comprehensive Learning Management System (LMS) for modern educational needs.",
    type: "web",
    gradient: "from-teal-400 via-emerald-500 to-green-600",
    icon: "🎓",
    tags: ["LMS", "Full-Stack", "EdTech", "React", "Node.js"],
    link: "https://sageark.io",
  },
]

type Project = typeof projects[0];

// Custom SVG component for the logo
const LogoSVG = () => (
  <svg width="200" height="120" viewBox="0 0 200 120" fill="none" className="mx-auto mb-4" role="img" aria-labelledby="logoTitle">
    <title id="logoTitle">Brand Identity Logo</title>
    <path
      d="M20 60C20 32 32 20 60 20C88 20 100 32 100 60C100 88 88 100 60 100C32 100 20 88 20 60Z"
      stroke="#4F46E5"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M100 60C100 32 112 20 140 20C168 20 180 32 180 60C180 88 168 100 140 100C112 100 100 88 100 60Z"
      stroke="#7C3AED"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M60 20C60 48 72 60 100 60C128 60 140 48 140 20"
      stroke="#06B6D4"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M60 100C60 72 72 60 100 60C128 60 140 72 140 100"
      stroke="#06B6D4"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const renderProjectContent = (project: Project) => {
    if (project.icon === "logo") {
      return (
        <div className="relative z-10 text-center p-6">
          <LogoSVG />
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="relative z-10 text-center p-6">
        <div className="text-6xl mb-4">{project.icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  };

function HyperLuckModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 rounded-t-3xl p-8 text-center">
          <div className="text-5xl mb-3">⚡</div>
          <h2 className="text-2xl font-bold text-white mb-1">HyperLuck OS</h2>
          <p className="text-indigo-200 text-sm">Institutional Execution Operating System</p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              HyperLuck OS is an institutional-grade execution operating system designed for professional trading workflows. It features immersive 3D visualizations, real-time data dashboards, and a dark technical interface optimized for high-performance execution.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Interactive 3D visualizations powered by Spline</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Real-time data dashboards with Recharts</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Fluid animations with Framer Motion</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Dark, technical UI optimized for institutional workflows</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React 19", "Spline 3D", "Framer Motion", "Recharts", "Vite", "Tailwind CSS", "React Router", "Netlify"].map((tech) => (
                <span key={tech} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.hyperluckos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function VAEBModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 rounded-t-3xl p-8 text-center">
          <div className="text-5xl mb-3">🏆</div>
          <h2 className="text-2xl font-bold text-white mb-1">Verifiable Agent Execution Bundle</h2>
          <p className="text-indigo-100 text-sm">ETHDenver 2026 · 🥇 1st Place — Kite AI Agentic AI Track</p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Problem */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Users hesitate to grant AI agents direct fund access due to security concerns. Currently, this requires either sharing private keys (dangerous) or manually signing every transaction (defeats automation).
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              VAEB introduces a third path: agents execute transactions without ever accessing private keys. Using a Model Context Protocol (MCP) server, agents submit transactions while Groth16 zero-knowledge proofs cryptographically verify that execution matches user-approved parameters — preventing address substitution or amount inflation.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Solidity", "Circom", "snarkjs", "Groth16 ZK Proofs", "MCP Server", "DAML", "RISC0 zkVM", "EIP-712", "Node.js", "React"].map((tech) => (
                <span key={tech} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hackathon Tracks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hackathon Tracks</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Futurllama — ZK-verified agent execution</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Best Use of AI Inference (0G Compute)</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>🥇 <strong>1st Place</strong> — Agent-Native Payments &amp; Identity on Kite AI (Agentic AI Track)</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">&#9679;</span>Best Privacy-Focused dApp Using Daml (Canton Network)</li>
            </ul>
          </div>

          {/* Video Walkthrough */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Walkthrough</h3>
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <iframe
                src="https://drive.google.com/file/d/16_WU5Gf1EejvDiyIMMBjzdFrySfYozKg/preview"
                width="100%"
                height="340"
                allow="autoplay"
                className="border-0"
              />
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team — Vishwa Gang</h3>
            <p className="text-gray-600 text-sm">SJ Liang &amp; Jenny Zhang</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/vishwanetwork/VAEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://devfolio.co/projects/verifiable-agent-execution-bundle-vaeb-a5b0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Devfolio
            </a>
            <a
              href="https://drive.google.com/file/d/16_WU5Gf1EejvDiyIMMBjzdFrySfYozKg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FundingModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-t-3xl p-8 text-center">
          <div className="text-5xl mb-3">📄</div>
          <h2 className="text-2xl font-bold text-white mb-1">Funding Rate Efficient Frontier</h2>
          <p className="text-orange-100 text-sm">Academic Paper · D² 2026 @ Columbia Business School</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Abstract</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This paper models the capacity frontier of funding-rate capture vaults: how do these strategies scale as capital under management grows? We show that transaction costs, market impact, rebalancing friction, and borrowing rates all scale non-linearly with position size, creating a hard ceiling on profitability at scale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Contributions</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#9679;</span><span><strong>Capacity frontier analysis</strong> — identifies the AUM ceiling beyond which funding-rate capture becomes unprofitable</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#9679;</span><span><strong>Dynamic leverage optimization</strong> — optimal leverage and rebalancing policy under size-dependent frictions</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#9679;</span><span><strong>Monte Carlo calibration</strong> — calibrated against real Hyperliquid perpetuals and Aave v3 Arbitrum borrow rates</span></li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#9679;</span><span><strong>Regime analysis</strong> — performance across different market regimes (bull, bear, sideways)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
            <div className="flex flex-wrap gap-2">
              {["Hyperliquid Perps", "Aave v3 Arbitrum", "Python", "Monte Carlo", "SciPy", "pandas", "Matplotlib"].map((tech) => (
                <span key={tech} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/funding-rate-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read Paper
            </a>
            <a
              href="https://github.com/yuchengzhang966/funding-rate-efficient-frontier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoBuddyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 rounded-t-3xl p-8 text-center">
          <div className="text-5xl mb-3">✈️</div>
          <h2 className="text-2xl font-bold text-white mb-1">GoBuddy AI</h2>
          <p className="text-blue-100 text-sm">AI Agent Demo for Business Travelers</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built a demo for AI agents tailored to business travelers. The system handles end-to-end travel workflows — from parsing natural language booking requests to enforcing company travel policies and personalizing recommendations based on user profiles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Demo Capabilities</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#9679;</span><span><strong>RAG-powered policy Q&amp;A</strong> — retrieves verified travel policy docs to reduce hallucination</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#9679;</span><span><strong>Intent parsing</strong> — converts natural language into structured actions (flight search, hotel booking, cancellations)</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#9679;</span><span><strong>Personalization</strong> — adapts responses to user profiles including preferred airline, budget, and home location</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#9679;</span><span><strong>Guardrails</strong> — enforces policy rules before confirming actions, asks clarifying questions when information is missing</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "LangChain", "FAISS", "SentenceTransformers", "OpenAI API", "RAG"].map((tech) => (
                <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/yuchengzhang966/Travel_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://gobuddyai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showVAEB, setShowVAEB] = useState(false);
  const [showHyperLuck, setShowHyperLuck] = useState(false);
  const [showGoBuddy, setShowGoBuddy] = useState(false);
  const [showFunding, setShowFunding] = useState(false);

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isModal = project.link === "#vaeb-modal" || project.link === "#hyperluck-modal" || project.link === "#gobuddy-modal" || project.link === "#funding-modal";
            const isInteractive = project.link && project.link !== "#";
            const ProjectCard = (
              <div
                className={`group relative bg-gradient-to-br ${project.gradient} rounded-3xl min-h-[400px] flex items-center justify-center transform transition-all duration-300 overflow-hidden ${isInteractive ? 'hover:-translate-y-2 hover:scale-105 cursor-pointer' : ''}`}
              >
                {/* Matte overlay layer */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10"></div>
                {renderProjectContent(project)}
              </div>
            )

            if (isModal) {
              return (
                <div key={project.id} onClick={() => {
                  if (project.link === "#vaeb-modal") setShowVAEB(true);
                  if (project.link === "#hyperluck-modal") setShowHyperLuck(true);
                  if (project.link === "#gobuddy-modal") setShowGoBuddy(true);
                  if (project.link === "#funding-modal") setShowFunding(true);
                }}>
                  {ProjectCard}
                </div>
              )
            }

            if (isInteractive) {
              if (project.link.startsWith('http')) {
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {ProjectCard}
                  </a>
                )
              } else {
                return (
                  <Link key={project.id} href={project.link}>
                    {ProjectCard}
                  </Link>
                )
              }
            }

            return (
              <div key={project.id}>
                {ProjectCard}
              </div>
            )
          })}
        </div>
      </div>

      {showVAEB && <VAEBModal onClose={() => setShowVAEB(false)} />}
      {showHyperLuck && <HyperLuckModal onClose={() => setShowHyperLuck(false)} />}
      {showGoBuddy && <GoBuddyModal onClose={() => setShowGoBuddy(false)} />}
      {showFunding && <FundingModal onClose={() => setShowFunding(false)} />}
    </section>
  )
}
