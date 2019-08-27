import React from 'react';
import Slider from 'react-slick';
import '../../css/style.css';

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
    const { fifa, unravel } = this.props.gameData;
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'videoPlayer'
    };

    const settings2 = {
      slidesToShow: 3,
      swipeToSlide: true,
      focusOnSelect: true,
      fade: true,
      className: 'thumbnail',
      arrows: false
    };
    return (
      <React.Fragment>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          <div className="video-container">
            <iframe
              src={`https://youtube.com/embed/${unravel.videoId}`}
              frameBorder="0"
              className="youtube-video"
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              src={`https://youtube.com/embed/${fifa.videoId}`}
              frameBorder="0"
              className="youtube-video"
            ></iframe>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          {...settings2}
        >
          <div>
            <img
              className="thumbnail-icon"
              src={unravel.gameIcon}
              alt={unravel.gameLabel}
              width="48"
              height="68"
            />
          </div>
          <div>
            <img
              className="thumbnail-icon"
              src={fifa.gameIcon}
              alt={fifa.gameLabel}
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
