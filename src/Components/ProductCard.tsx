import type { Iproduct } from "@/types/type";
import Link from "next/link";

const ProductCard = ({ product }: { product: Iproduct }) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block h-full group p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Top Section: Icon & Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl text-xl shadow-sm">
          {product.image}
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm">{product.nameBn}</h3>
          <p className="text-[11px] text-slate-400 font-medium">
            {product.unit === "kg" ? "প্রতি কেজি" : `প্রতি ${product.unit}`}
          </p>
        </div>
      </div>

      {/* Middle Section: Today's Price */}
      <div className="mb-4">
        <p className="text-[11px] text-slate-500 font-medium mb-1">
          আজকের বাজার দাম
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900">{product.today}</span>
          <span className="text-sm font-semibold text-slate-600">টাকা</span>
        </div>
      </div>

      {/* Bottom Section: Price Change Chip */}
      <div className="flex justify-end">
        <span
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-bold ${
            isUp
              ? "bg-red-50 text-red-600"
              : isDown
              ? "bg-green-50 text-green-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
           {isUp && "▲ "}
              {isDown && "▼ "}
              {!isUp && !isDown && "— "}
              {Math.abs(product.change.pct).toLocaleString("bn-BD", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}%
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;