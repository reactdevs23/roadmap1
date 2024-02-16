import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    heading: "STRATEGY",
    headingColor: "#155EEF",
    title: "Product Vision Roadmap",
    titleColor: "#000",
    line: "2px solid #d0d5dd",
    data: [
      {
        label: "Strategy",
        color: "#fff",
        bg: "#2970FF",

        children: [
          {
            label: "Validation",
            color: "#000",
            bg: "#84ADFF",

            children: [
              {
                label: "Problem discovery",
                color: "#000",
                bg: "#B2CCFF",

                children: [
                  { label: "Clear hypothesis", color: "#000", bg: " #EFF4FF" },
                  { label: "Small steps", color: "#000", bg: " #EFF4FF" },
                  { label: "Low cost", color: "#000", bg: " #EFF4FF" },
                ],
              },
              {
                label: "User testing",
                color: "#000",
                bg: "#B2CCFF",
                children: [
                  { label: "Focus Group", color: "#000", bg: " #EFF4FF" },
                  { label: "User dairy", color: "#000", bg: " #EFF4FF" },
                  { label: "User interview", color: "#000", bg: " #EFF4FF" },
                ],
              },
              {
                label: "Stakeholder playback",
                color: "#000",
                bg: "#B2CCFF",
              },
            ],
          },
          {
            label: "Break-down",
            color: "#000",
            bg: "#84ADFF",
            children: [
              {
                label: "MVC",
                color: "#000",
                bg: "#B2CCFF",
                children: [
                  {
                    label: "Test fast, fail fast",
                    color: "#000",
                    bg: " #EFF4FF",
                  },
                ],
              },
              {
                label: "Resources",
                color: "#000",
                bg: "#B2CCFF",
              },
              {
                label: "Dependencies",
                color: "#000",
                bg: "#B2CCFF",
              },
              {
                label: "Measure Success",
                color: "#000",
                bg: "#B2CCFF",
                children: [
                  { label: "Main metrics", color: "#000", bg: " #EFF4FF" },
                  {
                    label: "User behaviour metrics",
                    color: "#000",
                    bg: " #EFF4FF",
                  },
                ],
              },
              { label: "Stakeholder buy-in", color: "#000", bg: "#B2CCFF" },
            ],
          },
          {
            label: "Prioritization",
            color: "#000",
            bg: "#84ADFF",
            children: [
              {
                label: "Impact ",
                color: "#000",
                bg: "#B2CCFF",
                children: [
                  { label: "User satisfaction", color: "#000", bg: " #EFF4FF" },

                  { label: "Business gain", color: "#000", bg: " #EFF4FF" },
                ],
              },
              {
                label: "Feasibility and effort",
                color: "#000",
                bg: "#B2CCFF",
                children: [
                  { label: "Sketch", color: "#000", bg: " #EFF4FF" },

                  { label: "Prototyping", color: "#000", bg: " #EFF4FF" },
                ],
              },
            ],
          },
          {
            label: "Roadmap",
            color: "#000",
            bg: "#84ADFF",
            children: [
              { label: "Outcome, OKRs", color: "#000", bg: "#B2CCFF" },
              { label: "Timeline", color: "#000", bg: "#B2CCFF" },
            ],
          },
        ],
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
