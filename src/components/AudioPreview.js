import { useState } from "react";

export default function AudioPreview({ item, PlayItem }) {
  return (
    <li className="content-preview">
      <div
        className="content-preview-img"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <h1 className="content-preview-img-duration">{item.duration}</h1>
      </div>
      <div className="content-preview-play" onClick={() => PlayItem(item)}>
        <ion-icon
          name={`${item.playing ? "pause" : "play"}-outline`}
        ></ion-icon>
      </div>
      <div className="content-preview-info">
        <h2>{item.title}</h2>
        <h3>{item.author}</h3>
      </div>
    </li>
  );
}
