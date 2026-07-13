import {
  Bike,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

const ContactDeliveryCard = ({
  order,
}) => {
  const partner =
    order?.deliveryPartner ||
    order?.deliveryBoy ||
    {};

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-[var(--primary-light)]
          "
        >
          <Bike
            size={22}
            color="var(--primary)"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">
            Delivery Partner
          </h3>

          <p className="text-sm text-slate-500">
            {partner.name ||
              "Partner Assigned"}
          </p>
        </div>

        <div
          className="
            rounded-full
            bg-green-100
            px-3
            py-1
            text-xs
            font-semibold
            text-green-700
          "
        >
          Online
        </div>
      </div>

      {/* Divider */}

      <div className="my-4 border-t border-slate-200" />

      {/* Address */}

      <div className="flex items-start gap-3">
        <MapPin
          size={18}
          className="mt-0.5 text-slate-400"
        />

        <div>
          <p className="text-xs text-slate-500">
            Delivering To
          </p>

<p className="mt-1 text-sm font-medium text-slate-900">
  {order.address?.address}
</p>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-5 grid grid-cols-2 gap-3">

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:bg-slate-50
          "
        >
          <Phone size={18} />
          Call
        </button>

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
          style={{
            background: "var(--primary)",
          }}
        >
          <MessageCircle size={18} />
          Chat
        </button>

      </div>
    </div>
  );
};

export default ContactDeliveryCard;