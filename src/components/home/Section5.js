import React, { Component } from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import developer from "../../assets/images/home/developer.gif";
import innovative from "../../assets/images/home/innovative2.svg";
import ValueCards from "./ValueCards";
import Fade from "react-reveal/Fade";

class Section5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word:"developers",
      image:developer,
      color:"#FF8080"
    
    };
  }

  changeView = (name, image, color) => {
      this.setState({word:name, image:image, color:color});
      this.forceUpdate();
  }

  activeLink = () => {


  }




  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="section-container beautiful-blue">
        <div className="section-keyword" style={{justifyContent:"center"}}><p>CONTACT</p></div>
        <div className="section-wrapper flex-column ">
            <div className="contact-section">
                <h2> Get in touch and discover <br/> what we can mean for you</h2>

                <form class="form">
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
