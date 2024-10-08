export default function TodoList(props) {
  return (
    <div className="flex">
      {/* Product image & offer & numBox */}
      <div className="flex flex-col justify-center items-center max-w-[144px] pl-3">
        <img src={props.productImg} className="size-[100px]" alt="" />
        <h6 className="text-red-600 font-bold text-lg mb-2">فروش ویژه</h6>
        <div className="w-32 h-10 bg-slate-100"></div>
      </div>
      {/* Title product & color & price */}
      <div className="pr-3">
        <h4 className="text-black font-bold text-base line-clamp-2 mb-4">
          {props.productName}
        </h4>
        <div className="bg-slate-100 w-32 h-10"></div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-x-2">
            <span className="text-xl font-bold">{props.productPrice}</span>
            <svg className="size-4">
              <use href="#toman"></use>
            </svg>
          </span>
          <svg
            className="size-6 fill-[#ef4056] cursor-pointer"
            onClick={() => deleteItemFromCart(i)}
          >
            <use href="#delete"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
