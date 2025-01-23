import React from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { Trophy, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Hello, I'm Baljinder Singh
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Data Scientist and AI/ML enthusiast based in Delhi, India. 
              Currently working on advancing defense technologies through AI at DRDO.
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="mr-2" /> Experience
            </h2>
            <div className="space-y-8">
              <ExperienceCard
                title="AI/ML Intern"
                company="Defence Research and Development Organisation (DRDO)"
                period="Jan, 2025 - Present"
                description="Working on Generative AI applications for defense technologies and solutions."
              />
              <ExperienceCard
                title="AI/ML Intern"
                company="Bharat Electronics Limited (BEL)"
                period="Sep, 2024 - Dec, 2024"
                description="Developed predictive models with 85%+ accuracy for the SUPER SCADA system."
              />
              <ExperienceCard
                title="Data Scientist | Management"
                company="Fleetrr Online Services"
                period="Feb, 2023 - Aug, 2024"
                description="● Engineered machine learning models that reduced inventory errors by 30% using regression, time-series forecasting, and
                               anomaly detection.
                             ● Conducted statistical analysis with Python (Pandas, NumPy, Matplotlib), uncovering actionable insights that improved
                               decision-making by 25%.
                             ● Automated 10+ KPIs using Python-based dashboards and data pipelines, enabling real-time monitoring and progress
                               tracking across teams.
                            ● Worked with cross-functional teams to streamline resource allocation, automate workflows, and boost operational
                               efficiency"
              />
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-gray-600">GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY</p>
              <p className="text-gray-500">2021-2025 • CGPA: 8.47</p>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Trophy className="mr-2" /> Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementCard
                title="BEL Recognition"
                description="Developed a high-performing ridership prediction model with accuracy of 85%+ for the SUPER SCADA system at Bharat
                             Electronics Limited (BEL), selected for deployment in the production environment by BEL."
              />
              <AchievementCard
                title="Event Management"
                description="Led a team of 10 to organize a memorable farewell event for 500+ attendees and played a key role as a core member of
                             Techfest, showcasing strategic planning, effective issue resolution, and seamless resource coordination, all while
                             managing a 100k budget."
              />
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, period, description }: {
  title: string;
  company: string;
  period: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-blue-600 font-medium">{company}</p>
    <p className="text-gray-500 mb-2">{period}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AchievementCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;