
export type Offer = {
    slug: string;
    title: string;
    description: string;
    linkText: string;
    shortTitle: string;
    subtitle: string;
    image: string;
    content: string;
};

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/jackpot-jungle-c1020.firebasestorage.app/o/GOODGUYS3.png?alt=media&token=1e778559-5ca2-4999-b705-015633edea42";

export const offerData: Offer[] = [
    {
        slug: "1000-off-roof-replacement",
        title: "$1,000 OFF ROOF REPLACEMENT",
        description: "GET $1,000 OFF A NEW ROOF. US Roofing makes roof replacement more affordable than ever.",
        linkText: "LEARN MORE ABOUT DISCOUNT",
        shortTitle: "Learn More About Discount",
        subtitle: "US Roofing makes roof replacement more affordable than ever.",
        image: logoUrl,
        content: `
            <p>Ready for a new roof? Now's the perfect time. US Roofing is offering $1,000 off full roof replacements for homeowners and businesses in Augusta and Savannah. Whether it's due to age, storm damage, or a fresh upgrade, this offer helps you save while protecting what matters most.</p>
            <p>Our experienced team installs top-quality roofing systems with precision and care. From asphalt shingles to metal roofs, we use durable materials and expert craftsmanship to give you long-lasting results backed by warranty coverage.</p>
            <h3 class="content-heading uppercase mt-6 mb-2">WHY CHOOSE US ROOFING FOR ROOF REPLACEMENT?</h3>
            <p>We make the process stress-free, affordable, and reliable. With this limited-time discount, there's never been a better time to act.</p>
            <ul class="list-disc list-inside my-4 space-y-2 content-description">
                <li>$1,000 off full roof replacements</li>
                <li>Fast, clean, professional installation</li>
                <li>GAF and Worthouse warranty options</li>
                <li>Available for residential & commercial roofs</li>
                <li>Storm damage assessment & insurance help</li>
                <li>Flexible financing options available</li>
            </ul>
            <p>We also offer services like gutter upgrades, siding replacement, and exterior painting to complete your home's transformation. Every project is managed with care and attention to detail.</p>
            <h3 class="content-heading uppercase mt-6 mb-2">ACT NOW AND SAVE BIG</h3>
            <p>Don't wait—this $1,000 roof replacement offer is for a limited time. Contact US Roofing in Augusta and Savannah today to schedule your free estimate. Ask how to combine this offer with financing plans, loyalty rewards, and inspection credits for even more value. Let's give your home the protection and look it deserves—at a price you'll love.</p>
        `
    },
    {
        slug: "pre-season-inspection-credit",
        title: "PRE-SEASON INSPECTION + REPAIR CREDIT",
        description: "Get ahead of roof damage and save with US Roofing.",
        linkText: "LEARN MORE ABOUT OFFER",
        shortTitle: "Learn More About Offer",
        subtitle: "Get ahead of roof damage and save with US Roofing.",
        image: logoUrl,
        content: `
            <p>Prepare your home for any season with a professional inspection. For a limited time, get a comprehensive roof inspection and receive a credit towards any necessary repairs. This proactive approach helps you identify potential issues before they become costly problems.</p>
            <h3 class="content-heading uppercase mt-6 mb-2">WHAT'S INCLUDED?</h3>
            <ul class="list-disc list-inside my-4 space-y-2 content-description">
                <li>Thorough multi-point roof inspection</li>
                <li>Detailed report on your roof's condition</li>
                <li>Credit applied to any repair service</li>
                <li>Peace of mind knowing your roof is sound</li>
            </ul>
        `
    },
    {
        slug: "community-hero-discount",
        title: "COMMUNITY HERO DISCOUNT",
        description: "Special discounts for those who serve our Augusta and Savannah communities.",
        linkText: "LEARN MORE ABOUT DISCOUNT",
        shortTitle: "Learn More About Discount",
        subtitle: "A thank you to our local heroes.",
        image: logoUrl,
        content: `
            <p>We're proud to support our local heroes. Active military, veterans, first responders, and teachers are eligible for an exclusive discount on all our services. It's our way of saying thank you for your dedication and service to our community.</p>
             <h3 class="content-heading uppercase mt-6 mb-2">WHO IS ELIGIBLE?</h3>
            <ul class="list-disc list-inside my-4 space-y-2 content-description">
                <li>Active Military & Veterans</li>
                <li>Police, Firefighters, and EMTs</li>
                <li>K-12 Teachers</li>
            </ul>
            <p>Please present a valid ID to claim your discount. Thank you for your service!</p>
        `
    },
    {
        slug: "flexible-financing",
        title: "FLEXIBLE FINANCING",
        description: "FLEXIBLE FINANCING THAT FITS YOUR BUDGET. Affordable home upgrades made easy with US Roofing.",
        linkText: "LEARN MORE ABOUT FINANCING",
        shortTitle: "Learn More About Financing",
        subtitle: "Affordable home upgrades made easy.",
        image: logoUrl,
        content: `
            <p>Don't let budget constraints delay your home improvement project. We offer a variety of flexible financing options with competitive rates to make your dream project a reality. Our team will work with you to find a plan that fits your budget.</p>
            <h3 class="content-heading uppercase mt-6 mb-2">FINANCING BENEFITS:</h3>
            <ul class="list-disc list-inside my-4 space-y-2 content-description">
                <li>Low monthly payments</li>
                <li>Simple application process</li>
                <li>Quick approval decisions</li>
                <li>No-penalty early payoff options</li>
            </ul>
        `
    },
    {
        slug: "gaf-manufacturer-warranties",
        title: "GAF MANUFACTURER WARRANTIES",
        description: "GAF WARRANTY PROTECTION THAT LASTS. Get peace of mind with GAF manufacturer warranties from US Roofing.",
        linkText: "LEARN MORE ABOUT WARRANTY",
        shortTitle: "Learn More About GAF Warranty",
        subtitle: "Protection that lasts.",
        image: logoUrl,
        content: `
            <p>As a GAF Master Elite Contractor, we are authorized to offer the most robust warranties in the industry. Protect your investment with a GAF warranty, covering both materials and workmanship for years of worry-free performance.</p>
            <p>Choose from a range of warranty options to find the perfect level of coverage for your new roof. Our team will explain all the details and help you register your warranty upon project completion.</p>
        `
    },
    {
        slug: "worthouse-warranties",
        title: "WORTHOUSE WARRANTIES",
        description: "WORTHOUSE WARRANTY FOR LASTING CONFIDENCE. Durable, stylish roofing backed by a strong manufacturer warranty.",
        linkText: "LEARN MORE ABOUT WARRANTY",
        shortTitle: "Learn More About Worthouse Warranty",
        subtitle: "Lasting confidence for your roof.",
        image: logoUrl,
        content: `
            <p>Experience the strength and beauty of a Worthouse metal roof, backed by one of the best warranties available. Worthouse warranties provide extensive coverage against manufacturing defects, ensuring your roof looks and performs great for decades.</p>
            <p>Our team is fully trained in Worthouse installation techniques, guaranteeing your warranty eligibility and giving you total confidence in your new roof.</p>
        `
    },
];
