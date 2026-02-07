import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-[#DCDDE4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* LEFT — CONTENT */}
          <div className="max-w-xl mx-auto text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#3F4358]">
              Build a life that feels steady and meaningful.
            </h2>

            <p className="text-[#5C6076] leading-relaxed">
              Life can feel overwhelming when you’re navigating anxiety,
              responsibilities, or major life transitions.
            </p>

            <p className="text-[#5C6076] leading-relaxed">
              Therapy offers a supportive space to slow down, gain clarity, and
              develop tools to move forward with confidence.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block border-b border-[#C6B874] text-sm tracking-wide text-[#3F4358] hover:opacity-70 transition"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[560px] overflow-hidden">
            <Image
              src="/images/intro.png"
              alt="A calm, supportive therapy moment reflecting clarity and emotional grounding"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
