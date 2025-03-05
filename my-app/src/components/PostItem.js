import React from "react";

function PostItem({ posts }) {
  return (
    <div>
      {posts.map((post, index) => {
        const { title, name, description, image } = post;
        return (
          <div className="PostItem" key={index}>
            <h2>{title}</h2>
            <h3>{name}</h3>
            <img src={image} alt={title} />
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostItem;
