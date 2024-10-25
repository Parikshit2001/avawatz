import React from "react";

function Video() {
  return (
    <video
      className="rounded"
      poster="/images/avawatz.webp"
      controls
      width="700"
      height={500}
    >
      <source src="/videos/avawatz.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
