"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiNumpy,
  SiPostman,
  SiDatabricks,
  SiVisualstudio,
  SiAnaconda,
  SiAzuredevops,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiMongodb,
  SiBootstrap,
  SiApachespark,
  SiMysql,
  SiApachekafka,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTerraform,
  SiKubernetes,
  SiSnowflake,
  SiHive,
  SiElasticsearch,
  SiOpencv,
  SiFastapi,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
} from "react-icons/si";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "A journey of innovation and problem-solving in software engineering, cloud computing, and AI/ML.",
  items: [
    {
      company: "IBM, India",
      position: "Software Engineer",
      duration: "August 2021 – July 2023",
      responsibilities: [
        "Developed and optimized IBM Cloud Code Engine, a serverless platform for deploying containerized workloads.",
        "Built scalable microservices and integrated managed cloud services to enhance system functionality and deployment efficiency.",
        "Automated CI/CD pipelines with Concourse CI and Tekton, improving system reliability and infrastructure management.",
        "Performed on-call duties, troubleshooting production issues, and deploying microservices to maintain seamless operations.",
        "Authored technical blogs, driving engagement by showcasing cloud deployment strategies and best practices."
      ],
    },
    {
      company: "IBM, India",
      position: "Software Engineer Intern",
      duration: "January 2021 - August 2021",
      responsibilities: [
        "Designed and developed an AI-driven travel platform, integrating IBM Watson Assistant for intelligent chatbot interactions and IBM Sterling OMS for automated order management and fulfillment.",
        "Implemented machine learning models (Random Forest, XGBoost) on IBM Cloud Pak for Data, providing personalized travel recommendations.",
        "Built a frontend interface using HTML, CSS, and JavaScript, enabling seamless user interaction with the chatbot and a shopping workflow.",
        "Integrated webhooks for real-time communication between the chatbot, shopping workflows, and backend systems, ensuring dynamic updates.",
        "Developed an order fulfillment pipeline within IBM Sterling OMS, utilizing Java to automate order capture, scheduling, and shipment tracking.",
        "Processed and analyzed a 30,000+ record dataset to derive actionable insights, leveraging advanced preprocessing and feature engineering techniques."
      ],
    },
    {
      company: "Accenture, India",
      position: "Software Engineer",
      duration: "April 2020 – July 2020",
      responsibilities: [
        "Architected and deployed a secure big data solution by setting up a Hadoop cluster integrated with Azure HDInsight and Azure Data Factory for streamlined data processing.",
        "Built and optimized an ETL pipeline to extract, transform, and load structured data from SQL databases into HDFS using Sqoop, ensuring seamless data integration.",
        "Designed advanced data masking techniques with custom Hive User-Defined Functions (UDFs) and implemented robust encryption protocols (SHA, AES) to safeguard sensitive data.",
        "Enhanced organizational compliance by mitigating data exposure risks while providing secure, controlled access to transformed data for testing and database administration.",
        "Overcame technical challenges in cluster setup and pipeline execution, delivering a reliable and efficient data processing environment.",
        "Delivered a high-performance solution that reduced security risks, improved compliance, and ensured the secure handling of critical enterprise data."
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "A strong foundation in computer science with a focus on AI/ML and cloud computing.",
  items: [
    {
      institution: "University at Buffalo, SUNY",
      degree: "Master of Science in Computer Science (AI/ML Specialization)",
      duration: "August 2023 - December 2024",
    },
    {
      institution: "SASTRA University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2017 - June 2021",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Expertise in cloud computing, big data processing, AI/ML, and DevOps technologies.",
  categories: [
    {
      title: "Cloud Technologies",
      skills: [
        { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiMicrosoftazure />, name: "Azure" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiPrometheus />, name: "Prometheus" },
        { icon: <SiGrafana />, name: "Grafana" },
        { icon: <SiAnsible />, name: "Ansible" },
        { name: "VPC" },
        { name: "Load Balancers" },
        { name: "DNS" },
        { name: "NewRelic" },
        { name: "ELK Stack" },
        { name: "CI/CD" },
        { name: "Istio" },
        { name: "Knative" },
      ],
    },
    {
      title: "Programming Languages & Scripting",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaGitAlt />, name: "Golang" },
        { icon: <FaLinux />, name: "Shell Scripting" },
      ],
    },
    {
      title: "Databases & OS",
      skills: [
        { icon: <FaDatabase />, name: "IBM Db2" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaWindows />, name: "Windows" },
      ],
    },
    {
      title: "Big Data & Tools",
      skills: [
        { icon: <SiApachespark />, name: "Apache Spark" },
        { icon: <SiApachekafka />, name: "Apache Kafka" },
        { icon: <SiHive />, name: "Hive" },
        { icon: <SiSnowflake />, name: "Snowflake" },
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: [
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiKeras />, name: "Keras" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiPandas />, name: "Pandas" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { icon: <SiOpencv />, name: "OpenCV" },
        { icon: <SiFastapi />, name: "FastAI" },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-white text-black"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="experience-grid">
                    <li className="experience-item bg-[#e5e7eb] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-blue-500">{experience.items[0].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[0].position}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[0].company}</p>
                      </div>
                      <div className="text-black/60">
                        <p>{experience.items[0].responsibilities[0]}</p>
                        <p className="mt-4 mb-2">{experience.items[0].responsibilities[1]}</p>
                        <ul className="list-disc ml-5">
                          {experience.items[0].responsibilities.slice(2).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li className="experience-item bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-blue-500">{experience.items[1].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[1].position}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[1].company}</p>
                      </div>
                    </li>
                    <li className="experience-item bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-blue-500">{experience.items[2].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[2].position}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[2].company}</p>
                      </div>
                    </li>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-blue-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-black/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                {skills.categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="bg-white border border-gray-300 p-4 rounded text-center">
                          {skill.icon && <div className="mx-auto text-4xl">{skill.icon}</div>}
                          <p className="mt-2">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
