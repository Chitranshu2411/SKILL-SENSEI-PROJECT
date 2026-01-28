import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Chitranshu Yadav",
    role: "Team lead, AI Lead",
    experience: "Leading AI integration and development.",
    image: "data:image/jpeg;base64,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",
    linkedin: "https://www.linkedin.com/in/chitranshu-yadav"
  },
  {
    name: "Kanika Sharma",
    role: "UI/UX Lead",
    experience: "Designing user-friendly and modern interface.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE5PwzewNgoHw/profile-displayphoto-shrink_400_400/B4DZbIzAu3HQAk-/0/1747125556545?e=1752710400&v=beta&t=siLSG7aVb8w9RD0O_h5r5iraVSoUo_If6W5eNxFUuwA",
    linkedin: "https://www.linkedin.com/in/kanika-sharma-614046243",
  },
  {
    name: "Chahat Kushwaha",
    role: "Frontend Lead",
    experience: "Responsible for building responsive frontend.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE2SLnNEKu5mQ/profile-displayphoto-shrink_400_400/B4DZRCd0MsHwAg-/0/1736281900911?e=1752710400&v=beta&t=VcANK3KDMRZ9DVdAH8JwCninBjj9KE1LyTw1eX4HiHQ",
    linkedin: "https://www.linkedin.com/in/chahat-kushwaha-010930293"
  },
  {
    name: "Harshit Kumar",
    role: "Backend Lead",
    experience: "Manages API development and server logic.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEnvqOmj5ZV1w/profile-displayphoto-shrink_400_400/B4DZbIjEIjHQAg-/0/1747121358502?e=1752710400&v=beta&t=VXRmqPxrzTClNOt5v4SAAIdaLOdW1_ZibjsUg7ePQ4M",
    linkedin: "https://www.linkedin.com/in/harshit-kumar-a58925293"
  },
  {
    name: "Jahid Ansari",
    role: "Research Lead",
    experience: "Handles AI research and data collection.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHz6nqrlXwYTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721568744289?e=1752710400&v=beta&t=ugWOuUbF1Ajrmm3hi2b1SyVn4dWRRi49lBEDyP7N1yU",
    linkedin: "https://www.linkedin.com/in/jahid-ansari-53181a291"
  }
];

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl text-orange-500 font-light leading-relaxed tracking-wide"
      >
        PEOPLE BEHIND SKILLSENSIE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-700 mb-8"
      >
        Meet the skilled and experienced team behind our successful digital strategies
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200 overflow-hidden transform hover:scale-105 hover:shadow-orange-300 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2"
              >
                <div className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-full shadow-md">
                  <span className="text-orange-500 text-xs font-bold">in</span>
                </div>
              </a>
            )}

            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={member.image || "/assets/default.png"}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <hr className="my-3 border-gray-300" />
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
