import React, { useState } from "react";
import "../public/ContentLabel.css";

const ContentLabel = ({
  imageSrc,
  heartImageSrc,
  blockImageSrc,
  mapImageSrc,
  mainText,
  subText,
  timeText,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (imageName) => {
    console.log(`${imageName} clicked`);
    setIsVisible(false);
  };

  // Return null if visibility is set to false
  if (!isVisible) {
    return null;
  }

  return (
    <div className="plagat-container">
      <img
        className="plagat-image"
        src={imageSrc} // Dynamic image source
        alt={mainText} // Dynamic alt text
      />
      <img
        className="heart-image"
        src={heartImageSrc} // Dynamic heart image source
        alt="Heart"
        onClick={() => handleClick('Heart')}
      />
      <img
        className="block-image"
        src={blockImageSrc} // Dynamic block image source
        alt="Block"
        onClick={() => handleClick('Block')}
      />
      <h3 className="plagat-info1">{mainText}</h3> {/* Dynamic main text */}
      <h3 className="plagat-info2">{subText}</h3>   {/* Dynamic sub text */}
      <h3 className="plagat-info3">{timeText}</h3>   {/* Dynamic time text */}

      <img
        className="map-image"
        src={mapImageSrc} // Dynamic map image source
        alt="Map"
      />
    </div>
  );
};

export default ContentLabel;
