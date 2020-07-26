import React from "react";

const VideoEmbed = () => {
  return (
    <iframe
      style={{ width: "100%", marginTop: "8vh", height: "80vh" }}
      title="video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0nHSgqRH_DY"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

export default VideoEmbed;
