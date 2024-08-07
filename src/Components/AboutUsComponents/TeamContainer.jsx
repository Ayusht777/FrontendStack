import Heading from "@/Components/Shared/Heading";
import { ExternalLink, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";


const SkeletonLoader = () => (
  <div className="w-full h-full rounded-xl bg-Border animate-pulse absolute"></div>
);


const TeamMemberCard = ({ member, isOverlayOpen, toggleOverlay }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="aspect-square rounded-xl bg-Nav pb-2 ">
      <div className="mx-4 mt-4 aspect-square rounded-xl bg-Bg transition-all duration-500 ease-in-out relative">
        {!isImageLoaded && <SkeletonLoader />}
        <img
          className={`h-full w-full rounded-xl absolute transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={member?.imageUrl}
          alt={member?.name}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(false)} // Optionally handle error
        />
        {isOverlayOpen ? (
          <div className="aspect-square rounded-xl absolute z-40 inset-0 bg-Nav/95 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:42px_42px] flex items-center justify-center gap-x-2">
            <a
              href={member?.linkedin}
              target="_blank"
              className="bg-Bg rounded-lg text-blue-500 p-3"
              aria-label={`LinkedIn profile of ${member?.name}`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={member?.github}
              target="_blank"
              className="bg-Bg rounded-lg text-gray-400 p-3"
              aria-label={`GitHub profile of ${member?.name}`}
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        ) : null}
      </div>
      <div className="mx-4 mt-2 flex items-center justify-between">
        <h1 className="font-semibold text-white">{member?.name}</h1>
        <button
          className="rounded-md bg-Border p-1 text-Logo"
          onClick={() => toggleOverlay(member?.id)}
          aria-label={`Social Media Links of ${member?.name}`}
        >
          <ExternalLink strokeWidth="3" />
        </button>
      </div>
    </div>
  )

}

const TeamContainer = () => {
  const teamMembers = [
    {
      id: 1, name: "Ayush Talesara",
      imageUrl: "https://i.postimg.cc/bNndphvQ/Avatar-2.webp",
      linkedin: "https://www.linkedin.com/in/ayush-talesara777/",
      github: "https://github.com/Ayusht777"
    },
    {
      id: 2,
      name: "Divyanshu Sahu",
      imageUrl: "https://i.postimg.cc/Gp2MTzVx/Whats-App-Image-2024-07-16-at-22-44-22-3a4beff5.webp",
      linkedin: "https://www.linkedin.com/in/divyanshu-sahu-820467245/",
      github: "https://github.com/sahu-divyanshu"
    },
    {
      id: 3,
      name: "Harshit Sharma",
      imageUrl: "https://i.postimg.cc/vBy11ST0/Whats-App-Image-2024-07-06-at-10-56-19-bbcb188d.jpg",
      linkedin: "https://www.linkedin.com/in/harshitsharma4/",
      github: "https://github.com/HarshitSharma4"
    },
    {
      id: 4,
      name: "Aarsh Bharti",
      imageUrl: "https://i.postimg.cc/pT0hkGsT/Pics-Art-10-17-05-57-17.jpg",
      linkedin: "https://www.linkedin.com/in/aarsh-bharti-43091b297/",
      github: "https://github.com/aarshbh"
    },
  ];

  const [activeMemberId, setActiveMemberId] = useState(-1);
  useEffect(() => {
    if (activeMemberId === -1) return;

    const timer = setTimeout(() => {
      setActiveMemberId(-1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeMemberId]);

  const toggleOverlay = (memberId) => {
    setActiveMemberId((prevMemberId) => (prevMemberId === memberId ? -1 : memberId));
  };

  return (
    <section className="w-full max-w-[1200px] space-y-16">
      <Heading title="Our Team" />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            isOverlayOpen={activeMemberId === member.id}
            toggleOverlay={toggleOverlay}
          />
        ))}
      </section>
    </section>
  );
};

export default TeamContainer;
