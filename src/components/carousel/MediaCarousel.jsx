import React from 'react';
import Slider from 'react-slick';

class MediaCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          <div>
            <iframe
              src="https://youtube.com/embed/QpnY1G3vt_0"
              frameborder="0"
              height="520"
              width="980"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://youtube.com/embed/yYjD78X1d9Q"
              frameborder="0"
              height="520"
              width="980"
            ></iframe>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          fade={true}
          dots={true}
        >
          <div>
            <img
              src="https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/194331/231.0x326.0/1031469_LB_231x326_en_US_%5E_2015-06-08-12-38-28_34137b019ffbf482edfea4910a792707153fea75.jpg"
              alt=""
              width="48"
              height="68"
            />
          </div>
          <div>
            <img
              src="https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/182633/231.0x326.0/1038862_LB_231x326_en_US_%5E_2016-07-21-10-11-54_1b27093a8723b707c8433a4aafc9203fd660d669.jpg"
              alt=""
              width="48"
              height="68"
            />
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

export default MediaCarousel;
