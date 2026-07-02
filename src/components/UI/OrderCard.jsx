import Card from "./Card";
import Button from "./Button";
import { Phone, MapPin, Package, CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order, activeTab, markAsDelivered }) => {
  const navigate = useNavigate();
  return (
    <Card className="flex h-full flex-col justify-between p-5 w-full max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-black">
            {order.customerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-black">
            <Phone size={14} />
            <span>{order.phone}</span>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          ₹ {order.total}
        </span>
      </div>

      {/* Address */}
      <div className="mt-4 flex items-start gap-2 text-sm text-black-600">
        <MapPin size={16} className="mt-0.5 text-red-500" />
        <p className="line-clamp-2">{order.address}</p>
      </div>

      {/* Items */}
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2">
          <Package size={16} className="text-[#F4A300]" />
          <h3 className="text-sm font-semibold text-black">Items Ordered</h3>
        </div>

        <div className="space-y-2">
          {order.items.slice(0, 1).map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />

                <div>
                  <p className="font-medium text-black">
                    {item.product.name}
                  </p>

                  <p className="text-sm text-black">Qty: {item.quantity}</p>
                </div>
              </div>

              <span className="font-semibold text-[#1A4D2E]">
                ₹{item.product.sellingPrice}
              </span>
            </div>
          ))}

         
            {order.items.length > 2 && (
               <div className="flex items-center justify-between">
              <p className="text-xs text-[#1A4D2E] font-medium">
                +{order.items.length - 1} more items
              </p>
                <p className="underline cursor-pointer text-[#1A4D2E] hover:text-[#245C39] font-semibold"
              onClick={() => navigate(`/seller/orders/${order.id}`)}
            >
              View Details
            </p>
               </div>
            )}
          
         
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        {activeTab === "new" ? (
          <Button className="w-full" onClick={() => markAsDelivered(order.id)}>
            Mark as Delivered
          </Button>
        ) : (
          <div className="flex justify-end">
            <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
              <CircleCheck size={16} />
              Delivered
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default OrderCard;
