import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaYoutube, FaLinkedinIn,FaTwitter,FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "AI/ML Enthusiast.","Cloud/Devops Learner."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Avinav Kashyap</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
            Fresh perspective and hunger to learn keeps me going .Keen interest in learning technologies related to Web-Development, Machine Learning And Gen-AI ,DEVOPS. Looking to build and collaborating on
          inspiring projects . 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@AVINAVKASHYAPpersonal/about" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/avinav-kashyap-826422249/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            
            <a
              href="https://twitter.com/AvinavKashyap2"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://github.com/Avinav-kashyap"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
