import React from "react";
import styles from "./PostItem.module.css";

const PostItem = ({ posts }) => {
  return (
    <>
      {posts.map(({ id, title, name, image, description }) => (
        <div key={id} className={styles.postItem}>
          <h2>{title}</h2>
          <p>
            <strong>Author:</strong> {name}
          </p>
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
      ))}
    </>
  );
};

export default PostItem;
