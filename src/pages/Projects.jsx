import React from "react";

const projects = [
  {
    name: "",
    subtitle: "Institutional-Grade Real Estate Analytics Platform",
    description:
      "A full-stack platform for institutional real estate investors and private equity-style underwriters. Built tools for forecasting property-level ROI, cash flow, IRR, and market-driven value fluctuations using live market data, ML-based ROI prediction models, and Salesforce-style portfolio dashboards. Simulates professional-grade underwriting, acquisition screening, and PE-style asset management workflows.",
    keyFeatures: [
      "Multi-year cash flow modeling with exit sensitivity",
      "ML-enhanced ROI projections (↑15% prediction accuracy)",
      "Dashboard-style investor reports via integrated CRM logic",
      "Ensemble models trained on market-level + property-specific features",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Flask",
    ],
    image: "/dark_logo.png",
    website: "https://murphyd14.github.io/RealEase-Web/",
    tagline:
      "Think of this as a digital twin of a real estate PE investment team's underwriting tool.",
  },
  {
    name: "📈 AlphaHunter",
    subtitle: "Systematic Equity Research Platform for Alpha Discovery",
    description:
      "Engineered a quantitative platform for screening, modeling, and backtesting volatility-driven, multi-factor equity strategies. Designed and evaluated over 500 portfolios using PCA, XGBoost, and factor decomposition to isolate performance drivers. Built tooling for systematic signal generation and risk-adjusted performance validation.",
    keyFeatures: [
      "Custom equity screeners with rule-based filters",
      "Alpha/backtest engine with Sharpe, beta, alpha, max drawdown metrics",
      "Volatility regime detection + signal validation pipeline",
      "Multi-strategy research framework (momentum, mean reversion, stat arb)",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PostgreSQL",
      "Docker",
    ],
    tagline:
      "Built to mirror how multi-strategy hedge funds run internal research sandboxes.",
  },
  {
    name: "💼 Live Capital Account",
    subtitle: "Personal Quant Portfolio — Multi-Factor Strategy Execution",
    description:
      "A self-managed portfolio focused on implementing real-time factor strategies across global equities. Utilizes beta-neutral pair trades, momentum-adjusted reversion strategies, and risk-adjusted allocation models. Acts as a proving ground for practical capital deployment, position sizing, and trade thesis development.",
    keyFeatures: [
      "Multi-factor stock selection and capital rotation",
      "Statistical arbitrage using pair-trade modeling",
      "Exposure balancing, volatility targeting, and alpha signal execution",
      "Mindset: Capital efficiency, long-duration thesis conviction, and ownership-first thinking",
    ],
    technologies: [
      "Python",
      "QuantLib",
      "Bloomberg API",
      "Interactive Brokers API",
      "PostgreSQL",
    ],
    tagline:
      "Live strategy implementation with real capital; aligned with buy-side operator-investor mindset.",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="scroll-mt-32 flex flex-col items-center justify-center w-full px-4 md:px-8 bg-black"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-white border-b-2 border-white pb-2">
        Projects
      </h1>

      {/* Featured Project - RealEase */}
      <div className="w-full max-w-4xl mb-8 bg-black">
        <div className="flex flex-col items-center mb-4">
          <img
            src={projects[0].image}
            alt="RealEase Logo"
            className="w-48 h-32 object-contain mb-3"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">
            {projects[0].name}
          </h2>
          <h3 className="text-xl text-gray-300 mb-4">{projects[0].subtitle}</h3>
        </div>

        <div className="text-gray-300 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
          <p className="text-lg mb-4">{projects[0].description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3 text-center">
            Key Features:
          </h4>
          <ul className="space-y-2 max-w-2xl mx-auto">
            {projects[0].keyFeatures.map((feature, index) => (
              <li key={index} className="text-gray-300 text-center">
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {projects[0].technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-white/60 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-400 italic text-sm">{projects[0].tagline}</p>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={projects[0].website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="https://youtu.be/gSf3hTcHWhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Live Demo
            </a>
            <a
              href="/Housing Price Prediction Model Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              ML Report
            </a>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full max-w-2xl mb-8">
        <div className="border-t border-gray-600"></div>
      </div>

      {/* Other Projects */}
      <div className="w-full max-w-4xl bg-black">
        <div className="space-y-12">
          {projects.slice(1).map((project, index) => (
            <div key={project.name}>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {project.name}
                </h2>
                <h3 className="text-lg text-gray-300 mb-4">
                  {project.subtitle}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 max-w-2xl mx-auto">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 text-center"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-white/60 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-gray-400 italic text-sm">
                    {project.tagline}
                  </p>
                </div>

                {/* Only show ML Report button for AlphaHunter */}
                {project.name.includes("AlphaHunter") && (
                  <div className="text-center mt-6">
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="/AlphaHunter Project Report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        ML Report
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {index < projects.slice(1).length - 1 && (
                <div className="w-full max-w-2xl mx-auto mt-12">
                  <div className="border-t border-gray-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
