import Image from "next/image";
import Link from "next/link";
import heroSectionImg from "../../../public/images/hero-section-img.jpeg";
import heroSectionWork from "../../../public/images/hero-section-work.png";
import heroSectionWork2 from "../../../public/images/hero-section-work2.png";
import heroSectionWork3 from "../../../public/images/hero-section-work3.png";
import heroSectionWork4 from "../../../public/images/hero-section-work4.png";
import heroSectionWork5 from "../../../public/images/hero-section-work5.png";
import heroSectionWork6 from "../../../public/images/hero-section-work6.png";
import heroSectionWork7 from "../../../public/images/hero-section-work7.png";
import heroSectionWork8 from "../../../public/images/hero-section-work8.png";
export default function HeroSection() {
  return (
    <>
      {/* <div className="container hero-section">
        <div className="hero-section-images">
          <Image src={"/images/sh-1.jpg"} alt="sh 1" width={250} height={250} />
          <Image src={"/images/sh-2.jpg"} alt="sh 2" width={250} height={250} />
          <Image src={"/images/sh-3.jpg"} alt="sh 3" width={250} height={250} />
          <Image src={"/images/sh-4.jpg"} alt="sh 4" width={250} height={250} />
        </div>
        <div className="hero-content">
          <h1>CREATIVE</h1>
          <h1>SOLUTION</h1>
          <p>
            We take a similar approach to design <br /> commercial we do
            impactfully approches <br /> over the flowchart of user friendly{" "}
            <br />
            wireframe.
            <div className="down-arrow">
              <Image
                src={"/images/scroll.png"}
                alt="scroll icon"
                width={40}
                height={80}
                className="box"
              />
            </div>
          </p>
        </div>
        <div className="hero-squares">
          <div className="blue-square"></div>
          <div className="black-square"></div>
        </div>
      </div> */}
      <div className="hero-section">
        <div className="hero-section-content-image">
          <div className="hero-section-content">
            <h1>#1 Agency for Partnership Growth.</h1>
            <p>
              Born in London, we are a squad of partnership experts, growth
              leads and creatives who help unlock rapid growth and empower
              global industry leaders in hospitality tech.
            </p>
            <button>Contact Us</button>
            <Link href="">See Recent Work</Link>
          </div>
          <div className="hero-section-image">
            <Image
              src={heroSectionImg}
              alt="Hero Section"
              className="hero-section-img"
            />
          </div>
        </div>
        <div className="hero-section-main-slider">
          <div className="hero-section-my-slider">
            <div className="hero-section-my-slide-track">
              <div className="hero-section-my-slide">
                <Image
                  src={heroSectionWork5}
                  alt=""
                  // height={470}
                  // width={500}
                  height={50}
                  width={150}
                />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork2} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork3} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork4} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork5} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork6} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork7} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork8} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork3} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork2} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork3} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork4} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork5} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork6} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork7} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork8} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork7} alt="" height={50} width={150} />
              </div>
              <div className="hero-section-my-slide">
                <Image src={heroSectionWork2} alt="" height={50} width={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
