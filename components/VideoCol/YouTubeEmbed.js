import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId, height, autoplay, mute }) => (
  <div>
    <iframe
      className="rounded-md"
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay}&mute=${mute}&enablejsapi=1`}
      frameBorder="0"
      allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
