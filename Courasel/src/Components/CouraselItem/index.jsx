/* eslint-disable react/prop-types */

const CarouselItem = ({ imageSrc, title, isActive }) => (
    <div className={`flex-none w-52 transition-transform duration-300 ease-in-out transform border border-orange-200 ${isActive ? 'scale-110 border-2 z-10 border-orange-500 ' : ''} shadow-lg`}>
      <img src={imageSrc} alt={title} className="w-full h-[50%] object-cover "/>
      <div className="p-4 flex items-center flex-col justify-center">
        <h5 className="text-lg font-semibold">{title}</h5>
        <button className="mt-4 mx-auto py-2 px-4 bg-orange-500 text-white rounded-lg">Add to cart</button>
      </div>
    </div>
  );
  
  export default CarouselItem;