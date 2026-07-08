import React from "react";
import Card from "../../../components/UI/Card";

const Orders = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1A4D2E]">
            Orders
          </h1>

          <p className="mt-1 text-gray-500">
            Manage customer orders, payments, and deliveries.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="h-32 animate-pulse" />
        <Card className="h-32 animate-pulse" />
        <Card className="h-32 animate-pulse" />
        <Card className="h-32 animate-pulse" />
      </div>

      {/* Filters Placeholder */}
      <Card>
        <div className="h-16 animate-pulse rounded-xl bg-gray-100" />
      </Card>

      {/* Orders Table Placeholder */}
      <Card>
        <div className="space-y-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-12 animate-pulse rounded-lg bg-gray-100"
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Orders;