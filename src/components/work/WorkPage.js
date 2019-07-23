import React, {Component} from 'react';
import AOS from 'aos';
import Image from "../../assets/images/work/form/building.jpg";
import Carousel from '@brainhubeu/react-carousel'
import Fade from "react-reveal/Fade";

class WorkPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {


        return (
            <div className="work-page-wrapper">
                <div className="work-page-section">
                    <div className="work-page-text-wrapper">
                        <Fade delay={2000} left>
                            <h1 className="slide-left"> A dedicted server using linux counterparts</h1>
                        </Fade>
                        <Fade up delay={2500}>
                            <div className="work-page-text">
                                <p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem
                                    Ipsum
                                    is de
                                    standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende
                                    drukker
                                    een
                                    zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                                    Het
                                    heeft
                                    niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
                                    elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met
                                    de
                                    textductie van
                                    Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
                                    software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <Fade up delay={2700}>
                        <div className="work-page-text-image-container">
                            <img src={Image} className="work-page-text-image"/>
                        </div>
                    </Fade>
                </div>

                <Fade   bottom>
                    <div className="work-page-section">

                        <div className="work-page-text-image-container work-page-image-slider">
                            <Carousel
                                arrowLeft={<p>""</p>}
                                arrowRight={<p>></p>}
                                addArrowClickHandler
                                infinite
                                slidesPerPage={1}
                                slidesPerScroll={1}
                            >
                                <img src={Image} data-aos-duration="1000"
                                     data-aos-easing="ease-in-out" data-aos='fade-in'
                                     className="work-page-text-image "/>
                            </Carousel>


                        </div>
                        <div style={{backgroundColor:"black"}} className="work-page-text-wrapper work-padding">

                            <h1> A dedicted server using linux counterparts</h1>
                            <div className="work-page-scroll">
                                <p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem
                                    Ipsum
                                    is de
                                    standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende
                                    drukker
                                    een
                                    zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                                    Het
                                    heeft
                                    niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
                                    elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met
                                    de
                                    textductie van
                                    Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
                                    software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                                    zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                                    Het
                                    heeft
                                    niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
                                    elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met
                                    de
                                    textductie van
                                    Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
                                    software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default WorkPage;