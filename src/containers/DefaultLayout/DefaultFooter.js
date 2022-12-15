import React from "react";
import PropTypes from "prop-types";
import {Button, Container, Col, Row, Input} from "reactstrap";

import bandsintown from "../../assets/img/icons/bandsintown.svg";
import facebook from "../../assets/img/icons/facebook.svg";
import instagram from "../../assets/img/icons/instagram.svg";
import music from "../../assets/img/icons/music.svg";
import songkick from "../../assets/img/icons/songkick.svg";
import sound_cloud from "../../assets/img/icons/sound_cloud.svg";
import spotify from "../../assets/img/icons/spotify.svg";
import twitter from "../../assets/img/icons/twitter.svg";
import youtube from "../../assets/img/icons/youtube.svg";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

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

function DefaultFooter() {
  return (
    <React.Fragment>
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
            <a href="https://open.spotify.com/artist/2deuprRz9fqMiBfTV6CAo5">
              <img className="social-icon" src={spotify} alt="" />
            </a>
            <a href="https://music.apple.com/ca/artist/the-bishops/1086826479">
              <img className="social-icon" src={music} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCd1yaBcDXiBEpDBwnjvVebw">
              <img className="social-icon" src={youtube} alt="" />
            </a>
            <a href="https://soundcloud.com/the_bishops">
              <img className="social-icon" src={sound_cloud} alt="" />
            </a>
            <a href="https://www.facebook.com/thebishopsmusic/">
              <img className="social-icon" src={facebook} alt="" />
            </a>
            <a href="https://twitter.com/thebishopsatx?lang=en">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/thebishopsmusic/">
              <img className="social-icon" src={instagram} alt="" />
            </a>
            <a href="https://www.songkick.com/artists/9835239-bishops-music">
              <img className="social-icon" src={songkick} alt="" />
            </a>
            <a href="https://www.bandsintown.com/en/a/13269757-the-bishops">
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
    </React.Fragment>
  );
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
