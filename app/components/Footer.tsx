export default function Footer() {
  return (
    <footer className="bg-[#C9CBD6] text-[#5C6076]">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand / Contact */}
        <div>
          <h4 className="text-[#3F4358] text-xl font-serif mb-4">
            Dr. Maya Reynolds
          </h4>

          <p className="leading-relaxed">
            Private Therapy Practice<br />
            Minneapolis, MN
          </p>

          <p className="mt-4">
            <a
              href="mailto:contact@mayareynoldstherapy.com"
              className="underline hover:opacity-70 transition"
            >
              contact@mayareynoldstherapy.com
            </a>
          </p>

          <p className="mt-1">(555) 555-5555</p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[#3F4358] text-xl font-serif mb-4">
            Hours
          </h4>

          <p>Monday – Friday</p>
          <p>10:00 am – 6:00 pm</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#3F4358] text-xl font-serif mb-4">
            Explore
          </h4>

          <ul className="space-y-2">
            <li>
              <a href="/" className="underline hover:opacity-70 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="underline hover:opacity-70 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/resources" className="underline hover:opacity-70 transition">
                Resources
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#B5B7C3]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-[#2F2F3A]">

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a className="underline hover:opacity-70 transition">
              Privacy & Cookie Policy
            </a>
            <a className="underline hover:opacity-70 transition">
              Good Faith Estimate
            </a>
            <a className="underline hover:opacity-70 transition">
              Website Terms & Conditions
            </a>
            <a className="underline hover:opacity-70 transition">
              Disclaimer
            </a>
          </div>

          <p className="opacity-80">
            Website Template Credits: Go Bloom Creative
          </p>
        </div>
      </div>
    </footer>
  );
}
