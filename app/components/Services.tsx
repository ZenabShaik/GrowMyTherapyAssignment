import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-[#E2E3EB] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3F4358]">
            Areas of Focus
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Anxiety & Stress */}
          <div className="bg-[#F7F7FA] p-12 flex flex-col items-center text-center space-y-6">
            <div className="w-[220px] h-[220px] overflow-hidden rounded-full mb-4">
              <Image
                src="/images/stresss.jpg"
                alt="A calm moment representing support for anxiety and stress"
                width={220}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-serif text-[#3F4358]">
              Anxiety & Stress
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              When anxiety or chronic stress starts to shape your daily life,
              therapy can help you slow things down, understand your patterns,
              and develop practical tools to feel more grounded and in control.
            </p>
          </div>

          {/* Life Transitions */}
          <div className="bg-[#F7F7FA] p-12 flex flex-col items-center text-center space-y-6">
            <div className="w-[220px] h-[220px] overflow-hidden rounded-full mb-4">
              <Image
                src="/images/life.jpg"
                alt="A reflective moment symbolizing life transitions"
                width={220}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-serif text-[#3F4358]">
              Life Transitions
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              Career changes, relationship shifts, and major life transitions
              can bring uncertainty and self-doubt. Therapy offers space to
              process change, reconnect with your values, and move forward
              with clarity.
            </p>
          </div>

          {/* Identity & Self-Exploration */}
          <div className="bg-[#F7F7FA] p-12 flex flex-col items-center text-center space-y-6">
            <div className="w-[220px] h-[220px] overflow-hidden rounded-full mb-4">
              <Image
                src="/images/explore.jpg"
                alt="A warm, grounded scene representing identity and self-exploration"
                width={220}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-serif text-[#3F4358]">
              Identity & Self-Exploration
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              Therapy can be a place to explore who you are, what matters to you,
              and how past experiences shape your present. Together, we’ll work
              toward greater self-understanding and a more authentic life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
