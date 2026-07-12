import {
  Bell,
  User,
  ShoppingBag,
  Gift,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  getStore,
  getNotifications,
  getProfile,
} from "../../../api/customerApi";


const CustomerHeader = () => {

  const navigate = useNavigate();


  const [store,setStore] =
    useState({});


  const [customer,setCustomer] =
    useState({});


  const [notifications,setNotifications] =
    useState([]);


  const [notificationOpen,setNotificationOpen] =
    useState(false);


  const wrapperRef =
    useRef(null);



  useEffect(()=>{


    const loadData = async()=>{

      try{

        const [
          storeRes,
          notificationRes,
          profileRes,
        ] = await Promise.all([

          getStore(),

          getNotifications(),

          getProfile(),

        ]);


        setStore(
          storeRes.data.data ||
          storeRes.data
        );


        setNotifications(
          notificationRes.data.data ||
          notificationRes.data ||
          []
        );


        setCustomer(
          profileRes.data.data ||
          profileRes.data
        );


      }
      catch(error){

        console.log(
          "Header API Error:",
          error
        );

      }

    };


    loadData();


  },[]);



  useEffect(()=>{


    const handleClickOutside=(event)=>{


      if(
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target
        )
      ){

        setNotificationOpen(false);

      }


    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return()=>{

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  },[]);





  const getNotificationIcon=(type)=>{

    if(type==="reward")
      return Gift;


    return ShoppingBag;

  };





  return (

    <header
      className="
        fixed
        top-5
        left-0
        right-0
        z-50

        flex
        justify-center

        px-4
      "
    >


      <div
        ref={wrapperRef}

        className="
          relative

          flex
          h-16

          w-full
          max-w-[650px]

          items-center
          justify-between

          rounded-[28px]

          border
          border-slate-200

          bg-white/90

          px-5

          shadow-2xl

          backdrop-blur-xl
        "
      >



        {/* Store */}


        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          <div
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              font-black

              text-white
            "

            style={{
              background:
              "var(--primary)",
            }}
          >

            {
              store.initials ||
              store.name?.slice(0,2)
                .toUpperCase()
              ||
              "BB"
            }

          </div>



          <div className="hidden sm:block">

            <p className="
              font-bold
              text-slate-900
            ">

              {
                store.name ||
                "Restaurant"
              }

            </p>


          </div>


        </div>





        {/* Actions */}


        <div
          className="
            flex
            items-center
            gap-2
          "
        >



          {/* Notification */}


          <button

            onClick={()=>
              setNotificationOpen(
                !notificationOpen
              )
            }

            className="
              relative

              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              hover:bg-slate-100
            "
          >

            <Bell size={20}/>


            {
              notifications.length > 0 && (

                <span
                  className="
                    absolute

                    right-2
                    top-2

                    flex

                    h-4
                    w-4

                    items-center
                    justify-center

                    rounded-full

                    text-[10px]

                    text-white
                  "

                  style={{
                    background:
                    "var(--primary)",
                  }}
                >

                  {
                    notifications.length
                  }

                </span>

              )
            }


          </button>





          {/* Notification Panel */}


          {
            notificationOpen && (

              <div
                className="
                  absolute

                  right-0

                  top-16

                  w-80

                  rounded-3xl

                  border

                  border-slate-200

                  bg-white

                  p-4

                  shadow-xl
                "
              >


                <h3 className="
                  mb-3
                  font-bold
                ">

                  Notifications

                </h3>



                <div className="space-y-2">


                {
                  notifications.length === 0 ? (

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      No notifications
                    </p>

                  ) : (


                  notifications.map(
                    (item)=>(

                      <div
                        key={item.id}

                        className="
                          flex
                          gap-3

                          rounded-xl

                          p-3

                          hover:bg-slate-50
                        "
                      >

                        {
                          (()=>{

                            const Icon =
                              getNotificationIcon(
                                item.type
                              );

                            return <Icon size={20}/>

                          })()
                        }


                        <div>

                          <p className="font-semibold">

                            {item.title}

                          </p>


                          <p className="
                            text-sm
                            text-slate-500
                          ">

                            {item.message}

                          </p>


                          <p className="
                            text-xs
                            text-slate-400
                          ">

                            {item.time}

                          </p>


                        </div>


                      </div>

                    )
                  )


                  )

                }


                </div>


              </div>

            )
          }





          {/* Profile */}


          <button

            onClick={()=>
              navigate(
                "/customer/profile"
              )
            }

            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              bg-slate-100

              hover:bg-slate-200
            "
          >

            <User size={20}/>


          </button>


        </div>



      </div>


    </header>

  );

};


export default CustomerHeader;