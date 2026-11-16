import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";

const HeroSection = () => {
  const formattedDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="bg-[#f8fafc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Content Section */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <span className="inline-block bg-green-50 text-green-700 font-semibold text-xs px-3 py-1.5 rounded-md mb-4">
              স্বাগতম,
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* Button */}
            <Link
              href="/all-products"
              className="inline-block bg-[#0f9d58] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#05893E] transition-colors duration-200"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[350px] md:max-w-[450px]">
              <Image
                src={heroImage}
                alt="বাজারের পণ্য"
                className="object-contain w-full h-auto drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;