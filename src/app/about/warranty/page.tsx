
import Image from "next/image";
import { WarrantyForm } from "./warranty-form";

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

export default function WarrantyPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                             <h1 className="hero-heading uppercase">
                                GAF WARRANTY PROTECTION THAT LASTS
                            </h1>
                             <p className="hero-description mt-2">
                                Get peace of mind with GAF manufacturer warranties from US Roofing.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 p-8">
                             <div className="relative h-48 w-full">
                                <Image
                                    src={logoUrl}
                                    alt="GAF Manufacturer Warranties"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                             </div>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                                <h2 className="text-4xl font-bold text-white uppercase text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    GAF MANUFACTURER WARRANTIES
                                </h2>
                             </div>
                        </div>
                        <div className="prose max-w-none content-description">
                            <p>Protect your home investment with industry-leading GAF warranties, available from US Roofing. Serving Augusta and Savannah, we ensure every roof we install stands the test of time. Backed by America's top roofing manufacturer, our warranties offer trusted coverage for materials and workmanship. Whether it's a residential or commercial roof, our certified team guarantees professional installation that meets GAF's high standards.</p>
                            
                            <h3 className="content-heading uppercase mt-6 !mb-4">WHY CHOOSE A GAF MANUFACTURER WARRANTY?</h3>
                            <p>GAF warranties deliver unmatched protection and value. When US Roofing installs your roof, you're not just getting expert service—you're getting lasting assurance that your roof will endure harsh weather and daily wear for years to come.</p>
                            <ul className="list-disc list-inside my-4 space-y-2">
                                <li>Covers manufacturing defects</li>
                                <li>Backed by GAF's national reputation</li>
                                <li>Enhanced coverage with certified installation</li>
                                <li>Transferable to new homeowners</li>
                                <li>Peace of mind for years to come</li>
                                <li>Adds value to your home</li>
                                <li>Includes storm damage and leak protection options</li>
                            </ul>
                            
                            <p>With US Roofing, your roof is more than a structure—it's a promise of quality, durability, and long-term protection. We proudly offer services including roofing, storm damage repair, siding, gutters, and painting to keep your home looking and performing its best.</p>

                            <h3 className="content-heading uppercase mt-6 !mb-4">ACT NOW TO PROTECT YOUR HOME</h3>
                            <p>Don't wait for roof problems to appear. Secure your home with a GAF warranty today. Contact US Roofing in Augusta and Savannah to learn how you can benefit from this reliable protection. Ask about our flexible financing options, pre-season inspections, and loyalty rewards to make your roofing investment even smarter.</p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <WarrantyForm />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
