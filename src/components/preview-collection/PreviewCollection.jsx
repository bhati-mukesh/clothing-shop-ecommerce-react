import "./preview-collection.style.css";
import React from "react";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...otherPreviewProps }) => (
            <CollectionItem key={id} {...otherPreviewProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
