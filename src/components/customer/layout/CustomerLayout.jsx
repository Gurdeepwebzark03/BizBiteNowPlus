import { motion } from "framer-motion";

const CustomerLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900
        overflow-x-hidden
      "
    >
      {/* App Shell */}
      <div
        className="
          relative
          flex
          min-h-screen
          w-full
        "
      >
        {/* Desktop Sidebar */}
        <aside
          className="
            hidden
            lg:block
            lg:w-24
            xl:w-28
            shrink-0
          "
        />

        {/* Main Content */}
        <main
          className="
            flex-1
            min-w-0
            pb-24
            lg:pb-0
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              min-h-screen
              w-full
            "
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;