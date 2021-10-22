import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative z-0">
      <div className="hidden md:flex absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus
        showThumbs={false}
        showIndicators
        interval={5000}
      >
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/80bea445ee2-Ease_Dweb.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner1"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/0331975d9d8-Dweb_nutrition.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner2"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/2576c1bdec2-DWEB_PL.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner3"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/b057f8d62dd-Horlicks_Primary_Dweb_.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner4"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/979afe9405b-DWEBFREEDB.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner5"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/568c144c638-comp_shot500_Dweb.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner6"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/85194b26800-DWEB.jpg?dim=1440x0&dpr=1.5&q=100"
            alt="banner7"
          />
        </div>
        <div>
          <img
            className="h-32 sm:h-48 md:h-72  xl:h-80"
            loading="lazy"
            src="https://cms-contents.pharmeasy.in/banner/7f5f45f07dd-Dweb_entry_otcsale.jpg?dim=1440x0&dpr=1&q=100"
            alt="banner8"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
