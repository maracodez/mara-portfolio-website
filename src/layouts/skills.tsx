import { motion } from "framer-motion";

type SkillProps = {
  skill: string;
  level: number;
};

// Individual Skill Bar
const SkillBar: React.FC<SkillProps> = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="text-xl font-medium text-gray-700 mb-1">{skill}</div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

// Skills Section
const Skills: React.FC = () => {
  const mySkills = [
    { skill: "HTML", level: 90 },
    { skill: "CSS", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "React", level: 98 },
    { skill: "Tailwind CSS", level: 80 },
    { skill: "TypeScript", level: 50 },
  ];

  return (
    <section id="skill" className="px-6 md:px-12 py-16 bg-white">
      <h2 className="text-center text-4xl font-bold uppercase text-indigo-700 mb-10">
        My Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-indigo-700 text-[2rem]">
        {mySkills.map((s) => (
            <SkillBar 
                key={s.skill} 
                skill={s.skill} 
                level={s.level} 
            />
        ))}
      </div>
    </section>
  );
};

export default Skills;
