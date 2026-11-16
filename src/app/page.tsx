
import AllProduct from '@/Components/AllProduct';
import FareDecreaseSection from '@/Components/FareDecreaseSection';
import FareIncreaseSection from '@/Components/FareIncreaseSection';
import HeroSection from '@/Components/Hero';



const page = () => {
  return (
    <div>
     <HeroSection />
     <FareIncreaseSection />
     <FareDecreaseSection />
     <AllProduct />
    </div>
  );
};

export default page;