"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Chip } from "@heroui/react";
import Link from "next/link";

const LIVE_FARES = [
  {
    id: 1,
    nameBn: "স্বর্ণমাছি চাল",
    unit: "kg",
    image: "🍚",
    today: "148",
    change: { dir: "up", pct: "2.1%" },
  },
  {
    id: 2,
    nameBn: "মিনিকেট চাল",
    unit: "kg",
    image: "🍚",
    today: "99",
    change: { dir: "down", pct: "-2.9%" },
  },
  {
    id: 3,
    nameBn: "নাজির চাল",
    unit: "kg",
    image: "🍚",
    today: "74",
    change: { dir: "flat", pct: "0%" },
  },
  {
    id: 4,
    nameBn: "বাটাম সাইজ চাল",
    unit: "kg",
    image: "🍚",
    today: "66",
    change: {
      dir: "up",
      pct: "3.1%",
    },
  },
  {
    id: 5,
    nameBn: "মসুর ডাল",
    unit: "kg",
    image: "🫘",
    today: "180",
    change: {
      dir: "up",
      pct: "2.9%",
    },
  },
  {
    id: 6,
    nameBn: "মুগ ডাল",
    unit: "kg",
    image: "🫘",
    today: "135",
    change: {
      dir: "flat",
      pct: "0%",
    },
  },
  {
    id: 7,
    nameBn: "আমন ডাল (খোসাসিলা)",
    unit: "kg",
    image: "🫘",
    today: "156",
    change: {
      dir: "up",
      pct: "2.6%",
    },
  },
  {
    id: 8,
    nameBn: "পাম তেল",
    unit: "kg",
    image: "🛢️",
    today: "168",
    change: {
      dir: "down",
      pct: "-2.3%",
    },
  },
  {
    id: 9,
    nameBn: "ঘানি ভাঙা সরিষার তেল",
    unit: "litre",
    image: "🛢️",
    today: "215",
    change: {
      dir: "up",
      pct: "2.4%",
    },
  },
  {
    id: 10,
    nameBn: "আলু",
    unit: "kg",
    image: "🥔",
    today: "30",
    change: {
      dir: "down",
      pct: "-6.2%",
    },
  }, // 👈 এই কমাটি নিশ্চিত করুন
  {
    id: 11,
    nameBn: "পেঁয়াজ",
    unit: "kg",
    image: "🧅",
    today: "54",
    change: {
      dir: "up",
      pct: "12.5%",
    },
  },
  {
    id: 12,
    nameBn: "রুই মাছ",
    unit: "kg",
    image: "🐟",
    today: "46",
    change: {
      dir: "up",
      pct: "4.5%",
    },
  },
  {
    id: 13,
    nameBn: "ইলিশ মাছ",
    unit: "kg",
    image: "🐠",
    today: "650",
    change: {
      dir: "up",
      pct: "3.4%",
    },
  },
  {
    id: 14,
    nameBn: "চিংড়ি মাছ (খোলা)",
    unit: "kg",
    image: "🦐",
    today: "330",
    change: {
      dir: "up",
      pct: "3.1%",
    },
  },
  {
    id: 15,
    nameBn: "মুরগির মাংস",
    unit: "kg",
    image: "🍗",
    today: "225",
    change: {
      dir: "down",
      pct: "-1.3%",
    },
  },
  {
    id: 16,
    nameBn: "গরুর মাংস",
    unit: "kg",
    image: "🥩",
    today: "790",
    change: {
      dir: "down",
      pct: "-1.2%",
    },
  },
];

export default function Marque() {
  return (
    <div className="w-full bg-[#0b1324] text-white flex items-center h-11 overflow-hidden border-b border-slate-800">
      {/* Scrolling Marquee Section */}
      <Marquee
        pauseOnHover={true}
        speed={45}
        gradient={false}
        className="flex items-center h-full overflow-hidden"
      >
        {LIVE_FARES.map((item) => {
          const isUp = item.change.dir === "up";
          const isDown = item.change.dir === "down";

          return (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="flex items-center gap-2 mx-3 px-3 py-1 rounded-lg hover:bg-slate-800/80 transition-colors whitespace-nowrap text-xs sm:text-sm"
            >
              {/* Product Icon */}
              <span className="text-base leading-none">{item.image}</span>

              {/* Product Name */}
              <span className="font-bold text-white">{item.nameBn}</span>



              {/* Today's price */}
              <span className="font-bold text-[#fbbf24]">
                {item.today} টাকা
              </span>

              {/* Price Change Chip */}
              <Chip
                size="sm"
                className={`px-2 py-0.5 h-5 rounded-full text-[11px] font-bold flex items-center gap-0.5 ${isUp
                  ? "bg-[#ffe4e6] text-[#e11d48]"
                  : isDown
                    ? "bg-[#d1fae5] text-[#059669]"
                    : "bg-slate-200 text-slate-700"
                  }`}
              >
                {isUp && "▲ "}
                {isDown && "▼ "}
                {!isUp && !isDown && "— "}
                {item.change.pct}
              </Chip>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}