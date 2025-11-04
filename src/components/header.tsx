
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    href: "/roofing",
    label: "Residential Roofing",
    subLinks: [
        { href: "/roofing/replacement", label: "Roof Replacement" },
        { href: "/roofing/tile-roofing", label: "Tile Roofing" },
        { href: "/roofing/gaf-roofing", label: "GAF Roofing" },
        { href: "/roofing/asphalt-shingles", label: "Asphalt Shingles" },
        { href: "/roofing/repair", label: "Roof Repair" },
        { href: "/roofing/types", label: "Roof Types" },
        { href: "/roofing/metal-roof", label: "Metal Roof" },
        { href: "/roofing/replacement-cost", label: "Roof Replacement Cost" },
    ]
  },
  {
    href: "/commercial-roofing",
    label: "Commercial Roofing",
    subLinks: [
      { href: "/commercial-roofing/replacement", label: "Roof Replacement" },
      { href: "/commercial-roofing/repair", label: "Roof Repair" },
      { href: "/commercial-roofing/types", label: "Roof Types" },
    ]
  },
  {
    href: "/storm-damage",
    label: "Storm Damage",
    subLinks: [
      { href: "/storm-damage/home-insurance-claims", label: "Insurance Claims" },
      { href: "/storm-damage/hail-damage", label: "Hail Damage" },
      { href: "/storm-damage/hurricane-damage", label: "Hurricane Damage" },
    ]
  },
  {
    href: "/about",
    label: "About",
    subLinks: [
      { href: "/about", label: "About Us" },
      { href: "/about/blog", label: "Blog" },
      { href: "/about/faqs", label: "FAQs" },
      { href: "/about/reviews", label: "Reviews" },
      { href: "/gallery", label: "Gallery" },
      { href: "/about/past-projects", label: "Past Projects" },
      { href: "/about/warranty", label: "Warranty" },
      { href: "/about/financing", label: "Financing" },
      { href: "/service-areas", label: "Service Areas" },
    ]
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

function MendRoofingLogo() {
  return (
    <Image 
        src="/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp" 
        alt="Mend Roofing - Repair, Restore, Protect"
        width={200}
        height={60}
        className="h-auto w-auto max-h-14"
        priority
    />
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-accent text-accent-foreground text-center p-2 text-sm">
      Serving Houston & Southeast Texas! <Link href="/service-areas" className="underline font-semibold">See if we service your area here!</Link>
      </div>
      <div
        className={cn(
          "transition-all duration-300 bg-primary",
          isScrolled ? "shadow-md" : ""
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <MendRoofingLogo />
          </Link>
          <nav className="hidden items-center gap-4 lg:flex flex-nowrap">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    <Link href={link.href} className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-white" prefetch={false}>
                      {link.label}
                    </Link>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-transparent hover:text-white">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 z-50 bg-white border border-gray-200 shadow-lg min-w-[250px] py-2">
                      {link.subLinks.map(subLink => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                          prefetch={false}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-white"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:346-236-3652" className="flex items-center gap-2 text-primary-foreground font-semibold whitespace-nowrap">
              <Phone className="h-5 w-5" />
              (346) 236-3652
            </a>
            <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800">
              <Link href="/contact">GET A FREE ESTIMATE</Link>
            </Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground p-0 flex flex-col">
                <SheetHeader className="p-6 pb-0 flex-shrink-0">
                    <SheetTitle>
                      <Link href="/" prefetch={false} onClick={() => setMobileMenuOpen(false)}>
                        <MendRoofingLogo />
                      </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-6 p-6">
                        <nav className="grid gap-4">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                            {link.subLinks ? (
                                <div className="space-y-2">
                                <div className="flex items-center justify-between w-full">
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium transition-colors hover:text-white flex-1"
                                        onClick={() => setMobileMenuOpen(false)}
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </Link>
                                    <button
                                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.label ? null : link.label)}
                                        className="p-2 -mr-2"
                                    >
                                        <ChevronRight 
                                        className={`h-4 w-4 transition-transform ${mobileOpenDropdown === link.label ? 'rotate-90' : ''}`} 
                                        />
                                    </button>
                                </div>
                                {mobileOpenDropdown === link.label && (
                                    <div className="pl-4 space-y-2">
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                        key={subLink.href}
                                        href={subLink.href}
                                        className="block text-sm text-primary-foreground/80 transition-colors hover:text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                        prefetch={false}
                                        >
                                        {subLink.label}
                                        </Link>
                                    ))}
                                    </div>
                                )}
                                </div>
                            ) : (
                                <Link
                                href={link.href}
                                className="text-lg font-medium transition-colors hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                                prefetch={false}
                                >
                                {link.label}
                                </Link>
                            )}
                            </div>
                        ))}
                        </nav>
                    </div>
                </div>
                <div className="p-6 pt-0 flex-shrink-0">
                    <a href="tel:346-236-3652" className="flex items-center gap-2 text-primary-foreground font-semibold text-lg mb-4">
                        <Phone className="h-5 w-5" />
                        (346) 236-3652
                    </a>
                    <Button asChild size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>GET A FREE ESTIMATE</Link>
                    </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
