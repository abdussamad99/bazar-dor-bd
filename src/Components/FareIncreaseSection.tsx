"use client";

import ProductCard from "@/Components/ProductCard";
import type { Icategory, Iproduct } from "@/types/type";
import React, { useEffect, useState } from "react";

const FareIncreaseSection = () => {
  const [TopIncreaseRoute, setTopIncreaseRoute] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();

        const filteredata = data
          .filter((item: Iproduct) => item.change.dir === "up")
          .sort((a: Iproduct, b: Iproduct) => b.change.pct - a.change.pct)
          .slice(0, 6);

        setTopIncreaseRoute(filteredata);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // console.log(TopIncreaseRoute);

  return (
    <div>
      <section className="w-full py-12 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-7">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>আজ দাম বেড়েছে</span>
                <span className="text-[#ef4444] text-xl sm:text-2xl">▲</span>
              </h2>
            </div>
          </div>
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
              {TopIncreaseRoute.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FareIncreaseSection;
