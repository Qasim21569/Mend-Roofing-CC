
import Image from "next/image";

const galleryData = [
  {
    category: "Roofing",
    images: [
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/975d091a-9998-4b48-bf85-3857e5373af3.jpg', alt: 'Roof Replacement' },
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/fb1989f6-2cdd-48ea-96de-fa90d1ec2fe1.jpg', alt: 'Roof Repair' },
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/b77cc554-44e4-48ff-8aaf-e361fb4876de.jpg', alt: 'Roof Types' },
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/1efb853b-8219-42ee-b99c-926bfdcadcf9.jpg', alt: 'Metal Roof' },
    ],
  },
  {
    category: "Commercial Roofing",
    images: [
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/83910682-4fce-48ad-8354-961d59094c90.jpg', alt: 'Commercial Roof Replacement' },
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/657498aa-b49b-4d46-8f68-bd950977c417.JPG', alt: 'Commercial Roof Repair' },
        { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/722e7e6e-43c7-4100-b2fa-6d06300e8944.JPG', alt: 'Commercial Roof Types' },
        { src: 'https://www.usroofing.us/img/page/hero-commercial.jpg', alt: 'Commercial roofing project' },
    ],
  },
    {
    category: "Storm Damage",
    images: [
      { src: "/images/storm-damage/Hail-damage/hail-damage1.png", alt: "Hail damage inspection" },
      { src: "/images/storm-damage/Insurance-claim/insurance-claim1.png", alt: "Insurance claim documentation" },
      { src: "/images/storm-damage/Hurricane-damage/hurricane-damage1.png", alt: "Hurricane roof damage assessment" },
      { src: "/images/storm-damage/why-storm-damage.png", alt: "Storm response team" },
    ],
  },
  {
    category: "Gutters",
    images: [
      { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/64d8bc84-0942-410e-9899-1eeb8cd02cc4.jpg', alt: 'Seamless Gutter Installation' },
      { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/ed070e30-e6e3-42b5-93f0-1ac2eeeac6c6.jpg', alt: 'Gutter guard on a roof' },
      { src: 'https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/c2124354-3645-4baa-aeaf-83239ab8a4b1.jpg', alt: 'Rain gutter on house' },
      { src: 'https://www.usroofing.us/img/page/hero-gutters.jpg', alt: 'High-efficiency gutters' },
    ],
  },
  {
    category: "Siding",
    images: [
      { src: "/images/siding/replacement/replacement1.png", alt: "Siding replacement project" },
      { src: "/images/siding/repair/repair1.png", alt: "Siding repair inspection" },
      { src: "/images/siding/types/types1.png", alt: "Siding type sample 1" },
      { src: "/images/siding/siding-hero-section.png", alt: "Siding installation services" },
    ],
  },
  {
    category: "Painting",
    images: [
      { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/2ac826a8-2598-4a2d-91ef-00d2fce21155.jpg", alt: "Exterior painting" },
      { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/medium/bba172a5-13a2-4d33-af2b-1a0c84c2b90a.jpg", alt: "Interior painting" },
      { src: "https://www.usroofing.us/img/page/hero-siding.jpg", alt: "Painting services hero" },
      { src: "https://cmsplatform.blob.core.windows.net/wwwusroofingus/gallery/thumbs/d239a155-7cb8-47ea-81c1-29df99e1d8d1.jpg", alt: "Painter on a ladder" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-left mb-12">
            <h1 className="hero-heading uppercase">
              GALLERY
            </h1>
          </div>
          <div className="space-y-12">
            {galleryData.map((category) => (
              <div key={category.category}>
                <h2 className="content-heading uppercase mb-4">{category.category}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.images.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
