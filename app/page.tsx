const publications = [
  {
    title: 'Improving Equality Saturation for EDA via Semantic E-Graphs.',
    venue: 'To appear at PLDI 2026.',
    authors: [
      'Sijie Kong',
      'Jingtao Xia',
      'Daniel Ruelas-Petrisko',
      'Zachary D. Sisco',
      'Jonathan Balkind',
      'Gus Henry Smith.',
    ],
  },
  {
    title: 'Fungible Memories for Automated Technology Mapping and Retargeting.',
    venue: 'To appear at PLDI 2026.',
    authors: [
      'Zachary D. Sisco',
      'Sijie Kong',
      'Daniel Ruelas-Petrisko',
      'Jingtao Xia',
      'Julian Springer',
      'Varun Rao',
      'Spencer Wang',
      'Gus Henry Smith',
      'Ben Hardekopf',
      'Jonathan Balkind.',
    ],
  },
  {
    title: 'Implementing Cache Coherence with Coroutines: A Case Study.',
    venue: 'LATTE 2026.',
    authors: [
      'Andrew David Alex',
      'Jingtao Xia',
      'Gus Henry Smith',
      'Rachit Nigam',
      'Jonathan Balkind',
      'Gilbert Bernstein.',
    ],
  },
  {
    title: 'DUET: Agentic Design Understanding via Experimentation and Testing.',
    venue: 'DVCon 2026.',
    authors: [
      'Gus Henry Smith',
      'Sandesh Adhikary',
      'Vineet Thumuluri',
      'Vivek Pandit',
      'Kartik Hegde',
      'Hamid Shojaei',
      'Chandra Bhagavatula.',
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="prose">
        <h1>
          Southmountain Research
        </h1>
        <p className="mb-4">
          Southmountain Research, LLC is the (currently inactive)
          contracting vehicle of <a href="https://justg.us">Gus Henry Smith, Ph.D.</a>,
          providing research and development services
          in electronic design automation (EDA),
          hardware compilation,
          and AI.
          So far, Southmountain Research has been involved in the following projects:
        </p>

        <p>
          <b>Open-source EDA contributions:</b> Gus was a member of the <a href="https://www.yosyshq.com/">YosysHQ</a> team,
            working on open-source EDA tools for synthesis and verification of hardware designs.
        </p>
        <p>
          <b>Research collaborations:</b> Through research collaborations
            with researchers at UC Santa Barbara and the University of Washington,
          Gus continued to
          advance the state of the art in AI and programming languages techniques for hardware compilation and EDA.
          This led to the following papers:
        </p>


        <div className="space-y-6">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="pl-4 -indent-2"
            >
              <em>{publication.title}</em>
              {' '}
              {publication.venue}
              {' '}
              {publication.authors.map((author, index) => (
                <span key={author}>
                  {index > 0 ? ', ' : ''}
                  {author.replace(/\.$/, '') === 'Gus Henry Smith' ? <b>{author}</b> : author}
                </span>
              ))}
            </article>
          ))}
        </div>
        <p>
          You can contact Gus at <a href="mailto:gus@southmountain.ai">gus@southmountain.ai</a>.
        </p>
      </section>
    </>
  )
}
