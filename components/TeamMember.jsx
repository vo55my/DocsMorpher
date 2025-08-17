import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMember = ({
  name,
  university,
  image,
  instagram,
  linkedin,
  github,
}) => {
  return (
    <li className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded-full border-2 border-indigo-500"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-indigo-600">{university}</p>
          <div className="flex gap-4 mt-4 justify-center">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TeamMember;
