import React, { Component } from "react";
import { savedPosts } from "./posts.json"; // Adjust the path if necessary
import styles from "./Content.module.css"; // Assuming you have a CSS module

class Content extends Component {
  render() {
    return (
      <div className={styles.Content}>
        <div>
          <h1>My Posts</h1>
        </div>
        <div className={styles.SearchResults}>
          {savedPosts.map((post, index) => (
            <div className={styles.SearchItem} key={index}>
              <p>{post.title}</p>
              <p>{post.name}</p>
              <img src={post.image} alt={post.title} />
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
