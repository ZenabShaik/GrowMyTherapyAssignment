import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="bg-[#DCDDE4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3F4358] leading-tight mb-6">
            A calm, grounded space in Santa Monica
          </h2>

          <p className="text-[#5C6076] leading-relaxed text-lg">
            From the moment you arrive, the space is designed to help you slow
            down. My Santa Monica office is quiet, private, and intentionally
            arranged to feel calm, welcoming, and emotionally safe.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — VISUAL STORY */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/office1.jpeg"
                alt="Calm therapy office in Santa Monica filled with natural light"
                width={900}
                height={520}
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Supporting Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/office2.jpeg"
                  alt="Private counseling room designed for comfort and reflection"
                  width={400}
                  height={300}
                  className="w-full h-[240px] object-cover"
                />
              </div>

              <div className="bg-[#F7F7FA] rounded-lg flex items-center px-8">
                <p className="text-[#5C6076] leading-relaxed">
                  A space created to support focus, reflection, and a sense of
                  ease throughout your session.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="max-w-xl space-y-8">
            <h3 className="text-2xl font-serif text-[#3F4358]">
              What clients often notice
            </h3>

            <ul className="space-y-5 text-[#5C6076] leading-relaxed">
              <li>— A quiet, private setting where conversations feel contained and unhurried</li>
              <li>— Natural light and a clean, uncluttered environment</li>
              <li>— Comfortable seating designed to support long, thoughtful sessions</li>
              <li>— A strong emphasis on privacy, comfort, and emotional safety</li>
            </ul>

            <p className="pt-6 text-[#5C6076] leading-relaxed">
              In-person sessions are available in Santa Monica. Secure telehealth
              sessions are also offered throughout California, providing
              flexibility while maintaining the same thoughtful, grounded
              approach to care.
            </p>

            {/* Soft CTA */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center border-b border-[#C6B874] text-sm tracking-wide text-[#3F4358] hover:opacity-70 transition"
              >
                Schedule a consultation →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
