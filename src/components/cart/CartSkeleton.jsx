const CartSkeleton = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Header */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-8 w-56 rounded-lg bg-gray-200" />
              <div className="mt-3 h-4 w-80 rounded bg-gray-100" />
            </div>

            {/* Cart Items */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-gray-100 p-6 last:border-b-0"
                >
                  <div className="h-28 w-28 rounded-2xl bg-gray-200" />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="h-5 w-48 rounded bg-gray-200" />

                      <div className="mt-3 h-4 w-32 rounded bg-gray-100" />

                      <div className="mt-4 h-4 w-full rounded bg-gray-100" />

                      <div className="mt-2 h-4 w-3/4 rounded bg-gray-100" />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="h-11 w-32 rounded-xl bg-gray-200" />

                      <div className="h-7 w-24 rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-6 w-40 rounded bg-gray-200" />

              <div className="mt-5 h-12 rounded-xl bg-gray-100" />
            </div>

            {/* Payment */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-6 w-48 rounded bg-gray-200" />

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-28 rounded-xl bg-gray-100"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:h-fit">
            <div className="h-7 w-44 rounded bg-gray-200" />

            <div className="mt-8 space-y-5">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex justify-between"
                >
                  <div className="h-4 w-28 rounded bg-gray-100" />

                  <div className="h-4 w-16 rounded bg-gray-200" />
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-gray-200" />

            <div className="h-16 rounded-xl bg-gray-100" />

            <div className="mt-6 h-14 rounded-xl bg-gray-200" />

            <div className="mt-4 h-12 rounded-xl bg-gray-100" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartSkeleton;