"use client";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import GlobalApi from "@/app/_utils/GlobalApi";
import PlacesCard from "../Places/PlacesCard";

const Hero = () => {
  const t = useTranslations("CheckIndates");
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const fetchVideo = async () => {
      try {
        const response = await GlobalApi.getBannerVideo();
        const videoData = response.data.data; // Ensure this matches the API response structure
        if (videoData && videoData.attributes && videoData.attributes.url) {
          setVideoUrl(videoData.attributes.url);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div>
      <div className="h-[700px] relative">
        {videoUrl ? (
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          <div>Loading video...</div>
        )}
        <div
          data-aos="fade-up"
          data-delay-aos="200"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="content forum-font">
            <h5>BorPort</h5>
            <h1>Let's embark on your dream journey</h1>
            <p>
              discover inspiring destinations, create unforgettable memories,
              and travel with confidence - adventure starts here
            </p>
            <div className="bg-white rounded-full shadow-lg flex items-center">
              <div className="flex items-center flex-grow px-6 py-3 border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="flex-grow focus:outline-none text-lg"
                />
              </div>
              <button className="px-6 py-3 border-r hover:bg-gray-100 transition duration-300 hover:rounded-full">
                {t("check")}
              </button>
              <button className="px-6 py-3 border-r hover:bg-gray-100 transition duration-300 hover:rounded-full">
                Check-out dates
              </button>
              <button className="px-6 py-3 hover:bg-gray-100 transition duration-300 hover:rounded-full">
                Guest Number
              </button>
            </div>
          </div>
        </div>
      </div>
      <PlacesCard />
      <Category />
    </div>
  );
};

export default Hero;
