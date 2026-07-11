import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import SectionHeader from "../../components/customer/common/SectionHeader";
import PrimaryButton from "../../components/customer/common/PrimaryButton";

import AddressCard from "../../components/customer/profile/AddressCard";
import PaymentMethods from "../../components/customer/profile/PaymentMethods";

import {
  addresses,
  paymentMethods,
} from "../../data/customer/profileData";


const Checkout = () => {

  const navigate = useNavigate();


  const [selectedAddress, setSelectedAddress] =
    useState(
      addresses.find(
        (item) => item.default
      )
    );


  const [selectedPayment, setSelectedPayment] =
    useState(
      paymentMethods.find(
        (item) => item.default
      )
    );


  const [selectedCoupon, setSelectedCoupon] =
    useState(null);


  const [placingOrder, setPlacingOrder] =
    useState(false);



  const orderSummary = useMemo(() => {

    const subtotal = 896;


    const delivery =
      subtotal >= 499
        ? 0
        : 40;


    const discount =
      selectedCoupon?.discountType === "flat"
        ? selectedCoupon.discount
        : 0;


    const tax = Math.round(
      subtotal * 0.05
    );


    return {
      subtotal,
      delivery,
      tax,
      discount,
      total:
        subtotal +
        delivery +
        tax -
        discount,
    };


  }, [selectedCoupon]);





  const placeOrder = () => {

    setPlacingOrder(true);


    setTimeout(() => {


      const newOrder = {

        id:
          `ORD-${Date.now()}`,


        status:
          "Placed",


        createdAt:
          new Date().toISOString(),



        restaurant:{
          name:
            "BizBiteNow Kitchen",

          image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",

          rating:
            4.8,

          location:
            "Ambala, Haryana",
        },



        tracking:{

          currentStep:1,


          steps:[

            {
              id:1,
              title:"Order Placed",
              completed:true,
              time:"Now",
            },


            {
              id:2,
              title:"Preparing Food",
              completed:false,
              time:"",
            },


            {
              id:3,
              title:"Out for Delivery",
              completed:false,
              time:"",
            },


            {
              id:4,
              title:"Delivered",
              completed:false,
              time:"",
            },

          ],

        },



        items:[

          {
            id:1,

            name:
              "Margherita Pizza",

            quantity:2,

            price:299,

            total:598,

            image:
              "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
          },


          {
            id:2,

            name:
              "Cold Coffee",

            quantity:2,

            price:149,

            total:298,

            image:
              "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
          },

        ],



        summary:{

          subtotal:
            orderSummary.subtotal,


          delivery:
            orderSummary.delivery,


          tax:
            orderSummary.tax,


          discount:
            orderSummary.discount,


          total:
            orderSummary.total,

        },



        payment:
          selectedPayment,


        address:
          selectedAddress,


        coupon:
          selectedCoupon,

      };




      const oldOrders =
        JSON.parse(
          localStorage.getItem(
            "customerOrders"
          )
        ) || [];



      localStorage.setItem(

        "customerOrders",

        JSON.stringify([
          newOrder,
          ...oldOrders,
        ])

      );



      setPlacingOrder(false);



      navigate(
        "/customer/orders"
      );



    },1200);


  };




  return (

    <div className="space-y-8 lg:pl-10 pb-32">


      <SectionHeader

        title="Checkout"

        subtitle="Complete your order securely"

      />



      {/* Address */}

      <section className="space-y-4">


        <AddressCard

          addresses={addresses}

          onSelect={
            setSelectedAddress
          }


          onAdd={() =>
            console.log(
              "Add Address"
            )
          }


          onEdit={(address)=>
            console.log(
              "Edit",
              address
            )
          }


          onDelete={(address)=>
            console.log(
              "Delete",
              address
            )
          }

        />


      </section>





      {/* Payment */}

      <section className="space-y-4">


        <PaymentMethods

          methods={paymentMethods}


          onSelect={
            setSelectedPayment
          }


          onAdd={() =>
            console.log(
              "Add Payment"
            )
          }


          onEdit={(method)=>
            console.log(
              "Edit",
              method
            )
          }


          onDelete={(method)=>
            console.log(
              "Delete",
              method
            )
          }

        />


      </section>





      {/* Summary */}

      <section
        className="
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >


        <h2 className="text-xl font-bold text-slate-900">
          Order Summary
        </h2>



        <div className="mt-5 space-y-4">


          <SummaryRow
            label="Subtotal"
            value={`₹${orderSummary.subtotal}`}
          />


          <SummaryRow
            label="Delivery Fee"
            value={
              orderSummary.delivery === 0
              ? "Free"
              : `₹${orderSummary.delivery}`
            }
          />


          <SummaryRow
            label="Taxes"
            value={`₹${orderSummary.tax}`}
          />



          {
            orderSummary.discount > 0 && (

              <SummaryRow

                label="Coupon Discount"

                value={
                  `-₹${orderSummary.discount}`
                }

                green

              />

            )
          }




          <div
            className="
              flex
              justify-between
              border-t
              pt-4
            "
          >

            <span className="text-lg font-bold">
              Total
            </span>


            <span
              className="
                text-2xl
                font-bold
              "
              style={{
                color:"var(--primary)",
              }}
            >
              ₹{orderSummary.total}
            </span>


          </div>


        </div>





        <div className="mt-6 space-y-3">


          <InfoBox
            title="Payment Method"
            value={
              selectedPayment?.title ||
              "Select Payment"
            }
          />



          <InfoBox
            title="Delivery Address"
            value={
              selectedAddress?.address ||
              "Select Address"
            }
          />


        </div>





        <PrimaryButton

          className="mt-6 w-full"

          disabled={placingOrder}

          onClick={placeOrder}

        >

          {
            placingOrder
            ? "Placing Order..."
            : "Place Order"
          }

        </PrimaryButton>



      </section>



    </div>

  );

};



const SummaryRow = ({
  label,
  value,
  green,
}) => (

  <div
    className="
      flex
      justify-between
      text-slate-600
    "
  >

    <span>
      {label}
    </span>


    <span
      className={
        green
        ? "font-semibold text-green-600"
        : "font-semibold text-slate-900"
      }
    >
      {value}
    </span>


  </div>

);



const InfoBox = ({
  title,
  value,
}) => (

  <div>

    <p className="text-sm text-slate-500">
      {title}
    </p>


    <div
      className="
        mt-1
        rounded-2xl
        bg-slate-50
        p-4
        font-semibold
      "
    >
      {value}
    </div>

  </div>

);



export default Checkout;