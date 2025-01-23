import React from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { Download, Code, Database, Award, Briefcase, GraduationCap, PenTool as Tool } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Resume</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>

        <div className="space-y-8">
          <ScrollAnimation>
            <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-400">Bachelor of Technology in Computer Science</h3>
                <p className="text-lg">GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</p>
                <p className="text-gray-400">2021-2025 • CGPA: 8.47</p>
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h2>
              <div className="space-y-6">
                <ExperienceItem
                  title="AI/ML Intern"
                  company="Defence Research and Development Organisation (DRDO)"
                  period="Jan, 2025 - Present"
                  points={[
                    "Focusing on the practical applications of Generative AI to advance defense technologies and solutions.",
                    "Researching and implementing synthetic data generation, simulation of complex defense scenarios.",
                    "Contributing to DRDO's mission by applying AI to address critical challenges in defense and innovation."
                  ]}
                />
                <ExperienceItem
                  title="AI/ML Intern"
                  company="Central Research Lab, Bharat Electronics Limited (BEL)"
                  period="Sep, 2024 - Dec, 2024"
                  points={[
                    "Analyzed large-scale datasets (20+ crore entries) within the SUPER SCADA system.",
                    "Engineered predictive models with 85%+ accuracy and implemented data pipeline.",
                    "Collaborated with cross-functional teams to optimize model performance by 25%.",
                    "Processed and optimized 10+ years of operational data using SMOTE."
                  ]}
                />
                <ExperienceItem
                  title="Data Scientist | Management"
                  company="Fleetrr Online Services"
                  period="Feb, 2023 - Aug, 2024"
                  points={[
                    "Engineered ML models that reduced inventory errors by 30%.",
                    "Conducted statistical analysis with Python, improving decision-making by 25%.",
                    "Automated 10+ KPIs using Python-based dashboards and data pipelines.",
                    "Worked with cross-functional teams to streamline resource allocation."
                  ]}
                />
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2" /> Skills
              </h2>
              <div className="space-y-6">
                <SkillCategory
                  title="Core Areas"
                  skills={[
                    "Data Science",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Supervised & Unsupervised Learning",
                    "NLP",
                    "Neural Networks",
                    "EDA",
                    "Feature Engineering"
                  ]}
                />
                <SkillCategory
                  title="Programming & Libraries"
                  skills={[
                    "Python",
                    "Scikit-Learn",
                    "TensorFlow",
                    "Keras",
                    "Pandas",
                    "NumPy",
                    "Beautiful Soup",
                    "Seaborn",
                    "Matplotlib",
                    "FastAPI",
                    "Streamlit"
                  ]}
                />
                <SkillCategory
                  title="Mathematics for ML"
                  skills={[
                    "Algebra",
                    "Probability",
                    "Statistics",
                    "Calculus",
                    "Matrices"
                  ]}
                />
                <SkillCategory
                  title="Tools & Technologies"
                  skills={[
                    "AWS SageMaker",
                    "Jupyter Notebook",
                    "VS Code",
                    "Git",
                    "RabbitMQ",
                    "Power BI",
                    "Tableau",
                    "Canva"
                  ]}
                />
                <SkillCategory
                  title="Databases"
                  skills={[
                    "MySQL",
                    "MongoDB",
                    "PostgreSQL"
                  ]}
                />
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Award className="mr-2" /> Certifications
              </h2>
              <div className="space-y-4">
                <CertificationItem
                  title="Complete Data Science Bootcamp"
                  subtitle="Python & AI"
                />
                <CertificationItem
                  title="Data Analyst & Visualization"
                  subtitle="Job Simulation"
                />
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Tool className="mr-2" /> Position of Responsibilities
              </h2>
              <ul className="space-y-4">
                <ResponsibilityItem
                  period="2022-2025"
                  title="Founder & Core member"
                  organization="GENESIS, GNIT"
                />
                <ResponsibilityItem
                  period="2022-2025"
                  title="President Tech Club"
                  organization="GNIT"
                />
                <ResponsibilityItem
                  period="2023-2025"
                  title="Sports head"
                  organization="Sports Cell, GNIT"
                />
              </ul>
            </section>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ title, company, period, points }: {
  title: string;
  company: string;
  period: string;
  points: string[];
}) => (
  <div className="border-l-2 border-blue-500 pl-4">
    <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    <p className="text-lg text-gray-300">{company}</p>
    <p className="text-gray-400 mb-2">{period}</p>
    <ul className="list-disc list-inside space-y-1 text-gray-300">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold text-blue-400 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CertificationItem = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex items-center space-x-4">
    <Award className="text-blue-400 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-gray-300">{title}</h3>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  </div>
);

const ResponsibilityItem = ({ period, title, organization }: {
  period: string;
  title: string;
  organization: string;
}) => (
  <li className="flex items-start">
    <div className="w-24 flex-shrink-0 text-gray-400">{period}</div>
    <div>
      <h3 className="font-semibold text-gray-300">{title}</h3>
      <p className="text-gray-400">{organization}</p>
    </div>
  </li>
);

export default Resume;