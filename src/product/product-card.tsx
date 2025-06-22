import { Button } from "@/components/ui/button";
import { useProduct } from "@/context/product-provider";

export default function ProductCard() {
  const { productList } = useProduct();

  if (!productList || productList.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="grid gap-4 container p-4">
      <div className="grid-cols-4 grid gap-4">
        {productList.map(({ id, lot, details, startTime, endTime, badge }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500 font-bold">
                Lot: {lot}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                {badge}
              </span>
            </div>

            <div className="text-gray-800  mb-2">{details}</div>

            <div className="text-sm text-gray-600 ">
              <p className="font-bold  ">Start Time: {startTime}</p>
              <p className="font-bold  ">End Time: {endTime}</p>
              <Button className="my-2 ">Get Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
