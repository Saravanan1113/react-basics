import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

          {CORE_CONCEPTS.map((i) => (
            <CoreConcept key={i.title} {...i} />
          ))}
        </ul>
      </section>
    </>
  );
}
