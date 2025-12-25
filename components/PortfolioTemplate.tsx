"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";

import { useEffect, useState } from "react";

const PortfolioTemplate = () => {
  const { portfolioData } = usePortfolioStore();
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const loadHtml = async () => {
      try {
        const response = await fetch("/index.html");
        if (!response.ok) {
          throw new Error("Failed to fetch HTML template");
        }
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Failed to load HTML template", error);
      }
    };
    loadHtml();
  }, []);

  if (!portfolioData) {
    return <div className="p-10 text-center">No data available</div>;
  }

  if (!htmlContent) {
    return <div className="p-10 text-center">Loading template...</div>;
  }

  // Inject current portfolio data into the HTML template
  const modifiedHtml = htmlContent
    .replace(
      "let portfolioData = null;",
      `let portfolioData = ${JSON.stringify(portfolioData).replace(
        /<\/script>/g,
        "<\\/script>"
      )};`
    )
    .replace(
      "async function loadPortfolioData() {",
      "async function loadPortfolioData() { return portfolioData;"
    );

  return (
    <div className="w-full h-full min-h-screen bg-white">
      <iframe
        srcDoc={modifiedHtml}
        className="w-full h-full min-h-screen border-none"
        title="Portfolio Preview"
        sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
      />
    </div>
  );
};

export default PortfolioTemplate;
