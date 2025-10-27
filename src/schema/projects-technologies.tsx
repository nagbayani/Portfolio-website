import startAngulens from "../img/angulens/startAnguLens.gif";
import modal from "../img/angulens/modal.gif";
import services from "../img/angulens/services.gif";
import navigateFile from "../img/angulens/navigateFile.gif";

/**
 * Typescript, Angular, Webview API, Klaw-Sync, VS Code Extension API
 * Next.js, Zustand, TipTap, PostgreSQL, OAuth, Prisma, OpenAI, API, Stripe
 * React, Express, MongoDB, Webpack, react-beautiful-dnd
 */

const technologies = {
  TypeScript: { color: "bg-blue-100 text-blue-800", icon: "🔷" },
  Angular: { color: "bg-red-100 text-red-700", icon: "🅰️" },
  "Webview API": { color: "bg-purple-100 text-purple-800", icon: "🌐" },
  "Klaw-Sync": { color: "bg-gray-100 text-gray-700", icon: "📁" },
  "VS Code Extension API": {
    color: "bg-indigo-100 text-indigo-800",
    icon: "🧩",
  },

  "Next.js": { color: "bg-gray-100 text-gray-800", icon: "▲" },
  Zustand: { color: "bg-orange-100 text-orange-800", icon: "🐻" },
  TipTap: { color: "bg-pink-100 text-pink-700", icon: "✍️" },
  PostgreSQL: { color: "bg-blue-100 text-blue-700", icon: "🐘" },
  OAuth: { color: "bg-purple-100 text-purple-800", icon: "🔐" },
  Prisma: { color: "bg-indigo-100 text-indigo-700", icon: "🌐" },
  OpenAI: { color: "bg-green-100 text-green-900", icon: "🧠" },
  Stripe: { color: "bg-indigo-100 text-indigo-700", icon: "💳" },

  React: { color: "bg-cyan-100 text-cyan-800", icon: "⚛️" },
  Express: { color: "bg-gray-200 text-gray-800", icon: "🚂" },
  MongoDB: { color: "bg-green-100 text-green-700", icon: "🍃" },
  Webpack: { color: "bg-blue-100 text-blue-700", icon: "📦" },
  "react-beautiful-dnd": { color: "bg-yellow-100 text-yellow-800", icon: "🧲" },
};
const projects = [
  {
    id: 1,
    name: "Angulens",
    subheader: "OPEN SOURCE PRODUCT",
    description:
      "Visual Studio Code Extension built with Angular focused on visualizing component hierarchies, dependencies, and component data flows in selected Angular Projects.",
    technologies: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "OAuth",
      "Tailwind CSS",
      "AWS",
    ],
    status: "Live",
    link: "#",
    github: "#",
    features: [
      {
        title: "View File & Folder Structure",
        description:
          "Advanced product filtering with real-time search, category navigation, and intelligent recommendations based on user behavior.",
        gif: navigateFile,
      },
      {
        title: "View Project Components",
        description:
          "Multi-step checkout with payment processing, address validation, and order confirmation with automated email receipts.",
        gif: modal,
      },
      {
        title: "View Services",
        description:
          "Comprehensive analytics dashboard with sales metrics, inventory management, and customer insights with real-time updates.",
        gif: services,
      },
    ],
  },
  {
    id: 2,
    name: "InterFluent",
    subheader: "WEB APPLICATION",
    description:
      "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Includes drag-and-drop functionality, time tracking, and integration with popular development tools.",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Redis", "Docker"],
    status: "In Development",
    link: "#",
    github: "#",
    features: [
      {
        title: "Generate interview questions",
        description:
          "Generate interview questions to match job description, behavioral ",
        gif: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Rich Text Editor",
        description:
          "Real-time chat, file sharing, and comment system with @mentions and notification management for seamless team communication.",
        gif: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Generate sample answers and feedback",
        description:
          "Real-time chat, file sharing, and comment system with @mentions and notification management for seamless team communication.",
        gif: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Stripe payment & Subscription tiers",
        description:
          "Automated time tracking with detailed reporting, productivity analytics, and project timeline visualization.",
        gif: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: 3,
    name: "Scrum Board Demo",
    subheader: "WEB DEMO",
    description:
      "A comprehensive business intelligence dashboard with interactive data visualizations, real-time metrics, and automated report generation. Features custom chart components and advanced filtering capabilities.",
    technologies: ["JavaScript", "React", "SQL", "AWS", "Tailwind CSS"],
    status: "Live",
    link: "#",
    github: "#",
    features: [
      {
        title: "Interactive Data Visualization",
        description:
          "Dynamic charts and graphs with drill-down capabilities, custom date ranges, and export functionality for comprehensive data analysis.",
        gif: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Real-time Metrics",
        description:
          "Live data streaming with WebSocket connections, automatic refresh intervals, and alert system for critical metric changes.",
        gif: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Custom Report Builder",
        description:
          "Drag-and-drop report creation with scheduled delivery, custom templates, and automated insights generation.",
        gif: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
];

export { projects, technologies };
