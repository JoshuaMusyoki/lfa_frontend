"use client";
import Image from "next/image";
import ServiceImg1 from '../../../public/images/image1.png';
import ServiceImg2 from '../../../public/images/image2.png';
import ServiceImg3 from '../../../public/images/image3.png';
import ServiceImg4 from '../../../public/images/image4.png';

export default function ServicesSection() {
  // Array of service images and descriptions
  const services = [
    { image: ServiceImg1, description: "Civic Education" },
    { image: ServiceImg2, description: "Organizing Charity Activities/Events" },
    { image: ServiceImg3, description: "Training the Youths on Technical Skills" },
    { image: ServiceImg4, description: "Community Engagements" },
  ];

  return (
    <section className="relative flex flex-col md:flex-row rounded-[20px] items-center justify-between py-16 bg-white text-center">
      <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 items-center justify-center">
          Make A Difference is a dynamic and dedicated foundation committed to fostering sustainable
          development, empowering communities, and igniting positive change across the African continent.
          With a profound belief in the potential of Africa and its people, Make A Difference strives
          to be a catalyst for progress, innovation, and transformation.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 w-full md:w-1/2 justify-center md:justify-start">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-64 bg-gray-300 rounded-md overflow-hidden flex flex-col items-center text-center"
          >
            <div className="relative w-full h-64 flex items-center justify-center">
              <Image
                src={service.image}
                alt={`Service ${index + 1}`}
                fill
                objectFit="cover"
                className="absolute top-10 left-0 w-32 h-32 items-center justify-center rounded-[10px] object-cover"
                priority
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
