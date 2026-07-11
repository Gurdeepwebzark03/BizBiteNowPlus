import { useNavigate } from "react-router-dom";
import { ChevronLeft, Clock, CheckCircle2, XCircle } from "lucide-react";
import { allProducts } from "../../data/products";

const ORANGE = "#E8622D";
const CHARCOAL = "#1C1C1C";

const statusMeta = {
  delivered: { label: "Delivered", color: "#1E8E5A", Icon: CheckCircle2 },
  preparing: { label: "Preparing", color: ORANGE, Icon: Clock },
  cancelled: { label: "Cancelled", color: "#DC2626", Icon: XCircle },
};

const orderIds = [13, 6, 8, 1, 15];
const orderStatuses = ["delivered", "preparing", "delivered", "cancelled", "delivered"];

const orders = orderIds
  .map((id) => allProducts.find((p) => p.id === id))
  .filter(Boolean)
  .map((product, i) => ({
    id: `BBN-${2400 + i}`,
    product,
    date: `${28 - i * 3} Jun 2026`,
    status: orderStatuses[i],
    qty: (i % 3) + 1,
  }));

const MyOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAF5]" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 flex items-center gap-3"
        style={{ minHeight: "64px" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#1C1C1C] bg-gray-100 rounded-xl cursor-pointer"
          style={{ minHeight: "40px", minWidth: "40px" }}
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="font-bold text-[#1C1C1C]" style={{ fontSize: "22px" }}>
          My Orders
        </h1>
      </div>

      {/* Orders list */}
      <div className="px-4 py-4 max-w-4xl mx-auto pb-10">
        {orders.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-[16px]">
            You haven't placed any orders yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {orders.map((order) => {
            const { label, color, Icon } = statusMeta[order.status];
            return (
              <div
                key={order.id}
                onClick={() => navigate(`/product/${order.product.id}`)}
                className="bg-white rounded-2xl p-2.5 shadow-sm cursor-pointer active:opacity-80"
              >
                <div className="flex flex-col gap-1.5 mb-2">
                  <span className="font-bold text-gray-400 truncate" style={{ fontSize: "10px" }}>
                    {order.id} · {order.date}
                  </span>
                  <span
                    className="self-start flex items-center gap-1 font-bold rounded-full px-2 py-0.5"
                    style={{ fontSize: "10px", color, backgroundColor: `${color}1A` }}
                  >
                    <Icon size={10} />
                    {label}
                  </span>
                </div>

                <div className="w-full rounded-xl bg-gray-100 overflow-hidden mb-2" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    src={order.product.image}
                    alt={order.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold truncate" style={{ color: CHARCOAL, fontSize: "13px" }}>
                  {order.product.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-gray-400" style={{ fontSize: "11px" }}>
                    Qty {order.qty}
                  </p>
                  <span className="font-bold shrink-0" style={{ color: ORANGE, fontSize: "13px" }}>
                    ₹{order.product.price * order.qty}
                  </span>
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
