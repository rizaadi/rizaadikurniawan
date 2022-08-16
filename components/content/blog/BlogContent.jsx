import dayjs from "dayjs";
import Link from "next/link";

function BlogContent({ slug, title, desc, publishedAt, readingTime }) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <li>
          <div className="pb-9">
            <p className="text-gray-700 dark:text-white">
              {/* June 6, 2021 • 5 mins reading time */}
              {dayjs(publishedAt).format("MMMM D YYYY")} &mdash; {readingTime}
            </p>
            <h1 className="mt-2">{title}</h1>
            <p className="mt-3 ">{desc}</p>
            <p className="mt-4">READ MORE</p>
          </div>
        </li>
      </a>
    </Link>
  );
}

export default BlogContent;
