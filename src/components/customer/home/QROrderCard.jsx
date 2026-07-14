import { QrCode } from "lucide-react";

const QROrderCard = ({
  tableNumber,
  onScan,
}) => {
  return (
<section className="lg:hidden px-2">
  <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-2 shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
    {/* Left */}

    <div className="flex flex-1 items-center gap-3 min-w-0">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
  <QrCode
    size={30}
    className="text-slate-700"
  />
</div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[13px] font-bold leading-none text-slate-900">
          Ordering from the table?
        </h3>

        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
          Scan the QR code to order instantly
          from your table.
        </p>

        {tableNumber && (
          <span className="mt-0.5 inline-block text-[10px] font-semibold text-[#238B45]">
            Table #{tableNumber}
          </span>
        )}
      </div>
    </div>

    {/* Button */}

    <button
      onClick={onScan}
      className="
  ml-4
  h-8
  rounded-xl
  bg-[#238B45]
  px-4
  text-[12px]
  font-semibold
  text-white
  shadow-[0_0_0_2px_rgba(255,164,32,.55),0_4px_10px_rgba(255,164,32,.28)]
        transition
        hover:bg-[#1c7a3c]
      "
    >
      Scan QR
    </button>
  </div>
</section>
  );
};

export default QROrderCard;