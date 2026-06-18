"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PartnerPanelProps } from "./PartnerPanel.types";
import { Media } from "@/payload-types";

export default function PartnerPanel({ partners }: PartnerPanelProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div
        className="max-w-7xl mx-auto"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {partners.map((partner) => {
            const isHovered = hoveredId === partner.id;
            const logoUrl =
              typeof partner.logo === "string"
                ? partner.logo
                : partner.logo.url;
            const imageUrl =
              typeof partner.image === "string"
                ? partner.image
                : partner.image.url;
            const imageAlt =
              typeof partner.image === "string"
                ? partner.name
                : partner.image.alt || partner.name;

            return (
              <div
                key={partner.id}
                className="relative group"
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative overflow-hidden rounded-lg transition-all duration-400 cursor-pointer"
                  style={{
                    transform: isHovered
                      ? "scale(1.05)"
                      : "rotateY(15deg) skewY(-3deg)",
                    transformStyle: "preserve-3d",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onClick={() => {
                    if (partner.url) {
                      window.location.href = partner.url;
                    }
                  }}
                >
                  {/* Background Image */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={imageUrl || "/placeholder.jpg"}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Partner Logo and Name */}
                  <div className="absolute top-6 left-6 z-10">
                    {logoUrl && (
                      <div className="relative w-24 h-24 mb-3 bg-white/90 rounded-lg p-2 backdrop-blur-sm">
                        <Image
                          src={logoUrl}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain p-2"
                          sizes="96px"
                        />
                      </div>
                    )}
                    <h3 className="text-white font-bold text-2xl drop-shadow-lg">
                      {partner.name}
                    </h3>
                  </div>

                  {/* Explore Button - Fade in on hover */}
                  <div
                    className="absolute bottom-6 left-6 right-6 z-10 transition-opacity duration-[400ms]"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <Link
                      href={partner.url}
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Explore
                    </Link>
                  </div>

                  {/* Description on hover */}
                  {partner.description && (
                    <div
                      className="absolute bottom-20 left-6 right-6 z-10 transition-opacity duration-[400ms]"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <p className="text-white text-sm drop-shadow-lg line-clamp-2">
                        {partner.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
