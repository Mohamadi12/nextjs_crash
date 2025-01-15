import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Nana' },
      description: "This is a description",
      image:
        "https://www.rolandberger.com/img/Tiles/Tile-Content/Roland_Berger-24_2195_Humanoid_robots-ST.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) =>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
