import React, {Component} from 'react';
import AOS from 'aos';
import Image from "../../assets/images/work/form/building.jpg";
import Carousel from '@brainhubeu/react-carousel'

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
                    <div className="work-page-text">

                        <h1> A dedicted server using linux counterparts</h1>

                        <p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
                            standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
                            zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft
                            niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
                            elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met de
                            textductie van
                            Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
                            software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                        </p>
                    </div>
                    <div className="work-page-text-image-container">
                        <img src={Image} className="work-page-text-image"/>
                    </div>
                </div>

                <div className="work-page-section">

                    <div className="work-page-text-image-container work-page-image-slider">
                        <Carousel
                            arrows
                            infinite
                            autoPlay={6000}
                            animationSpeed={2000}
                            slidesPerPage={1}
                            slidesPerScroll={1}
                        >
                            <img src={Image} data-aos='image-slide'
                                 className="work-page-text-image "/>
                        </Carousel>


                    </div>
                    <div className="work-page-text work-padding">
                        <div data-aos='image-slide'>


                            <h1> A dedicted server using linux counterparts</h1>
                        <div className="work-page-scroll">
                            <p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum
                                is de
                                standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker
                                een
                                zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het
                                heeft
                                niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
                                elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met de
                                textductie van
                                Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
                                software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkPage;
