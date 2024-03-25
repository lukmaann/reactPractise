/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Carousel from "./Components/Courasel";
const App = () => {
  const carouselItems = [
    { imageSrc: "/chicken.jpg", title: 'Chicken' },
    { imageSrc: '/burger.jpg', title: 'Burger' },
    { imageSrc: '/pizza.jpg', title: 'Pizza' },
    { imageSrc: "/bread.jpg", title: 'Bread' },
    { imageSrc: '/rolls.jpg', title: 'Rolls' },
    { imageSrc: '/sandwich.jpg', title: 'Sandwich' },
  ];

  return (
    <div className="App flex justify-center items-center h-[100vh]">
      <Carousel items={carouselItems} />
    </div>
  );
};

export default App;
