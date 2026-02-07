const posts = [
  {
    title: "When anxiety feels constant",
    excerpt:
      "Understanding why anxiety can feel ever-present—and how therapy helps create space for relief.",
    image: "/images/stress.jpg",
  },
  {
    title: "Navigating life transitions with steadiness",
    excerpt:
      "Why major changes can unsettle us, and how slowing down can restore a sense of grounding.",
    image: "/images/explore.jpg",
  },
  {
    title: "What emotional regulation actually means",
    excerpt:
      "A gentle look at emotional regulation and why it’s not about control, but awareness.",
    image: "/images/hands.png",
  },
  {
    title: "Is therapy right for me?",
    excerpt:
      "Common questions people have before starting therapy—and what to consider.",
    image: "/images/intro.png",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-[#F7F7FA] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 grid gap-20 md:grid-cols-2">

        {posts.map((post, index) => (
          <article key={index} className="space-y-6">

            {/* IMAGE — NO CROPPING */}
            <div className="w-full bg-[#E6E7EE] rounded-md flex items-center justify-center p-4">
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[280px] w-auto object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-md">
              <h3 className="text-2xl font-serif text-[#3F4358] mb-2">
                {post.title}
              </h3>

              <p className="text-[#5C6076] leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#3F4358] border-b border-[#C6B874] hover:opacity-70 transition"
              >
                Read article →
              </a>
            </div>

          </article>
        ))}

      </div>
    </section>
  );
}
