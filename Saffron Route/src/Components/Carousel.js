import { useState,useEffect} from 'react';


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://media-cdn.tripadvisor.com/media/photo-s/16/37/32/58/img-20190124-wa0003-largejpg.jpg',
    'https://asiagracircle.in/img/TM1.jpg',
    'https://cdn.britannica.com/74/127174-050-4E634E93/Victoria-Memorial-Hall-Kolkata-India-West-Bengal.jpg',
    'https://static.newstrack.com/h-upload/2024/04/25/1714647-tribal-museum-img0050res.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/22/Parol_Himalayan_Village_gate.JPG',
    'https://media.assettype.com/freepressjournal/2023-08/09fb20b6-98ed-40c2-a391-99eabdef5896/ANI_20221122093635.avif',
    'https://images.moneycontrol.com/static-mcnews/2023/09/national-770x385.jpg?impolicy=website&width=770&height=431',
    'https://kolkatatourism.travel/images/places-to-visit/headers/indian-museum-kolkata-entry-fee-timings-holidays-reviews-header.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);


  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;