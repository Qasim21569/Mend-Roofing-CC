
import { ShieldCheck, Award, Users, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const indicators = [
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    heading: "TOP OF THE LINE PROFESSIONALS"
  },
  {
    icon: <Award className="h-12 w-12" />,
    heading: "HIGHLY SKILLED ROOFERS"
  },
  {
    icon: <Users className="h-12 w-12" />,
    heading: "INDUSTRY-LEADING WARRANTIES"
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    heading: "A LOCAL ROOFING COMPANY YOU CAN TRUST"
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 text-primary">
                  {indicator.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-foreground" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>
                  {indicator.heading}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


