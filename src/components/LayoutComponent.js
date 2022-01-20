import React, { useState } from "react";
import bg from "../images/bg.jpg";
import aris from "../images/aris.png";
import Cvaris from "../file/cv_aris.pdf";
import tasty from "../images/tasty.PNG";
import workout from "../images/workout.PNG";
import quran from "../images/quran.PNG";
import cardlist from "../images/cardlist.PNG";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";

export default function LayoutComponent() {
  return (
    <div>
      <BannerComponent />
      <AboutComponent />
      <PortofolioComponent />
      <FooterComponent />
    </div>
  );
}

export function BannerComponent() {
  return (
    <div className="mobile:px-4 mb-3 tablet:px-0">
      <div
        className="mobile:w-full mobile:h-56 bg-zinc-300 bg-cover flex mobile:flex-col mobile:px-4 tablet:flex-row tablet:justify-between tablet:h-96 laptop:h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="my-auto mobile:mx-auto tablet:mx-0">
          <p className="text-white text-xl font-semibold laptop:font-bold laptop:text-3xl">
            Hi, Im <span className="font-bold laptop:font-extrabold">Aris</span>{" "}
            Trisnawan
          </p>
          <p className="text-white text-xl font-semibold laptop:text-2xl laptop:font-bold">
            Im Frontend Developer
          </p>
        </div>
        <div className="rounded-full mobile:hidden tablet:block my-auto">
          {/* <img src={aris} alt="" className=" w-40 h-64 rounded-full" /> */}
          <div
            className="tablet:w-48 tablet:h-48 rounded-full bg-blue-700 bg-center opacity-50 drop-shadow-2xl"
            style={{ backgroundImage: `url(${aris})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function AboutComponent() {
  return (
    <div className="mobile:px-4 laptop:py-7">
      <p className="font-medium pb-2">About me</p>
      <div className="flex mobile:flex-col tablet:flex-row tablet:space-x-3 laptop:space-x-7">
        <div
          className=" mobile:w-full mobile:h-56 bg-zinc-300 bg-center shadow-md tablet:my-auto tablet:rounded-md tablet:w-50 tablet:h-72 tablet:drop-shadow-xl laptop:bg-no-repeat"
          style={{ backgroundImage: `url(${aris})` }}
        ></div>
        <div className=" mobile:w-full mobile:h-72 mobile:mt-3 bg-white drop-shadow-lg tablet:drop-shadow-lg">
          <div className=" text-justify px-2 pt-2 tablet:px-8 tablet:pt-5 laptop:px-20">
            <p className="font-medium">
              Hello, my name is Aris Trisnawan, you can call me Aris. I was born
              in Ciamis on August 25, 1998. I am a graduate from Telkom
              University, I graduated in 2021. I am a frontend developer, I
              started learning frontend developer since 2018 and I have some
              experience in several companies.
            </p>
            <div className="mt-5">
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
    </div>
  );
}

export function PortofolioComponent() {
  let [data] = useState({
    porto: [
      {
        id: 1,
        nama: "Tasty Food",
        gambar: `${tasty}`,
        url: "https://tasty-food-kappa.vercel.app/",
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
        gambar: `${workout}`,
        url: "https://fitness-landing-page.vercel.app/",
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
        gambar: `${quran}`,
        url: "https://quran-web-zeta.vercel.app/",
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
        gambar: `${cardlist}`,
        url: "https://tailwind-cardlist.vercel.app/",
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
    ],
  });
  return (
    <div className=" mobile:px-4 mobile:mt-2 mobile:mb-4">
      <div className="bg-white flex flex-col mobile:w-full shadow-lg mobile:pb-4">
        <div className="  mobile:px-2 mobile:py-2 font-medium">
          <p>My Portofolio</p>
        </div>
        <div className="grid mobile:grid-cols-1 mobile:px-2 tablet:grid-cols-3 tablet:gap-2 laptop:gap-5">
          {data.porto.map((items) => {
            return (
              <div key={items.id}>
                <a href={items.url} target="_blank">
                  <div className="mobile:w-full bg-white-100 shadow-md mobile:flex mobile:flex-col mobile:mt-3 pb-3 tablet:h-60 hover:opacity-75 laptop:h-72">
                    <div
                      className="mobile:w-full mobile:h-40 bg-cover hover:contrast-100 flex"
                      style={{ backgroundImage: `url(${items.gambar})` }}
                    >
                      <p className="my-auto mx-auto p-5 hover:opacity-100 opacity-50">
                        Mata
                      </p>
                    </div>
                    <div>
                      <p className="mobile:mx-1 laptop:mx-3 laptop:mt-5 font-semibold">
                        {items.nama}
                      </p>
                      <div className="flex flex-row mobile:mt-2 mobile:space-x-2">
                        {items.tools.map((tool) => {
                          return (
                            <div key={tool.id} className="mobile:ml-2">
                              <span className="mobile:p-0 mobile:px-1 rounded-full bg-blue-400 mobile:space-x-3 mobile:text-sm text-white">
                                <span>#</span>
                                {tool.nama.toLowerCase()}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FooterComponent() {
  return (
    <div className="bg-zinc-100 mobile:w-full">
      <div className="flex flex-col justify-center mobile:py-6">
        <div className="mx-auto font-medium">
          <p>Contact me :</p>
        </div>
        <div className="mx-auto mt-3">
          <div className="flex flex-row space-x-4 ">
            <div>
              <a href="https://github.com/aristrisnawan" target="_blank">
                <img src={github} className="mobile:w-7" alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aris-trisnawan-657776193"
                target="_blank"
              >
                <img src={linkedin} className="mobile:w-7" alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aristrisnawan35@gmail.com&su=Hai&body="
                target="_blank"
              >
                <img src={gmail} className="mobile:w-7" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
