import { REST_IMG } from "../../Util/contains";
const Rescard = ({ resdata }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 re-cards">
      <img
        src={REST_IMG + resdata?.cloudinaryImageId}
        alt={resdata.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{resdata.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {resdata.cuisines.join(", ")}
        </p>

        <div className="text-sm mb-2">
          <strong>Price</strong>
          <span>: ₹230/-</span>
        </div>

        <h4 className="text-yellow-600 font-bold">{resdata.avgRating} ⭐</h4>
      </div>
    </div>
  );
};

export const isPromoted = (Rescard) => {
  return (props) => {
    return (
      <>
        <span className="inline-block bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          Promoted
        </span>
        <Rescard {...props} />
      </>
    );
  };
};
export default Rescard;
