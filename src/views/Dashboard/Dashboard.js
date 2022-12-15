import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Button,
  Input,
  Col,
  Row,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

import HomeCarousel from "react-bootstrap/Carousel";

import ReactPlayer from "react-player";
import {dataSelector} from "../../modules/app";
import about from "../../assets/img/photos/about.png";

import bandsintown from "../../assets/img/icons/bandsintown.svg";
import facebook from "../../assets/img/icons/facebook.svg";
import instagram from "../../assets/img/icons/instagram.svg";
import music from "../../assets/img/icons/music.svg";
import songkick from "../../assets/img/icons/songkick.svg";
import sound_cloud from "../../assets/img/icons/sound_cloud.svg";
import spotify from "../../assets/img/icons/spotify.svg";
import twitter from "../../assets/img/icons/twitter.svg";
import youtube from "../../assets/img/icons/youtube.svg";

const contactItems = [
  {
    category: "General Manager",
    name: "Cameron Gibson",
    email: "cameron@jamfeed.com",
  },
  {
    category: "Press Contact",
    name: "Cameron Gibson",
    email: "cameron@jamfeed.com",
  },
  {
    category: "Booking Agent",
    name: "Cameron Gibson",
    email: "cameron@jamfeed.com",
  },
];

const mapStateToProps = state => ({
  data: dataSelector(state),
});

