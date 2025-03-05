import React, { Component } from "react";
import { savedPosts } from "./posts.json"; // Import posts.json
import PostItem from "./PostItem"; // Import PostItem component
import "./Content.module.css"; // Import CSS file

class Content extends Component {
  render() {
    return (
      <div>
        <h1>My Posts</h1>
        <div className="SearchResults">
          <PostItem posts={savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content;
