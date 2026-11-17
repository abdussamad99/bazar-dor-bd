"use client";
import ProductCard from "@/Components/ProductCard";
import type { Iproduct } from "@/types/type";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <section id="all-products" className="w-full py-12 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-7">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <span>সব পণ্য</span>
              <span className="text-xl sm:text-2xl">📦</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              মোট {products.length}টি পণ্য দেখানো হচ্ছে
            </p>
          </div>
        </div>

        {/* Product Grid / Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="h-52 rounded-3xl bg-slate-200/60 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProduct;