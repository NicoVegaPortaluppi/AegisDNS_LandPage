import { useEffect, useRef, useState } from "react";

const carouselImages = [
  {
    src: "src/images/AegisAnalyzer.png",
    alt: "Screenshot 1",
  },
  {
    src: "src/images/AegisAnalyzerThread.png",
    alt: "Screenshot 2",
  },
  {
    src: "src/images/AegisProtocolANimation.png",
    alt: "Screenshot 3",
  },
];

const features = [
  {
    title: "URL Analyzer",
    description:
      "AegisDNS includes an integrated analyzer to notify users of the security risks associated with the sites they access.",
    image: "src/images/AegisAnalyzer.png",
    imageAlt: "Feature 1",
  },
  {
    title: "AI Analysis",
    description:
      "The AegisDNS AI analysis is a highly effective tool for everyday users. It explains complex technical data in simple terms, making the application significantly more accessible to everyone.",
    image: "src/images/AegisAIAnalysis.jpeg",
    imageAlt: "Feature 2",
    reverse: true,
  },
  {
    title: "Packet Sniffer",
    description:
      "The packet sniffer graph is an additional functionality that works alongside the analyzer. It offers users the ability to easily observe their packet traffic and stay aware of any strange behavior.",
    image: "src/images/AegisPacketSniffer.jpeg",
    imageAlt: "Feature 3",
  },
  {
    title: "Broswer Extension",
    description:
      "The web extension is directly connected to the desktop application. It has three modes that allow users to personalize their experience with the extension.",
    image: "src/images/AegisPacketSniffer.jpeg",
    imageAlt: "Feature 3",
    reverse: true,
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ aspectRatio: "20/13" }}
      >
        <img
          src={carouselImages[current].src}
          alt={carouselImages[current].alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-[#3b82f6] scale-110" : "bg-[#334155]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureRow({ title, description, image, imageAlt, reverse }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 py-16 border-b border-[#1e293b] last:border-none`}
    >
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-[#3b82f6] mb-4">{title}</h3>
        <p className="text-[#cbd5e1] text-lg leading-relaxed">{description}</p>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt}
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-[#020817] text-white min-h-screen">
      {/* What is AegisDNS */}
      <section className="max-w-4xl mx-auto px-8 pt-16 pb-24">
        <h2 className="text-5xl font-bold text-center text-white mb-3">
          What is AegisDNS?
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] mx-auto rounded-full" />
        <p className="text-2xl font-medium text-white font-bold leading-relaxed text-justify mt-6">
          AegisDNS is a specialized browser extension designed to act as a
          digital shield, protecting users from malicious software and ensuring
          a safer internet experience. By intercepting connections in real-time,
          the software validates the safety of every destination before you even
          arrive.
        </p>
      </section>

      {/* Carousel */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <Carousel />
      </section>

      {/* Main Features */}
      <section className="max-w-5xl mx-auto px-8 pt-16 pb-24">
        <h2 className="text-5xl font-bold text-center text-white mb-3">
          Main Features
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] mx-auto rounded-full" />

        <div className="mt-6 font-bold text-3xl">
          {features.map((feature, i) => (
            <FeatureRow key={i} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
