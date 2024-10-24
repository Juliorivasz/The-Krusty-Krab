/* eslint-disable react/prop-types */

export default function ProductCard({ promo }) {
  return (
    <div className="bg-white group rounded-xl border-gray-400 border-2 cursor-pointer">
      <div className="w-full relative">
        <img
          className="h-auto w-full object-cover scale-75 group-hover:scale-100 rounded-t-xl duration-300"
          src={promo.thumbnail}
          alt="promo de"
        />
        <div
          className="bg-yellow-400 absolute bottom-6 left-6 px-2 py-1 text-xs uppercase font-bold"
        >
          {promo.descuento}% off
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between items-center">
        <h1 className="text-base group-hover:text-blue-500 duration-300">
          Cangreburguer simple
        </h1>
        <div>
          <h3 className="text-sm line-through">${promo.precio}</h3>
          <h2 className="text-sm font-semibold">
            ${promo.precio - (promo.precio * promo.descuento) / 100}
          </h2>
        </div>
      </div>
    </div>
  );
}
