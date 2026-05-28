import { Code2, Cloud, Database, Globe } from 'lucide-react';

const skillCategories = [
  { icon: Code2, title: "Programming", items: ["python", "JavaScript", "R", "CSS/HTML"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS", "Azure", "Git", "GCP"] },
  { icon: Database, title: "Database", items: ["Mysql", "PostgreSQL", "MongoDB"] },
  { icon: Globe, title: "Data Science", items: ["Machine Learning", "Data Analysis", "Statistical Modelling", "Forecasting", "PowerBI", "MatplotLib"] },
  { icon: Database, title: "Tools", items: ["Jupyter Notebook", "GitHub", "Docker", "Linux"] },
  { icon: Globe, title: "Others", items: ["Problem Solving", "Critical thinking", "Teamwork", "Communication", "Time management", "Presentation skills"] }
];

const Skills = () => (
  <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <skill.icon className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-6">{skill.title}</h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;