import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full bg-white text-black">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg text-black">Software Engineer | Cloud & AI Specialist</span>
            <h1 className="text-2xl xl:text-5xl mb-6 text-black">
              Hello, I'm <br /> <span className="text-blue-500">Pravallika Dindukurthi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 text-justify">
              Passionate about solving complex problems with technology. Experienced in cloud computing, AI/ML, and big data processing. I architect scalable solutions and turn data into insights that drive impact. Let’s build something amazing together!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume.pdf"
                download
                className="uppercase flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0 flex justify-center">
                <Social
                  containerStyles="flex gap-6 justify-center"
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Pravallika Dindukurthi
      </footer>
    </section>
  );
};

export default Home;
