import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import cn from "classnames";
import { Container, Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { PersonInfoResponse } from "../../grpc/pb/message_and_service_pb";


type CarteGenerationProps = {
  userInfo: PersonInfoResponse.AsObject;
};

const SexMap = {
  1: "M",
  2: "F"
}

export default function CardFront({ userInfo }: CarteGenerationProps) {
  return (
    <div className={cn(css(styles.root), "card-front-and-bac")}>
      <img
        className={css(styles.decorator8)}
        src={require("../../assets/card_generation/8f0f13ceefabd26e20f90f892c5d93fa.png")}
        alt="alt text"
      />
      <img
        className={css(styles.rect1)}
        src={require("../../assets/card_generation/74ccc4db1f431838e9d7d7caba228b0c.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image4)}
        src={require("../../assets/card_generation/f72524a8e3bc67bf4792aa849b0b718b.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator2)}
        src={require("../../assets/card_generation/671cd52479484a4d0f9d5e6fa2e002db.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator)}
        src={require("../../assets/card_generation/395a346521ef1c99bb65df66175b3ae8.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image)}
        src={require("../../assets/card_generation/d97e350299b2033e7369badcca24b1c2.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator5)}
        src={require("../../assets/card_generation/8acbe2cd3d13bd5a6416ca1cd4813988.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator3)}
        src={require("../../assets/card_generation/8223fe223768f2879183d00ce18bcb95.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator6)}
        src={require("../../assets/card_generation/530f9a0b49d19ceef9c102ac593f7df1.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image1)}
        src={require("../../assets/card_generation/cbd588fd0a73b2c5dd57bd3fb50020e8.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator4)}
        src={require("../../assets/card_generation/91bf939d3eebb1fdcaaaba3d6421190e.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator7)}
        src={require("../../assets/card_generation/1e816ff0250212cf9caf31c93e983813.png")}
        alt="alt text"
      />
      <img
        className={css(styles.decorator1)}
        src={require("../../assets/card_generation/fe0e457873b3e23006c2871a2fd3135f.png")}
        alt="alt text"
      />

      <div className={css(styles.row)}>
        <div className={css(styles.row__item)}>
          <img
            className={css(styles.image5)}
            src={require("../../assets/card_generation/b0236f657129a653c22f48d435667a41.png")}
            alt="alt text"
          />
        </div>
        <div className={css(styles.row__spacer)} />

        <div className={css(styles.col)}>
          <h1 className={css(styles.big_title)}>
            République Démocratique Du Congo{" "}
          </h1>

          <div className={css(styles.content_box1)}>
            <h4 className={css(styles.highlights1)}>
              CARTE NATIONAL D’IDENTITÉ{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className={css(styles.group)}>
        <img
          className={css(styles.image2)}
          src={require("../../assets/card_generation/3cf3a7ba6d826e0b61cf04750e3197e8.png")}
          alt="alt text"
        />

        <div className={css(styles.group1)}>
          <div className={css(styles.col1)}>
            <h5 className={css(styles.highlights)}>
              Date de Naiss/ Date of birth
            </h5>
            <h4 className={css(styles.highlights3)}>{`${userInfo.dateOfBirth?.day}-${userInfo.dateOfBirth?.month}-${userInfo.dateOfBirth?.year}`}</h4>
          </div>

          <div className={css(styles.content_box11)}>
            <div className={css(styles.content_box)} style={{
            }}>
              <h4 className={css(styles.highlights4)}>KN-985674394</h4>
            </div>
          </div>

          <div className={css(styles.col2)}>
            <div className={css(styles.col3)}>
              <h5 className={css(styles.highlights2)}>Nom/Surname</h5>
              <h4 className={css(styles.highlights31)}>
                {userInfo?.names?.nom}
              </h4>
              <h5 className={css(styles.highlights5)}>Postnom/ Middle name</h5>
              <h4 className={css(styles.highlights32)}>
                {userInfo?.names?.middleNamesList[0]}
              </h4>
              <h5 className={css(styles.highlights6)}>Prenom/Given name</h5>
              <h4 className={css(styles.highlights33)}>
                {userInfo?.names?.prenom}
              </h4>
            </div>

            <div className={css(styles.row1)}>
              <div className={css(styles.text)}>AD:</div>
              <p className={css(styles.desc)}>
                Av {userInfo?.address?.avenue} {userInfo?.address?.number},{" "}
                {userInfo?.address?.quartier}, {userInfo?.address?.commune},{" "}
                <span style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
                  {userInfo?.address?.zipCode}
                </span>
              </p>
            </div>

            <div className={css(styles.col4)}>
              <div className={css(styles.text1)}>{`Sexe: ${SexMap[userInfo.sex?.sex ? userInfo.sex?.sex : 1]}, Yeux: ${userInfo.phenotypes?.eyeColor}`}</div>
              <div className={css(styles.text2)}>
                {`Poids: ${userInfo.phenotypes?.weight}, Taille: ${userInfo.phenotypes?.height}`}
              </div>
            </div>

            <div className={css(styles.col5)}>
              <div className={css(styles.row2)}>
                <div className={css(styles.info)}>ISS:</div>
                <div className={css(styles.info2)}>{`${userInfo.cardValidity?.issuedate?.day}-${userInfo.cardValidity?.issuedate?.month}-${userInfo.cardValidity?.issuedate?.year}`}</div>
              </div>

              <div className={css(styles.row2)}>
                <div className={css(styles.info1)}>EXP:</div>
                <div className={css(styles.info21)}>{`${userInfo.cardValidity?.expirationdate?.day}-${userInfo.cardValidity?.expirationdate?.month}-${userInfo.cardValidity?.expirationdate?.year}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className={css(styles.image3)}
        src={require("../../assets/card_generation/46113674794a06c1848542ccb07fbb6b.png")}
        alt="alt text"
      />
      <img
        className={css(styles.cover)}
        src={require("../../assets/card_generation/7a6baa78f78eae773e329306c452772b.png")}
        alt="alt text"
      />
      <img
        className={css(styles.image6)}
        src={require("../../assets/card_generation/b0620d9dbd9e0c10b6ab5f4c43761c3d.png")}
        alt="alt text"
      />
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
  decorator8: {
    width: 917,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  rect1: {
    width: 150,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 44,
    right: 2,
  },
  image4: {
    width: 67,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 10,
    right: 21,
  },
  decorator2: {
    width: 611,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    left: 0,
  },
  decorator: {
    width: 615,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 91,
    left: 0,
  },
  image: {
    width: 204,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    bottom: 37,
    right: 141,
  },
  decorator5: {
    width: 352,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 32,
    left: 278,
  },
  decorator3: {
    width: 485,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 10,
    right: 0,
  },
  decorator6: {
    width: 932,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 116,
    right: 0,
  },
  image1: {
    width: 717,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 13,
    right: 2,
  },
  decorator4: {
    width: 620,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    right: 22,
  },
  decorator7: {
    width: 906,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 104,
    left: 0,
  },
  decorator1: {
    width: 279,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    left: 47,
  },
  row: {
    display: "flex",
    width: 681,
    height: 67,
    position: "absolute",
    top: 10,
    left: 28,
  },
  row__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 86px",
  },
  image5: {
    borderRadius: "20px 5px 5px 5px",
    width: 86,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 86,
    margin: "8px 0px 0px",
  },
  row__spacer: {
    flex: "0 1 15px",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 580px",
  },
  big_title: {
    font: '400 35px/1.37 "Alata", Helvetica, Arial, serif',
    color: "rgb(2,45,70)",
    letterSpacing: "0px",
    position: "relative",
  },
  content_box1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(181,8,8,0.49)",
    width: "44.83%",
    height: 19,
    position: "relative",
    margin: "0px 55.17% 0px 0%",
  },
  highlights1: {
    font: '400 18px/1.27 "Alatsi", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    letterSpacing: "0px",
    width: 218,
    height: 23,
    position: "absolute",
    top: -4,
    left: 12,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    width: 248,
    height: 380,
    position: "absolute",
    top: 96,
    left: 28,
  },
  image2: {
    width: 248,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 0,
    right: 0,
  },
  group1: {
    display: "flex",
    flexDirection: "column",
    width: 190,
    height: 359,
    position: "absolute",
    top: 23,
    right: -225,
  },
  col1: {
    display: "flex",
    flexDirection: "column",
    width: 234,
    height: 42,
    position: "absolute",
    top: 152,
    right: -271,
  },
  highlights: {
    font: '400 16px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
  },
  highlights3: {
    font: '400 18px/1.38 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    position: "relative",
    margin: "1px 0px 0px",
  },
  content_box11: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(17,112,165)",
    width: 335,
    height: 34,
    position: "absolute",
    top: 10,
    right: -431,
  },
  content_box: {
    display: "flex",
    flexDirection: "column",
    background: "var(--src) center center / cover no-repeat",
    position: "relative",
    flexGrow: 1,
  },
  highlights4: {
    font: '400 18px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    letterSpacing: "0px",
    width: "44.78%",
    position: "relative",
    flexGrow: 1,
    margin: "8px 23.88% 8px 31.34%",
  },
  col2: {
    display: "flex",
    flexDirection: "column",
    width: 190,
    height: 359,
    position: "absolute",
    top: 0,
    right: 0,
  },
  col3: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  highlights2: {
    font: '400 16px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "0px 5px",
  },
  highlights31: {
    font: '400 18px/1.38 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    position: "relative",
    margin: "4px 14px 0px",
  },
  highlights5: {
    font: '400 16px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "8px 0px 0px 5px",
  },
  highlights32: {
    font: '400 18px/1.38 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    position: "relative",
    margin: "4px 15px 0px",
  },
  highlights6: {
    font: '400 16px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "4px 22px 0px 5px",
  },
  highlights33: {
    font: '400 18px/1.38 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    position: "relative",
    margin: "5px 14px 0px",
  },
  highlights21: {
    font: '400 15px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "4px 0px 0px",
  },
  row1: {
    display: "flex",
    position: "relative",
    margin: "20px 0px 0px",
  },
  text: {
    font: '400 14px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 25,
    margin: "3px 0px 30px",
  },
  desc: {
    font: '12px/1.33 "Alef", Helvetica, Arial, serif',
    color: "rgb(29,9,9)",
    letterSpacing: "0px",
    opacity: 0.69,
    position: "relative",
    flex: "1 1 138px",
    margin: "0px 0px 0px 8px",
  },
  col4: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "9px 7px 0px 0px",
  },
  text1: {
    font: '14px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "0px 34px 0px 0px",
  },
  text2: {
    font: '14px/1 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    margin: "13px 0px 0px",
  },
  col5: {
    display: "flex",
    flexDirection: "column",
    width: 81,
    position: "relative",
    minWidth: 81,
    margin: "15px 0px 0px",
  },
  row2: {
    display: "flex",
    position: "relative",
  },
  info: {
    font: '400 12px/1.33 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(222,24,24)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 20,
    margin: "1px 0px 0px",
  },
  info2: {
    font: '400 12px/1.33 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 54,
    margin: "0px 0px 1px 7px",
  },
  info1: {
    font: '400 12px/1.33 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(222,24,24)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 25,
  },
  info21: {
    font: '400 12px/1.33 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    position: "relative",
    flex: "0 0 auto",
    minWidth: 52,
    margin: "0px 0px 3px 2px",
  },
  image3: {
    width: 93,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 322,
    right: 20,
  },
  cover: {
    width: 385,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 113,
    right: 188,
  },
  image6: {
    width: 0,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 0,
    margin: "372px auto 132px",
  },
});
