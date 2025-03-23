import CTABanner from "@/components/cta-banner";
import FAQ06 from "@/components/faq/faq";
import Features from "@/components/features/features";
import { Gallery } from "@/components/Gallery/Gallery";
import Hero from "@/components/hero/hero";
import ProductsList from "@/components/ProductsList/ProductsList";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <>
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <Features />
        <FAQ06 />
        <Gallery/>
<ProductsList/>
<Testimonials />

        <CTABanner/>
      </main>
    </>
  );
}