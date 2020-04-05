import React from "react";
import BigBen from "./BigBen";
import ThankYou from "./ThankYou";
import "./scss/index.scss";

const App = () => (
  <>
    <ThankYou />
    <section className="sky">
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
    </section>
    <section className="layer-1">
      <div className="building building-1"></div>
      <div className="building building-2"></div>
      <div className="building building-3"></div>
      <div className="building building-4"></div>
      <div className="building flats"></div>
      <div className="tower-bridge">
        <div className="tower-bridge__left"></div>
        <div className="tower-bridge__right"></div>
        <div className="tower-bridge__parts"></div>
      </div>
    </section>
    <section className="layer-2">
      <div className="london-eye">
        <div className="stand"></div>
      </div>
      <div className="building building-1"></div>
      <div className="building building-2"></div>
      <div className="building building-3"></div>
      <div className="building building-4"></div>
      <div className="building flats-2"></div>
    </section>
    <section className="layer-3">
      <div className="westminster">
        <div className="beam"></div>
      </div>
      <BigBen />
      <div className="building building-3"></div>
      <div className="building building-4"></div>
    </section>
    <section className="layer-4">
      <div className="layer-4-overlay"></div>
      <div className="gherkin">
        <div className="gherkin__stripe"></div>
        <div className="gherkin__stripe"></div>
        <div className="gherkin__stripe"></div>
        <div className="gherkin__stripe"></div>
        <div className="gherkin__top"></div>
      </div>
    </section>
  </>
);

export default App;
