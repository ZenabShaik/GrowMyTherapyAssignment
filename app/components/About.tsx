import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#DCDDE4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-md">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="bg-[#F7F7FA] px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div className="max-w-xl mx-auto text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#3F4358]">
                Hi, I’m Dr. Maya Reynolds.
              </h2>

              <p className="text-[#5C6076] leading-relaxed">
                I’m a licensed clinical psychologist based in Santa Monica,
                California, supporting adults who feel overwhelmed by anxiety,
                burnout, trauma, or major life changes.
              </p>

              <p className="text-[#5C6076] leading-relaxed">
                Therapy with me is collaborative, thoughtful, and grounded.
                I take time to understand your experiences, respect your pace,
                and work with you to create meaningful, sustainable change—
                not quick fixes or one-size-fits-all solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
