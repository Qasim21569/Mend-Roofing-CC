
import Image from "next/image";
import { FinancingForm } from "./financing-form";

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS3.png?alt=media&token=1e778559-5ca2-4999-b705-015633edea42";

export default function FinancingPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                             <h1 className="hero-heading uppercase">
                                FLEXIBLE FINANCING THAT FITS YOUR BUDGET
                            </h1>
                             <p className="hero-description mt-2">
                                Affordable home upgrades made easy with US Roofing.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 p-8">
                             <div className="relative h-48 w-full">
                                <Image
                                    src={logoUrl}
                                    alt="Flexible Financing"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                             </div>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                                <h2 className="text-4xl font-bold text-white uppercase text-center" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                                    FLEXIBLE FINANCING
                                </h2>
                             </div>
                        </div>
                        <div className="prose max-w-none content-description">
                            <p>Need a new roof but worried about the cost? US Roofing helps homeowners and businesses in Augusta and Savannah get the improvements they need without financial stress. Our flexible financing options let you spread out payments, so you don't have to delay vital roofing, siding, or storm repairs.</p>
                            <p>We work with trusted lenders to offer financing plans that are simple, affordable, and fast to approve. Whether you're planning a major roof replacement or tackling storm damage, we make it easier to manage your budget while improving your property's safety and value.</p>
                            
                            <h3 className="content-heading uppercase mt-6 !mb-4">WHY CHOOSE US ROOFING FINANCING?</h3>
                            <p>Our flexible payment plans are built around your needs. We want to help you protect your home today without the burden of up-front costs.</p>
                            <ul className="list-disc list-inside my-4 space-y-2">
                                <li>Fast, easy approvals</li>
                                <li>Low monthly payment options</li>
                                <li>Plans for all credit levels</li>
                                <li>No prepayment penalties</li>
                                <li>Use for roofing, gutters, siding, painting & more</li>
                                <li>Combine with other offers or discounts</li>
                            </ul>
                            
                            <p>With services like storm damage repair, commercial roofing, and full exterior upgrades, we're here to help you move forward—without financial roadblocks.</p>

                            <h3 className="content-heading uppercase mt-6 !mb-4">LET'S MAKE YOUR PROJECT HAPPEN</h3>
                            <p>Now is the time to invest in your home without compromise. Contact US Roofing in Augusta and Savannah today to learn about our financing options. Ask how you can pair financing with pre-season inspection credits, loyalty rewards, or manufacturer warranties to make your home improvement more affordable and stress-free.</p>
                        </div>
                    </div>

                    <div className="sticky top-24">
                       <FinancingForm />
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
