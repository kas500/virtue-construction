"use client";

import Image from "next/image";

export default function Services() {
  return (
    <>
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Windows",
              desc: "Modern, energy-efficient designs.",
              icon: "/window.png",
            },
            {
              title: "Doors",
              desc: "Secure and stylish entryways.",
              icon: "/door.png",
            },
            {
              title: "Patio Doors",
              desc: "Expand and brighten your spaces.",
              icon: "/patio.png",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded shadow hover:shadow-lg transition p-6 text-center"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
