import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [contentToDisplay, setContentToDisplay] = useState("");
  const handleClick = (n) => {
    setContentToDisplay(n);
    console.log(contentToDisplay);
    // console.log(`${n} clicked`);
  };

  let tabContent = "Please select one";
  if (contentToDisplay) {
    tabContent = (
      <>
        <h3>{EXAMPLES[contentToDisplay].title}</h3>
        <p>{EXAMPLES[contentToDisplay].description}</p>
        <pre>
          <code>{EXAMPLES[contentToDisplay].code}</code>
        </pre>
      </>
    );
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={contentToDisplay === "components"}
                onClick={() => {
                  handleClick("components");
                }}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={contentToDisplay === "jsx"}
                onClick={() => {
                  handleClick("jsx");
                }}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={contentToDisplay === "props"}
                onClick={() => {
                  handleClick("props");
                }}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={contentToDisplay === "state"}
                onClick={() => {
                  handleClick("state");
                }}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
