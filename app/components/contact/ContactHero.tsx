export default function ContactHero() {
  return (
    <section className="bg-[#DCDDE4] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — INTRO */}
        <div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#3F4358] mb-8">
            Let’s connect.
          </h1>

          <p className="text-[#5C6076] mb-4">
            Starting therapy is a courageous step.
          </p>

          <p className="max-w-xl text-[#5C6076] leading-relaxed">
            I’m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in
            Santa Monica, California. I work with adults navigating anxiety,
            stress, burnout, and the lingering impact of past experiences.
          </p>

          {/* Decorative imagery (intentional + minimal) */}
          <div className="mt-12 flex items-end gap-6 opacity-90">

            {/* IMAGE 1 — Emotional portrait */}
            <div className="w-48 h-48 rounded-full overflow-hidden bg-[#E6E7EE]">
              {/* Replace src with: /images/c1.jpg */}
              <img
                src="/images/two.jpg"
                alt="Calm reflective portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 — Soft detail / nature */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[#E6E7EE]">
              {/* Replace src with: /images/contact-hero-2.jpg */}
              <img
                src="/images/cc3.jpg"
                alt="Natural light detail"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* RIGHT — NOTE */}
        <div className="bg-[#C9CBD6] p-10 max-w-md">
          <p className="uppercase text-xs tracking-widest text-[#3F4358] mb-4">
            Please note
          </p>
          <p className="text-[#5C6076] leading-relaxed">
            For privacy and confidentiality, I don’t use standard contact forms.
            To get in touch, please schedule a consultation or reach out through
            the secure client portal.
          </p>
        </div>

      </div>
    </section>
  );
}
