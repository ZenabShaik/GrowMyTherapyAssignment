export default function BookingSection() {
  return (
    <section className="bg-[#F7F7FA] py-28 text-center">
      <h2 className="text-4xl font-serif text-[#3F4358] mb-6">
        Book an appointment
      </h2>

      <p className="max-w-2xl mx-auto text-[#5C6076] mb-12 leading-relaxed">
        I offer both in-person therapy sessions in Santa Monica and secure
        telehealth appointments across California. You’re welcome to begin with
        a complimentary 15-minute consultation to explore whether working
        together feels like the right fit.
      </p>

      <button
        className="px-10 py-4 border border-[#C6B874] bg-[#E6D89A] text-[#2F2F3A] hover:bg-[#D8CA86] transition"
      >
        Schedule a Consultation
      </button>

      <p className="text-xs mt-12 text-[#5C6076]">
        Powered by Acuity Scheduling
      </p>
    </section>
  )
}
