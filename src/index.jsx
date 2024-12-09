import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../public/styles.css'; // Correct the path and filename
import Cards from './Cards';
import ContentLabel from './ContentLabel';
import UserBar from './UserMenu';

const App = () => {
  const [visibleLabel, setVisibleLabel] = useState(null);

  const firstContentLabelData = {
    imageSrc: "public/icons/Kavej.png", // Example image
    heartImageSrc: "public/icons/Heart.png", // Heart icon image
    blockImageSrc: "public/icons/block.png", // Block icon image
    mapImageSrc: "public/icons/Map.png", // Map icon image
    mainText: "Kávej",
    subText: "Ihrisko Hajtovka",
    timeText: "20:00 | 18.11.2024",
  };

  const secondContentLabelData = {
    imageSrc: "public/icons/Goral.png", // Example image
    heartImageSrc: "public/icons/Heart.png", // Heart icon image
    blockImageSrc: "public/icons/block.png", // Block icon image
    mapImageSrc: "public/icons/Map.png", // Map icon image
    mainText: "Goraľ festival",
    subText: "Červený kláštor",
    timeText: "18:00 | 16.08.2024",
  };

  const thirdContentLabelData = {
    imageSrc: "public/icons/Kolackov.png", // Example image
    heartImageSrc: "public/icons/Heart.png", // Heart icon image
    blockImageSrc: "public/icons/block.png", // Block icon image
    mapImageSrc: "public/icons/Map.png", // Map icon image
    mainText: "Zábava Kolačkov",
    subText: "KD Kolačkov",
    timeText: "21:00 | 20.12.2024",
  };

  const firstCardData = [
    {
      title: "Zábava Kolačkov",
      body: "Ľudová zábava v podaní miestnej hudobnej skupiny Kolačkovaské trio",
      image: "https://via.placeholder.com/160x160",
    },
    {
      title: "Vatra Malý Lipník",
      body: "Už tretí krát po sebe sa vďaka OZ Molody Rusyny usktutoční pálenie vatry v malebnej obci",
      image: "https://via.placeholder.com/160x160",
    },
    {
      title: "Fašianky Forbasy",
      body: "Strašidelné masky , pochovanie basy a šišky toto a všetko v obci Forbasy",
      image: "https://via.placeholder.com/160x160",
    },
  ];

  const secondCardData = [
    {
      title: "Kávej - Film",
      body: "Letový hit Kávej , ktorý si podmanil celé východné Slovensko sa  vracia na plátna a to v dedine Hajtovka",
      image: "https://via.placeholder.com/160x160",
    },
    {
      title: "Goraľ Festival",
      body: "Festival Goral už po 12 krát sa vám predstavia bratia Kolárovci ako hlavný frontmani večera",
      image: "https://via.placeholder.com/160x160",
    },
    {
      title: "Dni obce Matysová",
      body: "Dni obce Matysová sú tu a to s bohatým programom pre všetkých miestnych a turistov",
      image: "https://via.placeholder.com/160x160",
    },
  ];

  const handleCardClick = (cardTitle) => {
    setVisibleLabel(null); // Reset visibleLabel to allow re-clicking
    setTimeout(() => {
      if (cardTitle === "Zábava Kolačkov") {
        setVisibleLabel("Zábava Kolačkov");
      } else if (cardTitle === "Kávej - Film") {
        setVisibleLabel("Kávej");
      } else if (cardTitle === "Goraľ Festival") {
        setVisibleLabel("Goraľ festival");
      }
    }, 0);
  };

  return (
    <div>
      <Navbar />
      <Cards cardData={firstCardData} title="TOP 3 AKCIE" handleCardClick={handleCardClick} />
      <Cards cardData={secondCardData} title="AKCIE PRE VÁS" handleCardClick={handleCardClick} />
      {visibleLabel === "Kávej" && (
        <ContentLabel
          imageSrc={firstContentLabelData.imageSrc}
          heartImageSrc={firstContentLabelData.heartImageSrc}
          blockImageSrc={firstContentLabelData.blockImageSrc}
          mapImageSrc={firstContentLabelData.mapImageSrc}
          mainText={firstContentLabelData.mainText}
          subText={firstContentLabelData.subText}
          timeText={firstContentLabelData.timeText}
        />
      )}
      {visibleLabel === "Goraľ festival" && (
        <ContentLabel
          imageSrc={secondContentLabelData.imageSrc}
          heartImageSrc={secondContentLabelData.heartImageSrc}
          blockImageSrc={secondContentLabelData.blockImageSrc}
          mapImageSrc={secondContentLabelData.mapImageSrc}
          mainText={secondContentLabelData.mainText}
          subText={secondContentLabelData.subText}
          timeText={secondContentLabelData.timeText}
        />
      )}
      {visibleLabel === "Zábava Kolačkov" && (
        <ContentLabel
          imageSrc={thirdContentLabelData.imageSrc}
          heartImageSrc={thirdContentLabelData.heartImageSrc}
          blockImageSrc={thirdContentLabelData.blockImageSrc}
          mapImageSrc={thirdContentLabelData.mapImageSrc}
          mainText={thirdContentLabelData.mainText}
          subText={thirdContentLabelData.subText}
          timeText={thirdContentLabelData.timeText}
        />
      )}
      <UserBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));