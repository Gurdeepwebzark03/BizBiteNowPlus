import {
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import QuantitySelector from "./QuantitySelector";


const AddToCartBar = ({
  quantity = 1,
  price = 0,
  loading = false,
  disabled = false,
  onQuantityChange,
  onAddToCart,
}) => {

  const total =
    quantity * price;


  return (

    <div
      className="
        fixed

        bottom-4

        left-4

        right-4

        z-50
      "
    >

      <div
        className="
          mx-auto

          max-w-5xl

          rounded-[28px]

          border

          border-slate-200

          bg-white/90

          backdrop-blur-xl

          p-4

          shadow-2xl
        "
      >


        <div
          className="
            flex

            flex-col

            gap-4


            sm:flex-row

            sm:items-center

            sm:justify-between
          "
        >


          {/* Price */}

          <div
            className="
              flex

              items-center

              justify-between

              sm:block
            "
          >

            <div>

              <p
                className="
                  text-xs

                  font-medium

                  text-slate-500
                "
              >
                Total
              </p>


              <h2
                className="
                  text-2xl

                  font-black

                  text-slate-900
                "
              >
                ₹{total}
              </h2>


              <p
                className="
                  text-xs

                  text-slate-400
                "
              >
                ₹{price} × {quantity}
              </p>

            </div>


          </div>





          {/* Actions */}

          <div
            className="
              flex

              items-center

              gap-3
            "
          >

            <QuantitySelector

              quantity={quantity}

              onChange={onQuantityChange}

            />



            <button

              disabled={
                disabled ||
                loading
              }

              onClick={onAddToCart}


              className="
                flex

                flex-1

                items-center

                justify-center

                gap-2

                rounded-2xl

                px-6

                py-3.5

                font-bold

                text-white

                shadow-lg

                transition-all

                hover:opacity-90

                disabled:cursor-not-allowed

                disabled:opacity-50
              "


              style={{
                background:
                  "var(--primary)",
              }}

            >

              <ShoppingBag
                size={19}
              />


              {
                loading
                ?
                "Adding..."
                :
                "Add to Cart"
              }


              <ArrowRight
                size={17}
              />


            </button>


          </div>


        </div>


      </div>


    </div>

  );

};


export default AddToCartBar;