
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
// import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const HospitalCard = () => {

    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    }


    return (
        <section className="hospital-card">
            {/* <button type="button" className="left-right-btn">
                <IoMdArrowDropleftCircle className="left-right-arrow" />
            </button> */}
            <div className="container all-cards">
                <Slider {...settings}  >
                    <div className="cards">
                        <figure>
                            <img src="hospital-image-1.jpg" alt="hospital image" className="hospital-image" />
                        </figure>
                        <div className="card-content">
                            <p className="content-heading">Sunrise City Hospital, Mumbai</p>
                            <p className="content-para">Comprehensive emergency and trauma care with specialized cardiac and orthopedic services.</p>
                            <div className="content-bottom">
                                <div className="rating">
                                    <p>Rating:<span>4.5</span></p>
                                    <div className="star">star</div>
                                </div>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <figure>
                            <img src="hospital-image-2.jpg" alt="hospital image" className="hospital-image" />
                        </figure>
                        <div className="card-content">
                            <p className="content-heading">Green Leaf Clinic, Mumbai</p>
                            <p className="content-para">Leading women and child care center with experienced pediatric and gynecology specialists.</p>
                            <div className="content-bottom">
                                <div className="rating">
                                    <p>Rating:<span>4.2</span></p>
                                    <div className="star">star</div>
                                </div>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <figure>
                            <img src="hospital-image-3.jpg" alt="hospital image" className="hospital-image" />
                        </figure>
                        <div className="card-content">
                            <p className="content-heading">Hopewell  Center, Mumbai</p>
                            <p className="content-para">24/7 patient care with advanced diagnostics and multispecialty services for all age groups.</p>
                            <div className="content-bottom">
                                <div className="rating">
                                    <p>Rating:<span>4.3</span></p>
                                    <div className="star">star</div>
                                </div>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <figure>
                            <img src="hospital-image-4.jpg" alt="hospital image" className="hospital-image" />
                        </figure>
                        <div className="card-content">
                            <p className="content-heading">Lifeline Super Speciality</p>
                            <p className="content-para">Best-in-class surgery and post-operative care with a dedicated intensive care unit.</p>
                            <div className="content-bottom">
                                <div className="rating">
                                    <p>Rating:<span>4.7</span></p>
                                    <div className="star">star</div>
                                </div>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <figure>
                            <img src="hospital-image-5.jpg" alt="hospital image" className="hospital-image" />
                        </figure>
                        <div className="card-content">
                            <p className="content-heading">Apollo Care Hospital, Mumbai</p>
                            <p className="content-para">Internationally accredited, known for organ transplant and minimally invasive procedures.</p>
                            <div className="content-bottom">
                                <div className="rating">
                                    <p>Rating:<span>4.6</span></p>
                                    <div className="star">star</div>
                                </div>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            {/* <button type="button" className="left-right-btn">
                <IoMdArrowDroprightCircle className="left-right-arrow" />
            </button> */}
        </section>
    );
}