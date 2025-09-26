
import Link from "next/link";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { Star } from "lucide-react";

function GoodGuysLogo() {
  return (
    <Image 
        src="https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS4.png?alt=media&token=bf7dfedc-1dd6-40ea-9b4e-89df016a0a81" 
        alt="Good Guys Logo"
        width={200}
        height={50}
        className="h-auto"
    />
  );
}

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></svg>
)

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 4.5 4 7 4h10c2.5 0 4.5 2 4.5 3.5v10c0 1.5-2 3.5-4.5 3.5H7c-2.5 0-4.5-2-4.5-3.5z"/><path d="m10 15 5-3-5-3z"/></svg>
)

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" id="about">
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <GoodGuysLogo />
                </Link>
                <p className="text-sm text-primary-foreground/80">
                    Providing top-quality roofing services for residential and commercial properties. Our commitment is to quality, reliability, and customer satisfaction.
                </p>
                </div>
                <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                    <li><Link href="/" className="text-sm text-primary-foreground/80 hover:text-accent" prefetch={false}>Home</Link></li>
                    <li><Link href="/#services" className="text-sm text-primary-foreground/80 hover:text-accent" prefetch={false}>Services</Link></li>
                    <li><Link href="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent" prefetch={false}>Gallery</Link></li>
                    <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent" prefetch={false}>Contact</Link></li>
                </ul>
                </div>
                <div>
                <h3 className="mb-4 text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                    <li><span className="text-sm text-primary-foreground/80">Roof Installation</span></li>
                    <li><span className="text-sm text-primary-foreground/80">Roof Repair</span></li>
                    <li><span className="text-sm text-primary-foreground/80">Commercial Roofing</span></li>
                    <li><span className="text-sm text-primary-foreground/80">Siding & Gutters</span></li>
                </ul>
                </div>
                <div>
                <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                <address className="space-y-2 text-sm not-italic text-primary-foreground/80">
                    <p>Fort Worth, Texas (Serving Tarrant, Johnson, and Parker counties)</p>
                    <p>Email: <a href="mailto:[Your Email Address]" className="hover:text-accent">[Your Email Address]</a></p>
                    <p>Phone: <a href="tel:817-233-4524" className="hover:text-accent">817-233-4524</a></p>
                </address>
                </div>
            </div>
             <div className="mt-12 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" className="h-6 w-6"><path d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z" fill="#fff" /></svg>
                    <div className="flex text-yellow-400">
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                        <Star fill="currentColor" className="w-5 h-5" />
                    </div>
                </div>
                 <p className="text-sm mt-2 text-center text-primary-foreground/80">
                    4.8 out of 5 <br/>
                    Out of 291 Google Reviews
                </p>
            </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-sm text-primary-foreground/60">&copy; {new Date().getFullYear()} Good Guys. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-primary-foreground/80 hover:text-accent" aria-label="Facebook" prefetch={false}><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent" aria-label="Google" prefetch={false}><GoogleIcon /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent" aria-label="YouTube" prefetch={false}><YoutubeIcon /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent" aria-label="Instagram" prefetch={false}><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
