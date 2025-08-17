import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";

const About = () => {
  const teamData = [
    {
      name: "Dhaifullah Hilmy",
      university: "Universitas Pasundan",
      image: "/about/Hilmy.webp",
      instagram: "https://www.instagram.com/si_hilmy/",
      linkedin: "https://www.linkedin.com/in/dhaifullah-hilmy/",
      github: "https://www.github.com/vo55my",
    },
    {
      name: "Lutfiyah Wulan Kamilah",
      university: "Universitas Gunadarma",
      image: "/about/Wulan.webp",
      instagram: "https://www.instagram.com/lutfiwukaa/",
      linkedin: "https://www.linkedin.com/in/lutfiwuka",
      github: "https://github.com/lutfiwuka",
    },
    {
      name: "Maulana Ihsan",
      university: "Universitas Telkom",
      image: "/about/Ihsan.webp",
      instagram: "https://www.instagram.com/ikhsan_x42/",
      linkedin: "https://www.linkedin.com/in/maulanaihsan4/",
      github: "https://github.com/Maulanaikh",
    },
    {
      name: "Rivalda Fatah Rachman",
      university: "Universitas Komputer Indonesia",
      image: "/about/Rivalda.webp",
      instagram: "https://www.instagram.com/rivalda_fatah/",
      linkedin: "https://www.linkedin.com/in/rivalda-fatah/",
      github: "https://github.com/rivaldafatah",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-indigo-50 to-white flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col justify-center items-center py-20 sm:py-28">
          <section className="w-full max-w-6xl px-6 lg:px-8 mt-5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About Us
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              Docsmorpher is a platform dedicated to simplifying document
              management and transformation. Our mission is to provide
              innovative tools that help users efficiently handle their
              documents with ease and precision.
            </p>
            <div className="mt-12">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Meet Our Team
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
              <ul
                role="list"
                className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {teamData.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
