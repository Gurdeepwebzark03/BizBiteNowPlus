import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/customer/common/SectionHeader";

import CurrentOrderCard from "../../components/customer/orders/OrderCard";
import OrderHistoryCard from "../../components/customer/orders/OrderHistory";
import OrderTimeline from "../../components/customer/orders/OrderTimeline";
import ReorderButton from "../../components/customer/orders/ReorderButton";

import {
  getCurrentOrder,
  getOrderHistory,
} from "../../api/customerApi";


const Orders = () => {

  const navigate = useNavigate();


const [selectedOrder, setSelectedOrder] =
  useState(null);


const [history, setHistory] =
  useState([]);


const [loading, setLoading] =
  useState(true);

  const [reordering, setReordering] =
    useState(null);



  const handleReorder = (order) => {

    setReordering(order.id);


    setTimeout(() => {

      setReordering(null);

      navigate(
        "/customer/cart",
        {
          state:{
            reorder:order
          }
        }
      );

    },500);

  };



  const handleViewOrder = (order) => {

    setSelectedOrder(order);


    navigate(
      `/customer/orders/${order.id}`,
      {
        state:{
          order
        }
      }
    );

  };

useEffect(() => {

  const loadOrders = async () => {

    try {

      const customerId = "CUSTOMER_001";


      const [
        currentRes,
        historyRes,
      ] = await Promise.all([
        getCurrentOrder(customerId),
        getOrderHistory(customerId),
      ]);



setSelectedOrder(
  currentRes.data?.data || null
);


setHistory(
  historyRes.data?.data || []
);


    } catch(error) {

      console.log(
        "Orders API Error:",
        error
      );


    } finally {

      setLoading(false);

    }

  };


  loadOrders();


}, []);
if (loading) {
  return (
    <div
      className="
        flex
        min-h-[400px]
        items-center
        justify-center
        text-slate-500
      "
    >
      Loading Orders...
    </div>
  );
}


  return (
               <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="space-y-6"
>
    <div
      className="
        space-y-10
        pb-32
        lg:pl-10
      "
    >


      <SectionHeader
        title="My Orders"
        subtitle="Track current and previous orders"
      />



      {/* Current Order */}

      <section className="space-y-5">


        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <h2 className="text-xl font-bold text-slate-900">
            Current Order
          </h2>


          <div
            className="
              flex
              items-center
              gap-2

              rounded-full

              bg-emerald-50

              px-3
              py-1

              text-sm

              font-semibold

              text-emerald-600
            "
          >

            <CheckCircle2 size={16}/>

            Active

          </div>


        </div>



        <CurrentOrderCard

          order={selectedOrder}

          onTrack={() =>
            navigate(
              `/customer/orders/${selectedOrder.id}`,
              {
                state:{
                  order:selectedOrder
                }
              }
            )
          }

          onView={() =>
            handleViewOrder(
              selectedOrder
            )
          }

        />



<OrderTimeline
  timeline={selectedOrder?.tracking?.steps || []}
  currentStep={selectedOrder?.tracking?.currentStep}
/>


      </section>





      {/* History */}

      <section className="space-y-5">


        <h2 className="text-xl font-bold text-slate-900">
          Order History
        </h2>



        {
          history.length === 0 ? (

            <div
              className="
                rounded-[28px]
                border-2
                border-dashed
                border-slate-300
                bg-white
                p-12
                text-center
              "
            >

              <ShoppingBag
                className="mx-auto text-slate-400"
                size={40}
              />


              <h3 className="mt-4 text-xl font-bold">
                No Previous Orders
              </h3>

              <p className="mt-2 text-slate-500">
                Your completed orders will appear here.
              </p>


            </div>


          ) : (


            <div className="space-y-5">


              {
                history.map(
                  (order)=>(


                    <div
                      key={order.id}

                      className="
                        rounded-[28px]
                        
                      "
                    >


                      <OrderHistoryCard

                        order={order}

                        onView={() =>
                          handleViewOrder(
                            order
                          )
                        }

                      />



                      <div
                        className="
                          mt-3
                          flex
                          justify-end
                        "
                      >

                        <ReorderButton

                          order={order}

                          loading={
                            reordering === order.id
                          }

                          onReorder={() =>
                            handleReorder(
                              order
                            )
                          }

                        />

                      </div>


                    </div>


                  )
                )
              }


            </div>


          )
        }


      </section>


    </div>
</motion.div>
  );

};


export default Orders;