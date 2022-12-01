import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import cn from "classnames";

export default function CardBack() {
  return (
    <div className={cn(css(styles.root), "back")}>
      <img
        className={css(styles.decorator)}
        src={require("../../assets/card_generation/3197f071edab45bd1a2c78e6f5977627.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image2)}
        src={require("../../assets/card_generation/9c8cd3bee56ae6c3dfb50886f3cf5958.png")}
        alt="alt text"
      />
      <img
        className={css(styles.content_box)}
        src={require("../../assets/card_generation/e0c59cb92ee3b13dcee2a69663ef2b61.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image3)}
        src={require("../../assets/card_generation/9b7a198a28de8feae8d977a364964327.png")}
        alt="alt text"
      />
      {/* <h5 className={css(styles.highlights1_box)}> */}
      <h5>
        <div className={css(styles.highlights1)}>
          <span className={css(styles.highlights1_span0)}>Existe LLC </span>
          <span className={css(styles.highlights1_span1)}>
            <br />
            Rep. Dem du Congo
            <br />
            2025
          </span>
        </div>
      </h5>
      <img
        className={css(styles.decorator4)}
        src={require("../../assets/card_generation/e99667eaf76531bfc14771518781c80d.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator3)}
        src={require("../../assets/card_generation/c470ceb65113304ae46b79faa85252f5.png")}
        alt="alt text"
      />

      <div className={css(styles.group)}>
        <img
          className={css(styles.decorator1)}
          src={require("../../assets/card_generation/a81eb3798df23fad4ab3f2960444f6be.png")}
          alt="alt text"
        />
        <img
          className={css(styles.decorator2)}
          src={require("../../assets/card_generation/ba635578f987477e7ff4a9b28ff89e2c.png")}
          alt="alt text"
        />
      </div>

      <div className={css(styles.col)}>
        <div className={css(styles.col__item)}>
          <img
            className={css(styles.content_box1)}
            src={require("../../assets/card_generation/8c3449701ef96ed7da2e6f121fb0d9ad.png")}
            alt="alt text"
          />
        </div>
        <h5 className={css(styles.highlights11)}>
          Cette carte est valide sur tout l’etendu du territoire national
        </h5>
      </div>

      <div
        className={css(styles.content_box2)}
        style={{
          backgroundImage: `url(${require("../../assets/card_generation/aaa7415fb539b75dab5abfd1471f4afc.png")})`,
        }}
      >
        <div className={css(styles.row)}>
          <h5 className={css(styles.highlights12)}>
            Existe LLC 2022-35V67A9/KINSHASA
          </h5>
          <div className={css(styles.row__spacer)} />
          {/* <p className={css(styles.desc_box)}> */}
            <div className={css(styles.desc)}>
              <span className={css(styles.desc_span0)}>www.</span>
              <span className={css(styles.desc_span1)}>ExistLLC.</span>
              <span className={css(styles.desc_span2)}>
                com
                <br />
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}

// Back.inStorybook = true;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "20px 20px 20px 20px",
    position: "relative",
    overflow: "hidden",
    minHeight: 520,
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
  image3: {
    width: 926,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 179,
    right: 0,
  },
  highlights1: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "absolute",
    top: 17,
    height: 52,
    left: 25,
    width: 142,
  },
  highlights1_span0: {
    font: '1em/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    fontStyle: "normal",
    letterSpacing: "0px",
  },
  highlights1_span1: {
    font: '0.9333333333333333em/1.28 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    fontStyle: "normal",
    letterSpacing: "0px",
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
  group: {
    display: "flex",
    flexDirection: "column",
    width: 597,
    height: 530,
    position: "absolute",
    top: 0,
    left: -84,
  },
  decorator1: {
    width: 597,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    right: 0,
  },
  decorator2: {
    width: 296,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 76,
    left: 78,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    width: "62.88%",
    position: "relative",
    flexGrow: 1,
    margin: "354px 36.16% 27px 0.97%",
  },
  col__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  content_box1: {
    width: "100%",
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
  },
  highlights11: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    width: "86.01%",
    position: "relative",
    margin: "21px auto 0px",
  },
  content_box2: {
    display: "flex",
    flexDirection: "column",
    background: "var(--src) center center / cover no-repeat",
    width: 446,
    height: 39,
    position: "absolute",
    top: 221,
    right: 109,
  },
  row: {
    display: "flex",
    position: "relative",
    flexGrow: 1,
    margin: "5.5px 4px 4.5px",
  },
  highlights12: {
    font: '400 15px/1.2 "Inter", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 268,
    margin: "0px 0px 11px",
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
