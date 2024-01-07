const testimonials = [
  {
    body: "Phillip is amazing. He crafted a wonderful new site for us and supported us through the production process. We will definitely be using him again. Thank you!",
    author: {
      name: "Paolo Bugatto",
      position: "Creative Director at Sangfroid",
    },
  },

  {
    body: "Phillip did a great job finishing various details on my page. He answers quickly, communicates straight forward, brings in own ideas and: all together did an excellent job! Thank you so much!",
    author: {
      name: "Elke H.",
      position: "Marketer at authenticeco",
    },
  },
  {
    body: "Phillip was a fantastic help in building and launching our new website. I can only recommend him to anyone looking for a developer!",
    author: {
      name: "Philipp E.",
      position: "CTO at Culcha",
    },
  },
  {
    body: "Phillip is phenomenal, strong understanding of UX and and knows how to get the project done!",
    author: {
      name: "Richard C.",
      position: "Product Manager",
    },
  },
  {
    body: "He was an absolute life safer and has created the most beautiful website for my business (which has likely transformed by brand).",
    author: {
      name: "Khalid Tarabay",
      position: "Principal Legal Practioner",
    },
  },
  {
    body: "Really professional, very reliable and well talented. Philip helped us implement a complex website very quickly and efficiently. I strongly recommend him for any type of development project.",
    author: {
      name: "Baiju D.",
      position: "Technical Lead at potentiate",
    },
  },
]

export default function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            What My Clients Are Saying
          </p>
        </div>
        <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, id) => (
              <div
                key={id}
                className="pt-8 border-zinc-100 dark:border-zinc-700/40 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="p-8 text-sm leading-6 rounded-2xl">
                  <blockquote className="text-zinc-800 dark:text-zinc-100">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center mt-6 gap-x-4">
                    <div>
                      <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.author.position}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
