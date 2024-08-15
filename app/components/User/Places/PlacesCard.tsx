import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface Destination {
  title: string;
  description: string;
  image: string;
  category: "Nature" | "Culture";
}

const destinations: Destination[] = [
  {
    title: "Chombok Ecotourism Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-1.jpg",
    category: "Nature",
  },
  {
    title: "Chombok Ecotourism Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-1.jpg",
    category: "Nature",
  },
  {
    title: "Chombok Ecotourism Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-1.jpg",
    category: "Nature",
  },
  {
    title: "Chiphat Ecotourism Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-1.jpg",
    category: "Nature",
  },
  {
    title: "Koh Dach Cultural Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-2.jpg",
    category: "Culture",
  },
  {
    title: "TaTai Ecotourism Site",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-3.jpg",
    category: "Nature",
  },
  {
    title: "Phnom Aural Wildlife Sanctuary",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-4.jpg",
    category: "Nature",
  },
  {
    title: "Virachey National Park",
    description:
      "Offers a community-managed experience of natural beauty, including lush forests, waterfalls, and cultural immersion, benefiting local villagers directly.",
    image: "destinations-1.jpg",
    category: "Nature",
  },
];

const PlacesCard: React.FC = React.memo(() => {
  useEffect(()=>{
    AOS.init({
      duration: 800,
      once: false,
    })
  })
  return (
    <div className="flex flex-col min-h-screen justify-center px-4 py-8 forum-font">
      <div className="w-full  mb-10 px-8">
        <h1 className="text-3xl font-bold">Popular Destinations</h1>
      </div>
      <div data-aos="fade-left"
          data-delay-aos="200" className="flex flex-wrap gap-6 justify-center">
        {destinations.map(({ title, description, image, category }, index) => (
          <div
            key={`${title}-${index}`}
            className="border border-gray-300 rounded-xl w-72 p-4 text-left shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={image}
              alt={`Image of ${title}`}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full mb-2 ${
                  category === "Nature" ? "bg-green-200 text-green-800" : "bg-purple-200 text-purple-800"
                }`}
              >
                {category}
              </span>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default PlacesCard;
