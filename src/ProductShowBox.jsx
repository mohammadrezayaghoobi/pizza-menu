export default function ProductShowBox(props) {
  <div className="w-52 mb-4 hover:shadow-md px-6 py-3">
    {/* product img */}
    <img src={props.photo} alt={props.name} className="h-44 w-44 mb-3" />
    {/* product info */}
    <div className="">
      <h5 className="text-sm mb-5 line-clamp-2" title={props.name}>
        {props.name}
      </h5>
      <div className="flex items-center justify-between">
        <button
          className="flex items-center justify-center text-white w-28 h-10 bg-[#ef4056] font-bold rounded-md"
          onClick={() => addItemToCart(props.idd - 1)}
        >
          خرید
        </button>
        <h5 className="text-left text-xl">{props.price}</h5>
      </div>
    </div>
  </div>;
}
