import Image from "next/image";
import TechIcons from "../TechIcons";
function ProjectCard({ title, desc }) {
  return (
    <li className="border rounded-xl md:w-full">
      <figure className="w-full overflow-hidden rounded-t-xl">
        <div className="">
          <Image
            layout="responsive"
            src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            width={400}
            height={200}
            alt="test"
          />
        </div>
      </figure>
      <a href="" className="flex flex-col items-start h-full p-4">
        <div className="">
          <TechIcons techs={["react", "tailwindcss", "nextjs"]} />{" "}
          {/* List Icons */}
        </div>
        <h4 className="mt-2">{title}</h4>
        <p className="mb-auto text-sm ">{desc}</p>
      </a>
    </li>
  );
}

export default ProjectCard;
