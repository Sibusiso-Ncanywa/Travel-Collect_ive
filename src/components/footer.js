import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaMailBulk, FaPhone } from "react-icons/fa";

export default class Footer extends Component {
  addressInfo = {
    address: "Mokolwaneng Farm, KwaRasoko, Gabane, Botswana",
    tel: "+27712568254",
    mail: "travelcollect_ive@yahoo.com",
    fb: "https://www.facebook.com/Travelcollect_ive-439728463062133/",
    twt: "https://www.twitter.com/"
  };

  theLinks = {
    Links: [
      {
        icon: <FaFacebook />,
        link: this.addressInfo.fb,
        name: "facebook"
      },
      {
        icon: <FaMailBulk />,
        link: "mailto:" + this.addressInfo.mail,
        name: this.addressInfo.mail
      },
      {
        icon: <FaPhone />,
        link: "tel:" + this.addressInfo.tel,
        name: this.addressInfo.tel
      },
      {
        icon: <FaTwitter />,
        link: this.addressInfo.twt,
        name: "twitter"
      }
    ]
  };

  render() {
    return (
      <>
        <footer>
          <div className="footer-details">
            <div className="footer-socialMedia">
              <address id="contactUs" className="footer-address">
                {this.addressInfo.address}
              </address>
              {this.theLinks.Links.map(item => {
                return (
                  <a key={`item-${item.name}`} href={item.link}>
                    <span className="icon-size">{item.icon}</span>
                    <span className="link">{item.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="footer-developer">
              <h4> developed by </h4>
              <h3> LizHack SA </h3>
              <p> The best business transformers </p>
              <a href="http://lizhacksa.ml">lizhacksa.ml</a>
              <a href="mailto:info@lizhacksa.ml">info@lizhacksa.ml</a>
            </div>
          </div>
          <div className="footer-copyright">Travel Collect_ive &copy; 2020</div>
        </footer>
      </>
    );
  }
}
