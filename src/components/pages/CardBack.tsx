import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import cn from "classnames";

export default function CardBack() {
  return (
    <div className={cn(css(styles.root), "untitled-page")}>
      <img
        className={css(styles.content_box)}
        src={require("../../assets/card_generation/e0c59cb92ee3b13dcee2a69663ef2b61.png")}
        alt="alt text"
      />
      <img
        className={css(styles.img)}
        src={require("../../assets/card_generation/9dc724f976b96df07d151456a112ae9b.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image2)}
        src={require("../../assets/card_generation/9c8cd3bee56ae6c3dfb50886f3cf5958.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator3)}
        src={require("../../assets/card_generation/c470ceb65113304ae46b79faa85252f5.png")}
        alt="alt text"
      />
      <h5 className={css(styles.highlights)}>
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
      </h5>
      <h5 className={css(styles.highlights1)}>
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
        RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC RDC
        <br />
      </h5>
      <img
        className={css(styles.decorator4)}
        src={require("../../assets/card_generation/e99667eaf76531bfc14771518781c80d.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator2)}
        src={require("../../assets/card_generation/ba635578f987477e7ff4a9b28ff89e2c.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator1)}
        src={require("../../assets/card_generation/a81eb3798df23fad4ab3f2960444f6be.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator)}
        src={require("../../assets/card_generation/3197f071edab45bd1a2c78e6f5977627.png")}
        alt="alt text"
      />

      <div className={css(styles.col)}>
        <h5 className={css(styles.highlights11)}>Existe LLC  </h5>
        <h5 className={css(styles.highlights11)}>Rep. Dem du Congo</h5>
        <h5 className={css(styles.highlights12)}>2025  </h5>
      </div>

      <h5 className={css(styles.highlights13)}>
        Cette carte est valide sur tout l’etendu du territoire national
      </h5>

      <div
        className={css(styles.content_box1)}
        style={{
          backgroundImage: `url(${require("../../assets/card_generation/aa70357c57486f8c505ab6900cfaffa2.png")})`,
        }}
      >
        <div className={css(styles.row)}>
          <h5 className={css(styles.highlights14)}>
            Existe LLC 2022-35V67A9/KINSHASA
          </h5>
          <div className={css(styles.row__spacer)} />
          <p>
            <div className={css(styles.desc)}>
              <span className={css(styles.desc_span0)}>www.</span>
              <span className={css(styles.desc_span1)}>ExistLLC.</span>
              <span className={css(styles.desc_span2)}>
                com
                <br />
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}


const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "20px 20px 20px 20px",
    position: "relative",
    overflow: "hidden",
  },
  content_box: {
    width: 109,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 45,
    right: 49,
  },
  img: {
    width: 586,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 66,
    left: 9,
  },
  image2: {
    width: 112,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 66,
    right: 180,
  },
  decorator3: {
    width: 919,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: -21,
    right: -12,
  },
  highlights: {
    font: '400 15px/1.26 "Allerta", Helvetica, Arial, serif',
    color: "rgb(205,206,174)",
    letterSpacing: "0px",
    width: 560,
    height: 248,
    opacity: 0.3,
    position: "absolute",
    top: 179,
    right: 0,
  },
  highlights1: {
    font: '400 15px/1.26 "Allerta", Helvetica, Arial, serif',
    color: "rgb(205,206,174)",
    letterSpacing: "0px",
    width: 616,
    height: 248,
    opacity: 0.3,
    position: "absolute",
    top: 179,
    left: 6,
  },
  decorator4: {
    width: 899,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: -28,
    left: 4,
  },
  decorator2: {
    width: 296,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 76,
    left: -6,
  },
  decorator1: {
    width: "64.06%",
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "0px 35.94% 0px 0%",
  },
  decorator: {
    width: 933,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 44,
    right: -11,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    width: "15.24%",
    position: "relative",
    flexGrow: 1,
    margin: "20px 82.19% 446px 2.58%",
  },
  highlights11: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
  },
  highlights12: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "7.5px",
    position: "relative",
  },
  highlights13: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    width: 419,
    height: "min-content",
    position: "absolute",
    bottom: 27,
    left: 50,
  },
  content_box1: {
    display: "flex",
    flexDirection: "column",
    background: "var(--src) center center / cover no-repeat",
    width: 446,
    height: 51,
    position: "absolute",
    top: 221,
    right: 109,
  },
  row: {
    display: "flex",
    position: "relative",
    flexGrow: 1,
    margin: "8.5px 4px 18.5px",
  },
  highlights14: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 268,
    margin: "2.5px 0px 3.5px",
  },
  row__spacer: {
    flex: "0 1 34px",
  },
  desc: {
    font: '400 10px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "1 1 113px",
  },
  desc_span0: {
    font: '1em/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    fontStyle: "normal",
    letterSpacing: "0px",
  },
  desc_span1: {
    font: '1.5em/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    fontStyle: "normal",
    letterSpacing: "0px",
  },
  desc_span2: {
    font: '1em/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    fontStyle: "normal",
    letterSpacing: "0px",
  },
});
