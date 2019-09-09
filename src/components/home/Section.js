import React, { Component } from "react";
import NWO from "../../assets/images/home/laptop-nwo.png";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="section-container">
        <div className="section-text">
          <h2>Remote desktop server</h2>
          <p>
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
            zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
            bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
            zethaak met letters nam en ze door elkaar husselde om een
            font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd
            maar is ook, vrijwel onveranderd, overgenomen in elektronische
            letterzetting. Het is in de jaren '60 populair geworden met de{" "}
          </p>
          <span>See all projects</span>
          
          <div class="section-button">
            <p>Read more</p>
          </div>
          
        </div>

        <div className="section-image">
          <img id="nwo-laptop-image" src={NWO} />

          {/* <div id="nwo-laptop-image-wrapper"> 
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Section;
