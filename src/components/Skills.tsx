import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  // useState to initialize current tab index
  const [currentIndex, setCurrentIndex] = useState(0);

  // link up current tab with TabContent component
  // tab config
  const tabs = [
    { label: "Tech Stack", data: TechStack },
    { label: "Certifications", data: Certifications },
  ];
  return (
    <div>
      <div className='tabs-component mt-8'>
        <ul className='mx-16 flex px-8' role='tablist'>
          {tabs.map((tab, i) => (
            <motion.li
              key={i}
              role='tab'
              onClick={() => setCurrentIndex(i)}
              className={`
                cursor-pointer px-4 py-2 rounded-xl border text-sm font-medium
                transition-all duration-200 mr-2 my-2
                ${
                  currentIndex === i
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-slate-300 hover:bg-slate-100"
                }
              `}
              aria-selected={currentIndex === i}
            >
              <h3>{tab.label}</h3>
            </motion.li>
          ))}
        </ul>
        <TabContent data={tabs[currentIndex].data} />
      </div>
    </div>
  );
};

interface Category {
  name: string;
  technologies: string[];
}

// Pass in TabContent Index
const TabContent = ({ data }: { data: Category[] }) => {
  return (
    <motion.div className='flex mx-16 p-4 rounded-md'>
      {data.map((category, index) => (
        <div
          key={index}
          className='mx-4 flex flex-col flex-wrap w-full rounded-2xl border-slate-200 border-2 p-2'
        >
          <span className=' font-semibold text-lg'>{category.name}</span>
          <motion.ul className='flex flex-wrap mt-2'>
            {category.technologies.map((tech, techIndex) => (
              <li
                key={techIndex}
                className='mr-1 my-2 px-2 py-1.5 bg-[#ededed] rounded-2xl font-medium  hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 cursor-default'
              >
                <p>{tech}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;

const TechStack = [
  {
    name: "Core Technologies",
    technologies: [
      "JavaScript / TypeScript",
      "Python",
      "Java",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
    ],
  },
  {
    name: "Other Tools",
    technologies: [
      "Docker",
      "AWS",
      "Git/GitHub",
      "Redux",
      "Zustand",
      "Postman",
      "Prisma",
      "Figma",
      "Framer Motion",
      "Wordpress",
    ],
  },
];

const Certifications = [
  {
    name: "IT Certifications",
    technologies: [
      "CompTIA A+",
      "CompTIA Network+",
      "CompTIA Security+",
      "LPI Linux Essentials",
      "AWS Cloud Practitioner",
      "ITIL® Foundation",
    ],
  },
];
// {
//   number: "01",
//   name: "Languages",
//   technologies: ["JavaScript / TypeScript", "Python", "SQL"],
// },
// {
//   number: "02",
//   name: "Frameworks",
//   technologies: ["React", "Next.js", "Angular"],
// },
// {
//   number: "03",
//   name: "Backend",
//   technologies: ["Node.js", "Express"],
// },
// {
//   number: "04",
//   name: "Databases",
//   technologies: ["PostgreSQL", "MySQL", "MongoDB", "GraphQL"],
// },
