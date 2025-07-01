const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 animate-pulse">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-lg h-60 w-full"></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
