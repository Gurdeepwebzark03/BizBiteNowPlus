import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Heart,
  MapPin,
  ShoppingBag,
  Navigation,
  Plus,
  Check,
} from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
const MobileCartHeader = ({
  itemCount = 0,
  address = {},
  onBack,
  onAddressClick,
}) => {
  const wrapperRef = useRef(null);
  const savedAddresses = [
    {
      id: 1,
      label: "Home",
      address: "Sector 22, Chandigarh",
    },
    {
      id: 2,
      label: "Office",
      address: "IT Park, Chandigarh",
    },
    {
      id: 3,
      label: "Parents",
      address: "Saha, Ambala",
    },
  ];
  const [showAddresses, setShowAddresses] = useState(false);

  const [currentLocation, setCurrentLocation] = useState(null);

  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]);
  const addresses = useMemo(() => {
    return currentLocation
      ? [currentLocation, ...savedAddresses]
      : savedAddresses;
  }, [currentLocation]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowAddresses(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="sticky top-0 z-20 bg-slate-50 px-3 pt-3 pb-2">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <button
            onClick={onBack}
            className="
              mt-0.5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              transition
              hover:bg-slate-200
            "
          >
            <ChevronLeft size={20} />
          </button>

          <div>
            <h1 className="text-[22px] font-bold leading-none text-slate-900">
              Your Cart
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="relative mt-4">
        {/* Address Card */}
        <button
          type="button"
          onClick={() => setShowAddresses((prev) => !prev)}
          className="
      flex
      w-full
      items-center
      justify-between
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-3
      py-3
      shadow-sm
      transition-all
      duration-200
      hover:border-green-500
      active:scale-[0.99]
    "
        >
          <div className="flex items-center gap-3">
            <div
              className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-green-100
        "
            >
              <MapPin size={18} className="text-green-600" />
            </div>

            <div className="text-left">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Deliver To
              </p>
              <h3 className="text-sm font-semibold text-slate-900">
                {selectedAddress?.label}
              </h3>

              <p className="max-w-[220px] truncate text-xs text-slate-500">
                {selectedAddress?.address}
              </p>
            </div>
          </div>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              showAddresses ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {showAddresses && (
          <div
            className="
        absolute
        left-0
        right-0
        top-full
        z-50
        mt-2

        overflow-hidden
        rounded-2xl

        border
        border-slate-200

        bg-white

        shadow-xl
      "
          >
            {addresses.map((item) => {
              const active = item.id === selectedAddress?.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedAddress(item);

                    setShowAddresses(false);

                    onAddressClick?.(item);
                  }}
                  className={`
              flex
              w-full
              items-start
              gap-3

              px-4
              py-3

              text-left
              transition

              ${active ? "bg-green-50" : "hover:bg-slate-50"}
            `}
                >
                  <div
                    className="
                mt-0.5
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-slate-100
              "
                  >
                    <MapPin
                      size={15}
                      className={active ? "text-green-600" : "text-slate-500"}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {item.label}
                      </h4>

                      {active && <Check size={16} className="text-green-600" />}
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.address}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="border-t border-slate-100" />

            <button
              type="button"
              onClick={async () => {
                if (!navigator.geolocation) {
                  alert("Geolocation is not supported.");
                  return;
                }

                navigator.geolocation.getCurrentPosition(
                  async ({ coords }) => {
                    try {
                      const { latitude, longitude } = coords;

                      const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
                      );

                      const data = await res.json();

                      const addressData = data.address || {};

                      const location = {
                        id: "current",

                        label:
                          addressData.suburb ||
                          addressData.neighbourhood ||
                          addressData.city ||
                          addressData.town ||
                          addressData.village ||
                          addressData.county ||
                          "Current Location",

                        address: data.display_name,
                      };

                      setCurrentLocation(location);

                      setSelectedAddress(location);

                      setShowAddresses(false);

                      onAddressClick?.(location);
                    } catch (err) {
                      console.error(err);
                      alert("Unable to fetch address.");
                    }
                  },
                  () => {
                    alert("Location permission denied.");
                  },
                  {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                  },
                );
              }}
              className="
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-sm
                font-medium
                text-green-600
                transition
                hover:bg-green-50
  "
            >
              <Navigation size={18} />
              Use Current Location
            </button>

            <button
              type="button"
              onClick={() => {
                setShowAddresses(false);

                onAddressClick?.({
                  type: "addAddress",
                });
              }}
              className="
          flex
          w-full
          items-center
          gap-3

          border-t
          border-slate-100

          px-4
          py-3

          text-sm
          font-medium
          text-blue-600

          transition
          hover:bg-blue-50
        "
            >
              <Plus size={18} />
              Add New Address
            </button>
          </div>
        )}
      </div>

      {/* Cart Count */}
      <div
        className="
    mt-3
    flex
    items-center
    gap-3
    rounded-xl
    border
    border-slate-200
    bg-white
    px-3
    py-2.5
    shadow-sm
  "
      >
        <div
          className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-lg
      bg-green-100
      text-green-600
    "
        >
          <ShoppingBag size={16} />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900">
            Items in Cart
          </h3>

          <p className="text-xs text-slate-500">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default MobileCartHeader;
