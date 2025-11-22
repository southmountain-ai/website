// Import Page from people page to include people section, rename to avoid conflict
import { default as PeoplePage } from './people/page';
export default function Page() {
  return (
    <>
      <section className="prose">
        <h1>
          Southmountain Research
        </h1>
        <p className="mb-4">
          Southmountain Research, LLC is the contracting vehicle of <a href="https://justg.us">Dr. Gus Henry Smith</a>,
          providing research and development services
          in electronic design automation (EDA),
          hardware compilation,
          and AI.
        </p>
        <p>
          For contracting inquiries, contact Gus at <a href="mailto:gus@southmountain.ai">gus@southmountain.ai</a>.
        </p>

      </section>

      <section className="prose">
        <h2>Current Work</h2>

        <ul>
          <li><b>Open-source EDA contributions:</b> Gus is currently a part-time member of the <a href="https://www.yosyshq.com/">YosysHQ</a> team,
            working on open-source EDA tools for synthesis and verification of hardware designs.
          </li>
          <li><b>Research collaborations:</b> Gus maintains research collaborations
            with researchers at UC Santa Barbara and the University of Washington,
            advancing the state of the art in hardware compilation and EDA.
          </li>


        </ul>


      </section>
    </>
  )
}
