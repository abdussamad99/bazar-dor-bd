import Link from "next/link";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center space-y-4">
        <span className="text-6xl block">🗺️</span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="text-sm text-slate-500 max-w-md mx-auto">
          আপনি যে পেজটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে, অথবা লিংকটি ভুল।
          অনুগ্রহ করে হোম পেজে ফিরে যান এবং আবার চেষ্টা করুন।
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;












