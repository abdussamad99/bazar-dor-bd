import Link from "next/link";
import { Card, Chip } from "@heroui/react";
import {
  Home,
  ChevronRight,
} from "lucide-react";
import type { Iproduct } from "@/types/type";
import NotFoundPage from "@/app/not-found";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  let product: Iproduct | null = null;

  try {
    // ✅ URL এখানে /products (বহুবচন) হবে, যদি আপনার API-তে এন্ডপয়েন্টটি এমন হয়
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?slug=${slug}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const data = await res.json();
      // যদি API থেকে অ্যারে আসে, তবে প্রথমটি নিতে হবে, নাহলে সরাসরি ডেটা
      product = Array.isArray(data) ? data[0] : data;
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
  }

  if (!product) {
    return <NotFoundPage />;
  }

  // ✅ মার্কেট ডেটা থেকে দাম বের করা
  const markets = product.markets || [];

  //markets থেকে minPrice, maxPrice এবং avgPrice বের করা
  const minPrice = markets.length > 0 ? Math.min(...markets.map((m) => m.min)) : 0;
  const maxPrice = markets.length > 0 ? Math.max(...markets.map((m) => m.max)) : 0;
  const avgPrice = markets.length > 0
    ? Math.round(
        markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length
      )
    : 0;

  return (
    <main className="min-h-screen w-full py-6 sm:py-10 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        {/* ১. ব্রেডক্রাম্ব */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-600">
            <Home size={14} />
            <span>হোম</span>
          </Link>
          <ChevronRight size={14} />
          <Link
            href={`/category/${product.category}`}
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <span>{product.categoryIcon}</span>
            <span>{product.categoryNameBn}</span>
          </Link>
          <ChevronRight size={14} />
          <span className="font-bold text-slate-900">{product.nameBn}</span>
        </div>

        {/* ২. মেইন হেডার কার্ড */}
        <Card className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-2xs space-y-6">
          <Card.Content className="p-0 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f1f5f9] border border-slate-200/60 flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                {product.image}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Chip
                    size="sm"
                    className="px-2.5 py-0.5 h-auto rounded-full bg-blue-50 text-blue-600 font-bold text-xs"
                  >
                    {product.categoryNameBn}
                  </Chip>
                  <Chip
                    size="sm"
                    className="px-2.5 py-0.5 h-auto rounded-full bg-slate-100 text-slate-600 font-semibold text-xs"
                  >
                    {product.nameBn}
                  </Chip>
                </div>
                <Card.Title className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {product.nameBn}
                </Card.Title>
                <Card.Description className="text-xs sm:text-sm text-slate-500 font-medium">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </Card.Description>
              </div>
            </div>

            {/* আজকের ভাড়া বক্স */}
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl px-5 py-3.5 flex flex-col md:items-end">
              <span className="text-xs font-bold text-slate-500">আজকের দাম</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {product.today.toLocaleString("bn-BD")} টাকা
                </span>
                <span className="text-xs font-medium text-slate-400">
                  / {product.unit}
                </span>
              </div>

              <Chip
                size="sm"
                className={`mt-2 px-2.5 py-0.5 h-auto rounded-full text-xs font-bold ${
                  product.change.dir === "up"
                    ? "bg-rose-50 text-rose-600"
                    : product.change.dir === "down"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
                {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
              </Chip>
            </div>
          </Card.Content>

          {/* ৩টি কার্ড: সর্বনিম্ন, সর্বোচ্চ, গড় দাম */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">

            {/* সর্বনিম্ন দাম */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500 mb-2">সর্বনিম্ন দাম</p>
              <p className="text-3xl font-black text-green-600">
                {minPrice.toLocaleString("bn-BD")} <span className="text-lg">টাকা</span>
              </p>
            </div>

            {/* সর্বোচ্চ দাম */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500 mb-2">সর্বোচ্চ দাম</p>
              <p className="text-3xl font-black text-red-600">
                {maxPrice.toLocaleString("bn-BD")} <span className="text-lg">টাকা</span>
              </p>
            </div>

            {/* গড় দাম */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500 mb-2">গড় দাম</p>
              <p className="text-3xl font-black text-slate-900">
                {avgPrice.toLocaleString("bn-BD")} <span className="text-lg">টাকা</span>
              </p>
            </div>

          </div>
          {/* ৪. বাজারভিত্তিক পণ্যের দামের টেবিল */}
<div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm overflow-hidden mt-6">
  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
    বাজারভিত্তিক আজকের দাম
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      {/* টেবিল হেডার */}
      <thead>
        <tr className="bg-slate-50 text-slate-600 text-sm font-bold border-b border-slate-200">
          <th className="py-3 px-4">বাজার</th>
          <th className="py-3 px-4">বিভাগ</th>
          <th className="py-3 px-4 text-right">সর্বনিম্ন</th>
          <th className="py-3 px-4 text-right">সর্বোচ্চ</th>
          <th className="py-3 px-4 text-right">গড়</th>
        </tr>
      </thead>

      {/* টেবিল বডি */}
      <tbody>
        {product.markets?.map((market, index) => {
          // গড় দাম বের করা (min + max) / 2
          const avg = Math.round((market.min + market.max) / 2);

          return (
            <tr
              key={index}
              className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
            >
              <td className="py-3 px-4 font-semibold text-slate-800 text-sm whitespace-nowrap">
                {market.market}
              </td>
              <td className="py-3 px-4 text-slate-500 text-sm">
                {market.division}
              </td>
              <td className="py-3 px-4 text-right text-slate-600 text-sm">
                {market.min.toLocaleString("bn-BD")} টাকা
              </td>
              <td className="py-3 px-4 text-right text-slate-600 text-sm">
                {market.max.toLocaleString("bn-BD")} টাকা
              </td>
              <td className="py-3 px-4 text-right font-bold text-slate-900 text-sm">
                {avg.toLocaleString("bn-BD")} টাকা
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>
        </Card>
      </div>
    </main>
  );
};

export default ProductDetailsPage;