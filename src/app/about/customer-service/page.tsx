
import { CustomerServiceForm } from "./customer-service-form";

export default function CustomerServicePage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <div className="mb-12">
                    <h1 className="hero-heading uppercase">
                        GOOD GUYS CUSTOMER SERVICE
                    </h1>
                </div>
                <div className="w-full max-w-2xl">
                   <CustomerServiceForm />
                </div>
            </div>
        </section>
      </div>
    );
}
