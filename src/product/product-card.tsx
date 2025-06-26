import { Button } from "@/components/ui/button";
import { useProduct } from "@/context/product-context";

export default function ProductCard() {
  const { productList } = useProduct();

  if (!productList || productList.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="grid gap-4 container p-4">
      <div className="grid-cols-4 grid gap-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500 font-bold">
                Lot: {product.lot || "-"}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                {product.badge}
              </span>
            </div>

            <div className="text-gray-800  mb-2">{product.details}</div>

            <div className="text-sm text-gray-600 ">
              <p className="font-bold  ">Start Time: {product.startTime}</p>
              <p className="font-bold  ">End Time: {product.endTime}</p>
              <Button className="my-2 ">Get Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
