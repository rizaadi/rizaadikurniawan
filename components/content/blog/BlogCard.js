import Image from "next/image";
import Tag from "../Tag";

function BlogCard() {
  return (
    <li className="w-full rounded-md border bg-slate-200">
      <a href="" className="block h-full rounded-md border-gray-300">
        <div className="relative">
          {/* Image */}
          <figure
            className="overflow-hidden rounded shadow-sm mx-auto w-full"
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
          <div className="absolute bottom-0 w-full px-4 py-2 mt-2 flex flex-wrap justify-end gap-y-1 gap-x-2 text-sm text-black ">
            <Tag />
            <Tag />
          </div>
          {/* end of tag */}
        </div>
        <div className="p-4">
          <h4 className="text-gray-800">Title post</h4>
          <p className="text-sm text-gray-700">description</p>
        </div>
      </a>
    </li>
  );
}

export default BlogCard;
