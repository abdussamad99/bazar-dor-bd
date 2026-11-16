# Bazar Dor BD 🛒

বাজার দর (Bazar Dor BD) হলো একটি আধুনিক ওয়েব অ্যাপ্লিকেশন, যা ব্যবহারকারীদের দৈনন্দিন প্রয়োজনীয় পণ্যের সর্বশেষ বাজার দর এক নজরে দেখতে সাহায্য করে।

## 🚀 ফিচারসমূহ (Features)

- **প্রোডাক্ট লিস্টিং:** ক্যাটাগরি অনুযায়ী পণ্যের দাম দেখার সুবিধা।
- **অথেনটিকেশন (Authentication):** Better Auth ব্যবহার করে সুরক্ষিত লগইন এবং রেজিস্ট্রেশন (ইমেইল ও গুগল সাইন-ইন)।
- **রুট প্রোটেকশন (Route Protection):** Next.js 16-এর নতুন `proxy.ts` (Middleware) ব্যবহার করে প্রোটেক্টেড রুট (যেমন: `/profile`, `/product`) সুরক্ষিত রাখা।
- **রেসপন্সিভ ডিজাইন:** মোবাইল, ট্যাবলেট এবং ডেস্কটপ—সব ডিভাইসে সুন্দরভাবে দেখার উপযোগী (Tailwind CSS ও HeroUI ব্যবহার করে তৈরি)।
- **টোস্ট নোটিফিকেশন:** সফল বা ব্যর্থ অ্যাকশনের জন্য `react-hot-toast` এর মাধ্যমে তাৎক্ষণিক ফিডব্যাক।

## 🛠️ টেক স্ট্যাক (Tech Stack)

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, HeroUI
- **Authentication:** Better Auth
- **Database:** (আপনার ব্যবহৃত ডাটাবেসের নাম দিন, যেমন: PostgreSQL / MongoDB)
- **Notifications:** React Hot Toast
- **Icons:** Lucide React
- **Deployment:** Vercel

## ⚙️ লোকাল সেটআপ (Local Setup)

প্রজেক্টটি আপনার লোকাল মেশিনে রান করতে নিচের ধাপগুলো অনুসরণ করুন:

### ১. রিপোজিটরি ক্লোন করুন
```bash
git clone https://github.com/your-username/bazar-dor-bd.git
cd bazar-dor-bd
