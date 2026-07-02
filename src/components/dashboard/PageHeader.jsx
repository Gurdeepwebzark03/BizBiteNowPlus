import React from "react";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-2 text-sm text-black">
          <span>Seller</span>
          <ChevronRight size={16} />
          <span className="font-medium text-black">
            {title}
          </span>
        </div>

        <h1 className="mt-2 text-3xl font-bold text-black">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-black">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
}