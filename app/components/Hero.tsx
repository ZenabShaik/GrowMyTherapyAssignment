import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#DCDDE4] min-h-[100svh] overflow-hidden pt-18 lg:pt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] items-center gap-16 lg:gap-24">

          {/* LEFT — HERO IMAGE */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-none">
            <div
              className="
                relative
                w-[280px] h-[380px]
                sm:w-[340px] sm:h-[440px]
                md:w-[400px] md:h-[520px]
                lg:w-[520px] lg:h-[640px]
                rounded-t-full
                overflow-hidden
                bg-[#C9CBD6]
              "
            >
              <Image
                src="/images/hero.jpg"
                alt="Calm therapy office with natural light and a welcoming, private setting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="max-w-xl md:max-w-lg order-2 text-center lg:text-left">
            <p className="tracking-widest text-[10px] sm:text-xs text-[#6B6F85] mb-4 sm:mb-5">
              INDIVIDUAL THERAPY • IN-PERSON & VIRTUAL
            </p>

            <h1
              className="
                font-serif
                text-3xl
                sm:text-4xl
                md:text-[42px]
                lg:text-5xl
                text-[#2F3347]
                leading-snug
                mb-5
              "
            >
              Find steadiness when life feels overwhelming
            </h1>

            <p className="text-[#5C6076] text-sm sm:text-base leading-relaxed mb-8">
              Through thoughtful, evidence-based therapy, I help adults work
              through anxiety, emotional overwhelm, and major life transitions
              in a calm, supportive space where you can slow down, reflect, and
              begin to feel like yourself again.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="
                  bg-[#E6D89A]
                  text-[#2F3347]
                  border border-[#C6B874]
                  px-6 sm:px-7
                  py-3
                  text-sm
                  hover:opacity-90
                  transition
                "
              >
                Start Your Healing →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
