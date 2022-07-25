import Image from "next/image";
import Tag from "../Tag";

function BlogCard({title, desc}) {
  return (
    <li className="w-full border rounded-md bg-slate-200">
      <a href="" className="block h-full border-gray-300 rounded-md">
        <div className="relative">
          {/* Image */}
          <figure
            className="w-full mx-auto overflow-hidden rounded shadow-sm"
            style={{ maxWidth: 400 }}
          >
            <div
              style={{
                position: "relative",
                height: 0,
                paddingTop: `${(120 / 400) * 100}%`,
              }}
            >
              <div className="absolute top-0 left-0">
                <Image
                  width={400}
                  height={120}
                  alt="test"
                  src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                />
              </div>
            </div>
          </figure>
          {/* end of image */}
          {/* Tag */}
          <div className="absolute bottom-0 flex flex-wrap justify-end w-full px-4 py-2 mt-2 text-sm text-black gap-y-1 gap-x-2 ">
            <Tag />
            <Tag />
          </div>
          {/* end of tag */}
        </div>
        <div className="p-4">
          <h4 className="text-gray-800">{title}</h4>
          <p className="mt-4 mb-2 text-sm font-semibold">19 Mei 2020</p>
          <p className="text-sm text-gray-700">{desc}</p>
        </div>
      </a>
    </li>
  );
}

export default BlogCard;
