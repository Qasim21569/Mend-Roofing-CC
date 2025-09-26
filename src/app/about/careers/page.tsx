
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function CareersPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h1 className="hero-heading uppercase">
                        GOOD GUYS CAREERS
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <div className="space-y-6">
                        <p className="content-description max-w-xl">
                            Before we can ensure the high standards of our quality services, we first have to build a team of reliable and dedicated professionals. Every Good Guys employee is an ambassador of our core values and is devoted to ensuring customer satisfaction. If you're interested in a career with Good Guys, please review our positions below.
                        </p>
                    </div>
                    <div>
                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                Currently we have no positions available. Please check back soon.
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
