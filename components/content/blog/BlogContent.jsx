function BlogContent({ title, desc }) {
  return (
    <li>
      <a href="">
        <div className="pb-9">
          <p className="text-gray-700 dark:text-white">June 6, 2021 • 5 mins reading time</p>
          <h1 className="mt-2">{title}</h1>
          <p className="mt-3 ">{desc}</p>
          <p className="mt-4">READ MORE</p>
        </div>
      </a>
    </li>
  );
}

export default BlogContent;
