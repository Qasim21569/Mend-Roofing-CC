
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const logoUrl = "/Mend Logo/Mend-Roofing-Logo-white-border-10px.webp";

export function CommunityInvolvement() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src={logoUrl}
              alt="Habitat for Humanity Logo"
              width={400}
              height={150}
              className="object-contain"
            />
          </div>
          <div>
            <p className="content-heading uppercase text-destructive mb-2">
              COMMUNITY INVOLVEMENT
            </p>
            <h2 className="hero-heading text-primary mb-4">
              GIVING BACK TO Houston, TX
            </h2>
            <p className="content-description text-muted-foreground mb-6 max-w-lg">
              We're proud to support communities in our area by partnering with
              Habitat for Humanity of Houston, TX, helping build a neighborhood
              that's ready for a more empowering future.
            </p>
            <Link href="#" className="flex items-center gap-2 text-destructive font-semibold hover:underline">
              <CheckCircle className="h-5 w-5" />
              <span>Habitat for Humanity of Houston, TX</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
