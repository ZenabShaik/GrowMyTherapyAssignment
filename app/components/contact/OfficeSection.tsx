export default function OfficeSection() {
  return (
    <section className="bg-[#C9CBD6] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — DETAILS */}
        <div>
          <h3 className="text-4xl font-serif text-[#3F4358] mb-8">
            My Office
          </h3>

          <p className="text-[#5C6076] mb-6">
            123 West Street, Suite 45<br />
            Santa Monica, CA 90401
          </p>

          <h4 className="text-2xl font-serif text-[#3F4358] mb-4">
            Hours
          </h4>

          <p className="text-[#5C6076] mb-8">
            Monday – Friday<br />
            10:00 am – 6:00 pm
          </p>

          <p className="max-w-sm text-[#5C6076] leading-relaxed">
            The office is a quiet, private space designed to feel calm and
            grounding, with natural light, comfortable seating, and an
            intentionally uncluttered environment to support emotional safety.
          </p>
        </div>

        {/* RIGHT — MAP */}
        <div className="w-full h-[340px] rounded-lg overflow-hidden shadow-sm bg-[#F7F7FA]">
          <iframe
            className="w-full h-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=Santa%20Monica%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
        </div>

      </div>
    </section>
  )
}
