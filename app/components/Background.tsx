export default function Background() {
  return (
    <section className="bg-[#DCDDE4] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl font-serif text-[#3F4358] mb-6">
            Professional Background
          </h2>
          <p className="text-[#5C6076] leading-relaxed">
            My training and experience are grounded in evidence-based practice,
            thoughtful collaboration, and a deep respect for each client’s
            lived experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Education */}
          <div className="bg-[#F7F7FA] border border-[#B5B7C3] p-10">
            <h3 className="text-xl font-serif text-[#3F4358] mb-4">
              Education
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              Ph.D. in Clinical Psychology, with advanced training in assessment,
              therapeutic intervention, and research-informed care for adults.
            </p>
          </div>

          {/* Licensure */}
          <div className="bg-[#F7F7FA] border border-[#B5B7C3] p-10">
            <h3 className="text-xl font-serif text-[#3F4358] mb-4">
              Licensure
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              Licensed Clinical Psychologist in the state of California,
              practicing in accordance with ethical standards and professional
              guidelines.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-[#F7F7FA] border border-[#B5B7C3] p-10">
            <h3 className="text-xl font-serif text-[#3F4358] mb-4">
              Certifications & Training
            </h3>

            <p className="text-[#5C6076] leading-relaxed">
              Ongoing training in trauma-informed care, cognitive behavioral
              therapy, and mindfulness-based approaches to support lasting,
              meaningful change.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
