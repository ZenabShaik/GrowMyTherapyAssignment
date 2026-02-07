import Image from "next/image";

export default function Approach() {
  return (
    <section className="bg-[#DCDDE4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 lg:px-20">

        {/* LEFT — TEXT */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3F4358] leading-tight mb-6">
            Therapy that helps you feel safe, understood, and supported
          </h2>

          <p className="text-[#5C6076] leading-relaxed mb-5">
            Beginning therapy can feel vulnerable—especially when you’re carrying
            anxiety, emotional overwhelm, or uncertainty about where to start.
            My work centers on creating a space where you feel heard, respected,
            and never rushed.
          </p>

          <p className="text-[#5C6076] leading-relaxed mb-8">
            Together, we’ll explore what’s been holding you back, build insight
            and emotional balance, and develop practical tools that support
            meaningful change—at a pace that feels right for you.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center border-b border-[#C6B874] text-sm tracking-wide text-[#3F4358] hover:opacity-70 transition"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* RIGHT — IMAGES */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Main ARCH IMAGE */}
          <div className="w-[300px] sm:w-[360px] md:w-[420px] h-[460px] md:h-[520px] overflow-hidden rounded-t-full">
            <Image
              src="/images/two.jpg"
              alt="A calm, reflective moment representing emotional safety and trust"
              width={420}
              height={520}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping CIRCLE IMAGE */}
          <div className="absolute -bottom-8 right-4 sm:right-8 w-[160px] sm:w-[180px] h-[160px] sm:h-[180px] rounded-full overflow-hidden border border-[#B5B7C3] bg-white">
            <Image
              src="/images/one.jpg"
              alt="Therapeutic conversation symbolizing presence and care"
              width={180}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
