import React from "react";
import styles from "./Content.module.css";

const PostItem = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={styles.searchItem}>
          <img src={post.image} alt={post.title} className={styles.image} />
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.name}>{post.name}</p>
          <p className={styles.description}>{post.description}</p>
        </div>
      ))}
    </>
  );
};

export default PostItem;
