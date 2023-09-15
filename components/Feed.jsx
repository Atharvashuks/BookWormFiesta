"use client";

import { useState, useEffect } from "react";

import Card from "./Card";

const CardList = ({ data, handleTagClick, handleTitleClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Card
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          handleTitleClick={handleTitleClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();
      setPosts(data);
    };

    fetchPost();
  }, []);

  const filterPosts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.name) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tname) => {
    setSearchText(tname);
    const searchedResult = filterPosts(tname);
    setSearchedResults(searchedResult);
  };

  const handleTitleClick = (name) => {
    setSearchText(name);
    const searchedResult = filterPosts(name);
    setSearchedResults(searchedResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Sarch for tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <CardList
          data={searchedResults}
          handleTagClick={handleTagClick}
          handleTitleClick={handleTitleClick}
        />
      ) : (
        <CardList
          data={posts}
          handleTagClick={handleTagClick}
          handleTitleClick={handleTitleClick}
        />
      )}
    </section>
  );
};

export default Feed;
