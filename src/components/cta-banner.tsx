
import { Button } from './ui/button';
import Link from 'next/link';

type CtaBannerProps = {
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CtaBanner({ 
  text = "TRUST US WHEN YOUR ROOF IS DAMAGED",
  buttonText = "CONTACT US",
  buttonHref = "#contact"
}: CtaBannerProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center md:text-left">
            {text}
          </h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 shrink-0"
          >
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


