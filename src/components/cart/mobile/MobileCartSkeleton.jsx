const Skeleton = ({
  className = "",
}) => (
  <div
    className={`
      animate-pulse
      rounded-lg
      bg-slate-200
      ${className}
    `}
  />
);

const MobileCartSkeleton = () => {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <div className="mx-auto max-w-md px-3 py-3">

        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Skeleton className="h-9 w-9 rounded-full" />

              <div>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="mt-2 h-3 w-44" />
              </div>
            </div>

            <Skeleton className="h-10 w-10 rounded-full" />
          </div>

          <Skeleton className="mt-4 h-20 rounded-2xl" />
        </div>

        {/* Cart Items */}
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm"
            >
              <Skeleton className="h-[72px] w-[72px] rounded-xl" />

              <div className="flex flex-1 justify-between">
                <div className="flex-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="mt-2 h-4 w-32" />
                  <Skeleton className="mt-2 h-3 w-24" />
                  <Skeleton className="mt-4 h-8 w-28 rounded-xl" />
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Skeleton className="h-5 w-14" />
                  <Skeleton className="h-8 w-8 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <Skeleton className="h-5 w-36" />

          <div className="mt-4 flex gap-2">
            <Skeleton className="h-10 flex-1 rounded-xl" />
            <Skeleton className="h-10 w-24 rounded-xl" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <Skeleton className="h-5 w-40" />

          <div className="mt-4 space-y-3">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-px w-full" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>

        {/* Delivery Banner */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />

            <div className="flex-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="mt-2 h-3 w-full" />
              <Skeleton className="mt-4 h-2 w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Checkout */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-3 py-3">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="flex-1">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="mt-2 h-6 w-24" />
          </div>

          <Skeleton className="h-12 w-44 rounded-xl" />
        </div>
      </div>
    </main>
  );
};

export default MobileCartSkeleton;