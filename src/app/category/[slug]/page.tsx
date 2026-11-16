
import CategoryProduct from "@/Components/CategoryProductCard";
import type { Icategory, Iproduct } from "@/types/type";

const CategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const resCat = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`,
    { cache: "no-store" }
  );

  if (!resCat.ok) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-red-500">
        ক্যাটাগরি পাওয়া যায়নি!
      </div>
    );
  }

  const category: Icategory = await resCat.json();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?category=${slug}`,
    { cache: "no-store" }
  );
  const products: Iproduct[] = res.ok ? await res.json() : [];

  return (
    <main className="min-h-screen w-full py-8 sm:py-10 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm flex items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f1f5f9] border border-slate-200/60 flex items-center justify-center text-3xl sm:text-4xl shrink-0">
            {category.icon}
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {category.nameBn}
              </h1>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs">
                মোট {products?.length ? products.length.toLocaleString("bn-BD") : "০"}টি পণ্য
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {category?.descriptionBn || `${category.nameBn} ক্যাটাগরির আজকের বাজার দর।`}
            </p>
          </div>
        </div>
        <div>

    <CategoryProduct product={products}/>
        </div>
      </div>
    </main>
  );
};

export default CategoryDetailsPage;