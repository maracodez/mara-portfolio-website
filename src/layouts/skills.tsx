//import React from 'react'

type SkillsProps = {
    skill: string;
    level: number;
};

// eslint-disable-next-line react-refresh/only-export-components
const SkillBar: React.FC<SkillsProps> = ({ skill, level }) => {
    return (
        <div className="mb-4 ">
            <div className="text-2xl font-medium text-gray-700 mb-1">{skill}</div>
            <div className="w-full h-4 bg-gray-300">
                <div 
                    className="h-full bg-black" 
                    style={{ width: `${level}%`}}
                />
            </div>
        </div>
    );
};

const skills: React.FC = () => {
    const MySkills = [
        { skills: 'HTML', level: 90},
        { skills: 'CSS', level: 90},
        { skills: 'JavaScript', level: 85},
        { skills: 'React', level: 98},
        { skills: 'Tailwind CSS', level: 80},
        { skills: 'TypeScript', level: 50},
    ];

  return (
    <div className=" mt-[10%] px-8">
        <h2 className="text-center text-4xl font-semibold mb-6 uppercase">my skills</h2>
        <div className="grid grid-cols-3 gap-4">
            {MySkills.map((s) => (
                <SkillBar key={s.skills} skill={s.skills} level={s.level} />
            ))}
        </div>
    </div>
  );
}

export default skills
