export default function SocialSection() {
  return (
    <section className="bg-[#7F82A3] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-4xl font-serif text-[#F7F7FA] mb-6">
          An environment designed for care and presence
        </h3>

        <p className="max-w-xl text-[#F7F7FA]/80 mb-16">
          Each element of the therapeutic space is chosen to support comfort,
          focus, and a sense of emotional ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/images/office1.jpeg"
            alt="Therapy office interior"
            className="w-full h-[420px] object-cover rounded-lg md:col-span-2"
          />
          <img
            src="/images/c2.jpg"
            alt="Therapeutic conversation"
            className="w-full h-[420px] object-cover rounded-lg"
          />
          <img
            src="/images/cc3.jpg"
            alt="Calming workspace detail"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  )
}
