import React, { useState } from "react";
import bg from "../images/bg.jpg";
import aris from "../images/aris.png";
import Cvaris from "../file/cv_aris.pdf";
import test from "../images/test.jpg";
// import tasty from "../images/tasty.png";
// import workout from "../images/workout.png";
// import quran from "../images/quran.png";
// import cardlist from "../images/cardlist.png";

export default function LayoutComponent() {
  return (
    <div>
      {/* <BannerComponent /> */}
      <AboutComponent />
      <PortofolioComponent />
      <FooterComponent />
    </div>
  );
}

export function BannerComponent() {
  return (
    <div>
      <div
        className="w-full h-80 bg-gray-600 flex flex-row justify-between px-8 bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="my-auto">
          <p>Hi, Im Aris Trisnawan</p>
          <p>Im Frontend Developer</p>
        </div>
        <div className=" rounded-full">
          <img src={aris} alt="" className=" w-40 h-64 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function AboutComponent() {
  return (
    <div className="flex mobile:flex-col mobile:px-4">
      <div
        className=" mobile:w-full mobile:h-56 bg-zinc-300 bg-center shadow-md"
        style={{ backgroundImage: `url(${aris})` }}
      ></div>
      <div className=" mobile:w-full mobile:h-72 mobile:mt-3 bg-white shadow-lg">
        <div className=" text-justify px-2 py-2">
          <p className="font-medium">
            Hello, my name is Aris Trisnawan, you can call me Aris. I was born
            in Ciamis on August 25, 1998. I am a graduate from Telkom
            University, I graduated in 2021. I am a frontend developer, I
            started learning frontend developer since 2018 and I have some
            experience in several companies.
          </p>
          <div className="mt-4">
            <a
              href={Cvaris}
              download
              className="p-2 bg-green-400 rounded text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortofolioComponent() {
  let [data] = useState(
    {
      id: 1,
      nama: "Tasty Food",
      // gambar: `${tasty}`,
      tools: [
        {
          id: 1,
          nama: "reactjs",
        },
        {
          id: 2,
          nama: "tailwindcss",
        },
      ],
    },
    {
      id: 2,
      nama: "Fitness Landing Page",
      // gambar: `${workout}`,
      tools: [
        {
          id: 1,
          nama: "reactjs",
        },
        {
          id: 2,
          nama: "tailwindcss",
        },
      ],
    },
    {
      id: 3,
      nama: "Alquran Web",
      // gambar: `${quran}`,
      tools: [
        {
          id: 1,
          nama: "reactjs",
        },
        {
          id: 2,
          nama: "tailwindcss",
        },
      ],
    },
    {
      id: 4,
      nama: "Card List",
      // gambar: `${cardlist}`,
      tools: [
        {
          id: 1,
          nama: "reactjs",
        },
        {
          id: 2,
          nama: "tailwindcss",
        },
      ],
    }
  );
  return (
    <div className=" mobile:px-4 mobile:mt-2 mobile:mb-4">
      <div className="bg-white mobile:flex mobile:flex-col mobile:w-full shadow-lg mobile:pb-4">
        <div className="  mobile:px-2 mobile:py-2 font-medium">
          <p>My Portofolio</p>
        </div>
        <div className="mobile:grid mobile:grid-cols-1 mobile:px-2">
          <div className="mobile:w-full bg-white-100 shadow-md mobile:flex mobile:flex-col mobile:mt-3 pb-3">
            <div
              className="mobile:w-full mobile:h-40 bg-cover hover:contrast-100"
              style={{ backgroundImage: `url(${test})` }}
            ></div>
            <div>
              <p className="mobile:mx-1">Halo test ya</p>
              <div className="flex flex-row mobile:mt-2 mobile:space-x-2">
                <span className="mobile:p-0 mobile:px-1 rounded-full bg-blue-400 mobile:space-x-2 mobile:text-sm text-white">
                  #reactjs
                </span>
                <span className="mobile:p-0 mobile:px-1 rounded-full bg-blue-400 mobile:space-x-2 mobile:text-sm text-white">
                  #tailwindcss
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FooterComponent() {
  return (
    <div className="bg-zinc-100 mobile:w-full">
      <div className="flex flex-col justify-center mobile:py-6">
        <div className="mx-auto">
          <p>Contact me :</p>
        </div>
        <div className="mx-auto">
          <div className="flex flex-row space-x-2">
            <span>Wa</span>
            <span>Github</span>
            <span>Linkdin</span>
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}
