import React, { Component } from "react";
import { savedPosts } from "./posts.json"; // Adjust the path if necessary
import styles from "./Content.module.css"; // Assuming you have a CSS module
import PostItem from "./PostItem"; // Import the PostItem component

class Content extends Component {
  render() {
    return (
      <div className={styles.Content}>
        <div>
          <h1>My Posts</h1>
        </div>
        <div className={styles.SearchResults}>
          <PostItem posts={savedPosts} /> {/* Pass posts as a prop */}
        </div>
      </div>
    );
  }
}

export default Content;
    
