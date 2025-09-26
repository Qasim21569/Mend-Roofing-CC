import { GetStarted } from "@/components/get-started";

export default function SidingReplacementCostPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-heading uppercase">
            SIDING REPLACEMENT COSTS IN FORT WORTH
          </h1>
          <p className="hero-description max-w-4xl mx-auto mt-4">
            Learn what impacts siding replacement costs in your area.
          </p>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 items-start gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="content-heading uppercase">
                  Cost of Siding Replacement
                </h2>
                <p className="content-description">
                  Siding is your home’s first line of defense against the elements. In Fort Worth, TX, where heat, hail, and storm activity are frequent concerns, maintaining your siding is essential. If your siding is warped, cracked, or faded, replacement is likely needed—and understanding the costs involved can help you plan wisely.
                </p>
                <p className="content-description">
                  At Good Guys Roofing, we specialize in high-quality siding replacement tailored to the architectural styles and weather demands of Fort Worth. The cost of siding replacement can vary based on materials (vinyl, fiber cement, wood), square footage, removal of old siding, and labor complexity.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="content-heading">
                  What Influences the Price of Siding Replacement?
                </h3>
                <p className="content-description">Here are key factors that affect siding replacement cost in Fort Worth, TX:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Material Selection:</strong> Vinyl is cost-effective, while fiber cement offers more durability but higher upfront costs.
                  </li>
                  <li>
                    <strong>Labor Costs:</strong> Two-story homes or those with intricate layouts may increase labor expenses.
                  </li>
                  <li>
                    <strong>Weather Damage:</strong> Siding compromised by storms or water infiltration may require additional structural repair before new installation.
                  </li>
                  <li>
                    <strong>Energy Efficiency Upgrades:</strong> Adding insulation under new siding can improve energy savings but adds to the initial investment.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="content-heading">
                  Why Siding Replacement Matters in This Market
                </h3>
                <p className="content-description">Homeowners in Fort Worth, TX see several advantages to investing in siding replacement:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Improved Energy Efficiency:</strong> Well-installed siding reduces heat gain during hot Texas summers.
                  </li>
                  <li>
                    <strong>Curb Appeal:</strong> Fresh siding boosts resale value and makes your home stand out.
                  </li>
                  <li>
                    <strong>Moisture Protection:</strong> High humidity and storm events make moisture-resistant siding a must.
                  </li>
                  <li>
                    <strong>Storm Readiness:</strong> Durable siding materials offer better protection from wind and rain during storm season.
                  </li>
                </ul>
              </div>
            </div>

            <div className="sticky top-24">
              <GetStarted subtitle="Refresh your home's look—use inspection credit. Schedule your siding estimate!" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
