import React, { Component } from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import developer from "../../assets/images/home/developer.gif";
import innovative from "../../assets/images/home/innovative2.svg";
import ValueCards from "./ValueCards";
import Fade from "react-reveal/Fade";
import DescriptionDiv from "./DescriptionDiv";

class Section5 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    AOS.init();
  }

  render() {

      const services = {
          title:"Get in touch with us.",
          text:"See what we can mean for you and your company"
      }


    return (
      <div className="section-container beautiful-blue">
        <div className="section-wrapper flex-column ">
            <div className="contact-section">
                <div style={{paddingTop:"50px"}}>
                    <h1 style={{maxWidth: "90%", margin: "auto"}}>{services.title}</h1>
                    <p style={{
                        width: "700px",
                        margin: "auto",
                        maxWidth: "90%"
                    }}>{[services.text]}</p>
                </div>                <form class="form">
                <input type="email" class="form__field" placeholder="Your E-Mail Address" />
                <button type="button" class="btn btn--primary btn--inside uppercase">Contact</button>
                </form>


            </div>

               

        </div>
      </div>
    );
  }
}

export default Section5;
