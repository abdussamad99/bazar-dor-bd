
const FooterSection = () => {
    return(
         <footer className="w-full bg-slate-50 border-t border-slate-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-black text-center md:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>
        <div className="text-sm text-black text-center md:text-right">
        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>

      </div>
    </footer>
);
};

export default FooterSection;