const enhance = connect(mapStateToProps);

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.next1 = this.next1.bind(this);
    this.previous1 = this.previous1.bind(this);
    this.goToIndex1 = this.goToIndex1.bind(this);
    this.onExiting1 = this.onExiting1.bind(this);
    this.onExited1 = this.onExited1.bind(this);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      activeIndex: 0,
      activeIndex1: 0,
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.data.videoItems.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.data.videoItems.length - 1
        : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  onExiting1() {
    this.animating1 = true;
  }

  onExited1() {
    this.animating1 = false;
  }

  goToIndex1(newIndex) {
    if (this.animating1) return;
    this.setState({activeIndex1: newIndex});
  }

  next1() {
    if (this.animating1) return;
    const nextIndex =
      this.state.activeIndex1 === this.props.data.musicItems.length - 1
        ? 0
        : this.state.activeIndex1 + 1;
    this.setState({activeIndex1: nextIndex});
  }

  previous1() {
    if (this.animating1) return;
    const nextIndex =
      this.state.activeIndex1 === 0
        ? this.props.data.musicItems.length - 1
        : this.state.activeIndex1 - 1;
    this.setState({activeIndex1: nextIndex});
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  render() {
    const {data} = this.props;
    const {activeIndex, activeIndex1} = this.state;

    const homeSlides = data.homeSlideItems.map((item, index) => {
      return (
        <HomeCarousel.Item key={index}>
          <img className="d-flex align-items-center justify-content-center w-100" src={item.img} alt="" />
        </HomeCarousel.Item>
      );
    });

    const slides1 = data.musicItems.map((items, index) => {
      return (
        <CarouselItem onExiting={this.onExiting1} onExited={this.onExited1} key={index}>
          <Row className="music-items">
            {items.map((item, index1) => {
              return (
                <Col md="4" key={index1}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="music-item">
                      <img src={item.img} alt="" />
                      <div className="title">{item.title}</div>
                    </div>
                  </a>
                </Col>
              );
            })}
          </Row>
        </CarouselItem>
      );
    });

    const slides2 = data.videoItems.map((items, index) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={index}>
          <Row className="video-items">
            {items.map((item, index1) => {
              return (
                <Col md="6" key={index1}>
                  <div className="video-item">
                    <div className="player-wrapper">
                      <ReactPlayer
                        url={item.url}
                        width="100%"
                        height="100%"
                        className="react-player"
                      ></ReactPlayer>
                    </div>
                    <div className="title">{item.title}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <section id="home">
          <HomeCarousel>{homeSlides}</HomeCarousel>
        </section>
        <section id="news">
          <Container>
            <h2>News</h2>
            {data.newsItems.map((item, index) => {
              return (
                <Row className="news-item" key={index}>
                  <Col md="6" sm="12">
                    <img src={item.img} alt="" />
                  </Col>
                  <Col md="6" sm="12" className="text-center">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                    <div className="read-more">
                      <Button color="dark" outline className="btn-pill read-more">
                        Read More
                      </Button>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
        <section id="tour">
          <Container>
            <h2>Tour</h2>
            {data.tourItems.map((item, index) => {
              return (
                <Row className="tour-item" key={index}>
                  <Col xs="3" md="3" className="date">
                    <div className="day">{item.day}</div>
                    <div className="month">{item.month}</div>
                  </Col>
                  <Col xs="6" md="6" className="get-ticket">
                    <div>
                      <div className="title">{item.title}</div>
                      <div className="content">{item.address}</div>
                    </div>
                  </Col>
                  <Col xs="3" md="3" className="get-ticket">
                    <Button
                      color="dark"
                      outline
                      className="btn-pill"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Tickets
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
        <section id="music">
          <Container>
            <h2>music</h2>
            <Carousel
              activeIndex={activeIndex1}
              next={this.next1}
              previous={this.previous1}
            >
              {slides1}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous1}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next1}
              />
            </Carousel>
          </Container>
        </section>
        <section id="videos">
          <Container>
            <h2>Videos</h2>
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
              {slides2}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Container>
        </section>
        <section id="merch">
          <Container>
            <h2>MERCH</h2>
            <Row className="merch-items">
              {data.merchItems.map((item, index) => {
                return (
                  <Col md="6" key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <div className="merch-item">
                        <img src={item.img} alt="" />
                        <div className="title">{item.title}</div>
                        <div className="price">${item.price}</div>
                      </div>
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        <section id="about">
          <Container>
            <h2>About</h2>
            <Row>
              <Col md="5" sm="12">
                <img src={about} alt="" />
              </Col>
              <Col md="7" sm="12">
                Sibling tandem, Cara and Troy Bishop weave elements of hip-hop,
                electronic, pop and jazz to form their multifarious, self-produced
                sound-simultaneously futuristic and down to earth. Drawing from their
                shared upbringing, The Bishops channel their musical gifts for both
                healing and the construction of new dreamscapes and mythologies.
              </Col>
            </Row>
          </Container>
        </section>
        <section id="contact">
          <Container>
            <h2>CONTACT</h2>
            {contactItems.map((item, index) => {
              return (
                <Row key={index}>
                  <Col xs="6" sm="4" className="contact contact-category">
                    <div>{item.category}</div>
                  </Col>
                  <Col xs="6" sm="8" className="contact">
                    <div className="mr-70px">{item.name}</div>
                    <div>{item.email}</div>
                  </Col>
                </Row>
              );
            })}
            <div className="social-icons mb-70px mt-30px">
              <a
                href="https://open.spotify.com/artist/2deuprRz9fqMiBfTV6CAo5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={spotify} alt="" />
              </a>
              <a
                href="https://music.apple.com/ca/artist/the-bishops/1086826479"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={music} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd1yaBcDXiBEpDBwnjvVebw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={youtube} alt="" />
              </a>
              <a
                href="https://soundcloud.com/the_bishops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={sound_cloud} alt="" />
              </a>
              <a
                href="https://www.facebook.com/thebishopsmusic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={facebook} alt="" />
              </a>
              <a
                href="https://twitter.com/thebishopsatx?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={twitter} alt="" />
              </a>
              <a
                href="https://www.instagram.com/thebishopsmusic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={instagram} alt="" />
              </a>
              <a
                href="https://www.songkick.com/artists/9835239-bishops-music"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={songkick} alt="" />
              </a>
              <a
                href="https://www.bandsintown.com/en/a/13269757-the-bishops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-icon d-none d-sm-inline-block"
                  src={bandsintown}
                  alt=""
                />
              </a>
            </div>
            <div className="text-center mb-60px">
              Join our email newsletter for exclusive news and updates!
            </div>
            <div className="text-center mb-60px">
              <Input
                type="text"
                id="name"
                className="email-addr"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="text-center mb-60px">
              <Button color="success" className="btn-pill join-btn">
                Join E-List
              </Button>
            </div>
            <div className="app-info">© 2019 THE BISHOPS MUSIC LLC</div>
          </Container>
        </section>
      </div>
    );
  }
}

export default enhance(Dashboard);
