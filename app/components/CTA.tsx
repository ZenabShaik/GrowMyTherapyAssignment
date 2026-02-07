export default function CTA() {
  return (
    <section className="bg-[#7C7FA3] lg:bg-[#787CA0] py-40 text-center text-[#F7F7FA]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-serif font-normal mb-6">
          Ready to begin?
        </h2>

        <p className="text-sm sm:text-base text-[#F7F7FA]/90 leading-relaxed mb-12">
          If you’re considering therapy, you don’t need to have everything
          figured out. Reaching out can be a gentle first step toward support,
          clarity, and meaningful change.
        </p>

        <button className="inline-flex items-center gap-2 border border-[#F7F7FA] px-10 py-3 text-sm tracking-wide transition hover:bg-[#F7F7FA] hover:text-[#7C7FA3]">
          Get in touch
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
