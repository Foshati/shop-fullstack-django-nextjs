import PriceStart from "@/components/pricing/priceStart";
import { PriceTable } from "@/components/pricing/priceTable";

export default function PageName() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-20 space-y-12">
        <PriceStart/>
        <PriceTable/>
    </div>
  )
}