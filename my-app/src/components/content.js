import React from "react";
import { savedPosts } from "./posts.json";
import PostItem from "./PostItem";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Posts</h1>
      <div className={styles.searchResults}>
        <PostItem posts={savedPosts} />
      </div>
    </div>
  );
};

export default Content;
