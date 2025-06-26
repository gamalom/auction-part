import { useProduct } from "@/context/product-provider";

export default function ProductCard() {
  const { productList } = useProduct();
  const { id, details, startTime, endTime, badge } = productList[0];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">ID: {id}</span>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
          {badge}
        </span>
      </div>

      <div className="text-gray-800 text-base mb-2">{details}</div>

      <div className="text-sm text-gray-600 space-y-1">
        <p className="font-bold">Start Time:{startTime}</p>
        <p className="font-bold">End Time:{endTime}</p>
      </div>
    </div>
  );
}
