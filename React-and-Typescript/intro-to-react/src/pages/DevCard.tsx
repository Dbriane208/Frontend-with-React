type SkillsProp = {
    skill: string,
    colorClass: string
}

const Skills = [ "Andorid 💻", "ML/AI 🤖", "Python 🛠️", "Typescript 🌟", "React ✅", "Express 🔧", "Node 🚀", "Kotlin 💫", "Java ☕"];
const backgroundColors = ["bg-orange-500", "bg-blue-500", "bg-green-500", "bg-purple-500"];

export function DevCard() {
    return (
        <div className="flex flex-col w-96 justfiy-start items-start border-4 border-black">
            <img src="random.jpeg" alt="profile" className="size-full"/>
            <h2 className="text-2xl font-bold mt-5 mx-4 text-transform: uppercase">John Doe</h2>
            <p className="text-balance text-wrap my-4 mx-4">Passionate and versatile developer skilled in Android development, machine learning,
               backend, and frontend development. Proficient in building dynamic, user-focused mobile
               applications, developing robust server-side architectures, and implementing intuitive,
               responsive web interfaces. Experienced in leveraging machine learning to drive intelligent 
               features, with a focus on creating impactful, seamless digital experiences across platforms.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-5 ms-0">
            {Skills.map((skill, index) => (
                <Skill key= {index} skill={skill} colorClass={backgroundColors[index % backgroundColors.length]}/>
            ))}
            </div>
        </div>
    );
}

function Skill({skill, colorClass}: SkillsProp) {
    return (
        <div className={`${colorClass} border rounded-lg px-2 ml-4 text-center text-xs inline-block `}>
            <h2>{skill}</h2>
        </div>
    );
}