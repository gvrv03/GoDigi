import React from "react";
import { getAllBlogsURL, getSingleURL } from "../../allLinks";
import BlogCard from "./BlogCard";
import BlogsHeader from "./BlogsHeader";
import Pegination from "./UtilityComponents/Pegination";

export async function generateMetadata({ searchParams }) {
  // fetch data
  const data = await fetch(getSingleURL + searchParams?.ID).then((res) =>
    res.json()
  );

  const { title, category, keywords, description, image, author, _id } = data
    ? data
    : {};

  let metatitle = title?.replaceAll(" ", "_");
  return {
    title: title,
    description: description,
    author: author,
    keywords: keywords,
    category: category,
    images: [image],
    url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      author: author,
      keywords: keywords,
      category: category,
      images: [image],
      url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    },
    openGraph: {
      title: title,
      description: description,
      author: author,
      keywords: keywords,
      category: category,
      images: [image],
      url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
export default async function AllBlogs({ page, setpage }) {
  const res = await fetch(getAllBlogsURL + `?page=${page}&limit=8`);
  const { blogs, totalPages } = await res?.json();

  if (blogs === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {blogs?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Blogs Found
        </div>
      )}
      <BlogsHeader />
      <section className="mt-[141px]  grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {blogs &&
          blogs?.map((i, index) => {
            return (
              <BlogCard
                key={index}
                fullTitle={i?.title}
                title={i?.title.substring(0, 32) + "..."}
                category={i?.category}
                description={i?.description.substring(0, 60) + "..."}
                image={i?.image}
                id={i?._id}
                views={i?.views}
              />
            );
          })}
      </section>
      <Pegination page={page} totalPages={totalPages} setpage={setpage} />
    </>
  );
}
