import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import cn from "classnames";
import {
  NationalIDNumber,
  PersonInfoResponse,
} from "../../grpc/pb/message_and_service_pb";
import { ExistService } from "../../store/exist_api_call";

type CarteGenerationProps = {
  personInfo: PersonInfoResponse | undefined;
};

export default function CarteGeneration() {
  const [userInfo, setUserInfo] = useState<PersonInfoResponse>();

  useEffect(() => {
    ExistService.findPersonInfo(
      new NationalIDNumber().setId("6035223a0000181"),
      null
    ).then((value) => {
      setUserInfo(value);
    });
  }, []);

  return (
      <div className={css(styles.box)}>
        <div className={css(styles.row)}>
          <div className={css(styles.row__item)}>
            <div className={css(styles.row1)}>
              <div className={css(styles.row1__item)}>
                <img
                  className={css(styles.image8)}
                  src={require("../../assets/927a5c07f3deaefa852ca6c57f5defc8.png")}
                  alt="alt text"
                />
              </div>
              <div className={css(styles.row1__spacer)} />

              <div className={css(styles.col)}>
                <h1 className={css(styles.big_title)}>
                  République Démocratique Du Congo{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className={css(styles.row__spacer)} />
          <div className={css(styles.row__item1)}>
            <img
              className={css(styles.image7)}
              src={require("../../assets/6fc2bb1d52c3f170192b1e6b518914ae.png")}
              alt="alt text"
            />
          </div>
        </div>

        <img
          className={css(styles.image6)}
          src={require("../../assets/edacd11649889013bf2b18ddce721f55.png")}
          alt="alt text"
        />
        <img
          className={css(styles.cover)}
          src={require("../../assets/349c9db654d7c19349c2f3ba502317ed.png")}
          alt="alt text"
        />

        <div className={css(styles.content_box2)}>
          <div className={css(styles.content_box1)}>
                      <h4 className={css(styles.highlights5)}>{userInfo?.getId()?.getId()}</h4>
          </div>
        </div>

        <div className={css(styles.group)}>
          <div className={css(styles.row2)}>
            <div className={css(styles.col1)}>
              <div className={css(styles.col1__item)}>
                <img
                  className={css(styles.image5)}
                  src={require("../../assets/ac0405c429c52917ebae5b1e11459baf.png")}
                  alt="alt text"
                />
              </div>

              <div className={css(styles.row3)}>
                <div className={css(styles.row3__item)}>
                  <img
                    className={css(styles.image11)}
                    src={require("../../assets/2758b1c2edb6aadf5a613396f14a7acc.png")}
                    alt="alt text"
                  />
                </div>
                <div className={css(styles.row3__item1)}>
                  <img
                    className={css(styles.image12)}
                    src={require("../../assets/2a0967cb3a7d98b992e423b7a364a819.png")}
                    alt="alt text"
                  />
                </div>
                <div className={css(styles.row3__item2)}>
                  <img
                    className={css(styles.image10)}
                    src={require("../../assets/da5ab66329fb0ebc9c1891915a57bb70.png")}
                    alt="alt text"
                  />
                </div>
                <div className={css(styles.row3__item3)}>
                  <img
                    className={css(styles.image13)}
                    src={require("../../assets/6094480258de681f35775f66c9ea88b4.png")}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>

            <div className={css(styles.row2__spacer)} />

            <div className={css(styles.row4)}>
              <div className={css(styles.col2)}>
                <div className={css(styles.col3)}>
                  <div className={css(styles.col4)}>
                    <div className={css(styles.col5)}>
                      <h5 className={css(styles.highlights1)}>Nom/Surname</h5>
                      <h4 className={css(styles.highlights4)}>
                        {userInfo?.getNames()?.getNom()}
                      </h4>
                    </div>

                    <div className={css(styles.col6)}>
                      <h5 className={css(styles.highlights1)}>
                        Postnom/ Middle name
                      </h5>
                      <h4 className={css(styles.highlights41)}>
                        {userInfo?.getNames()?.getMiddleNamesList().at(0)!}
                      </h4>
                    </div>

                    <div className={css(styles.col7)}>
                      <h5 className={css(styles.highlights1)}>
                        Prenom/Given name
                      </h5>
                      <h4 className={css(styles.highlights42)}>
                        {userInfo?.getNames()?.getPrenom()}
                      </h4>
                    </div>
                    <div className={css(styles.col7)}>
                      <h5 className={css(styles.highlights1)}>
                       Lieu de naissance 
                      </h5>
                      <h4 className={css(styles.highlights42)}>
                        Bokoro
                      </h4>
                    </div>
                  </div>

                  <div className={css(styles.row5)}>
                    <div className={css(styles.text)}>AD:</div>
                    <p className={css(styles.desc1)}>
                      Av {userInfo?.getAddress()?.getAvenue()}{" "}
                      {userInfo?.getAddress()?.getNumber()},{" "}
                      {userInfo?.getAddress()?.getQuartier()},{" "}
                      {userInfo?.getAddress()?.getCommune()}
                    </p>
                  </div>
                </div>

              </div>

              <div className={css(styles.row4__spacer)} />

              <div className={css(styles.col10)}>
                <h5 className={css(styles.highlights1)}>
                  Date de Naiss/ Date of birth
                </h5>
                <h4 className={css(styles.highlights44)}>{`${userInfo
                  ?.getDateOfBirth()
                  ?.getDay()}-${userInfo
                  ?.getDateOfBirth()
                  ?.getMonth()}-${userInfo?.getDateOfBirth()?.getYear()}`}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(219,219,219)",
    borderRadius: "20px 20px 20px 20px",
    width: "60.36%",
    position: "relative",
    flexGrow: 1,
    margin: "878px 38.08% 295px 1.55%",
  },
  row: {
    display: "flex",
    width: 883,
    height: 67,
    "@media (max-width: 1399px)": {
      flexWrap: "wrap",
      alignContent: "flex-start",
      columnGap: 0,
      rowGap: 16,
    },
    position: "absolute",
    top: 10,
    right: 21,
  },
  row__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "1 1 689px",
    "@media (max-width: 1399px)": {
      flex: "0 0 100%",
    },
  },
  row1: {
    display: "flex",
    position: "relative",
    flexGrow: 1,
  },
  row1__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 86px",
  },
  image8: {
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
  row1__spacer: {
    flex: "0 1 15px",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 588px",
  },
  big_title: {
    font: '400 35px/1.2 "Alata", Helvetica, Arial, serif',
    color: "rgb(2,45,70)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "32px",
      textAlign: "left",
    },
    "@media (max-width: 991px)": {
      fontSize: "28px",
    },
    "@media (max-width: 767px)": {
      fontSize: "25px",
    },
    "@media (max-width: 575px)": {
      fontSize: "23px",
    },
    "@media (max-width: 479px)": {
      fontSize: "21px",
    },
    "@media (max-width: 383px)": {
      fontSize: "20px",
    },
    position: "relative",
  },
  content_box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(181,8,8,0.49)",
    width: "44.22%",
    position: "relative",
    margin: "3px 55.78% 0px 0%",
  },
  highlights2: {
    font: '400 18px/1.2 "Alatsi", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "left",
      margin: "0px 24px 0px 11px",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
      margin: "0px 20px 0px 9px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
      margin: "0px 17px 0px 8px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
      margin: "0px 14px 0px 6px",
    },
    position: "relative",
    flexGrow: 1,
    minHeight: 23,
    margin: "0px 27px 0px 12px",
    "@media (max-width: 575px)": {
      margin: "0px 15px 0px 7px",
    },
    "@media (max-width: 383px)": {
      margin: "0px 13px 0px 6px",
    },
  },
  row__spacer: {
    flex: "0 1 127px",
    "@media (max-width: 1399px)": {
      display: "none",
    },
  },
  row__item1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "1 1 67px",
    "@media (max-width: 1399px)": {
      flex: "0 0 100%",
    },
  },
  image7: {
    width: 67,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 67,
    margin: "0px 0px 5px",
  },
  image6: {
    width: 93,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "absolute",
    top: 329,
    right: 18,
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
  content_box2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(17,112,165)",
    width: "35.94%",
    position: "relative",
    flexGrow: 1,
    margin: "129px 0% 357px 64.06%",
  },
  content_box1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(38,156,222,0.643)",
    position: "relative",
    flexGrow: 1,
  },
  highlights5: {
    font: '400 18px/1.2 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(219,219,219)",
    letterSpacing: "0px",
    width: "20%",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "left",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
    },
    position: "relative",
    flexGrow: 1,
    minHeight: 24,
    margin: "5px auto",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    width: 747.5,
    height: 407,
    position: "absolute",
    top: 109,
    left: 24.5,
  },
  info1: {
    font: '400 10px/1.2 "Alegreya", Helvetica, Arial, serif',
    color: "rgb(222,24,24)",
    letterSpacing: "0px",
    width: 21,
    height: 14,
    position: "absolute",
    bottom: 61.67,
    left: 286.5,
  },
  row2: {
    display: "flex",
    width: 747.5,
    height: 407,
    position: "absolute",
    top: 0,
    right: 0,
  },
  col1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 224px",
  },
  col1__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  image5: {
    width: "calc(100% - 5px)",
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    margin: "0px 2.5px",
    "@media (max-width: 1199px)": {
      width: "calc(100% - 10px)",
      margin: "0px 5px",
    },
  },
  row3: {
    display: "flex",
    position: "relative",
    margin: "10px 0px 0px",
  },
  row3__item: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 42px",
  },
  image11: {
    width: 42,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 42,
    margin: "5px 0px 49px",
  },
  row3__item1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 38px",
  },
  image12: {
    width: 38,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 38,
    margin: "23px 0px 25px",
  },
  row3__item2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 23px",
  },
  image10: {
    width: 23,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 23,
    margin: "0px 0px 17px",
  },
  row3__item3: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 121px",
  },
  image13: {
    width: 121,
    height: "auto",
    verticalAlign: "top",
    objectFit: "contain",
    objectPosition: "center top",
    position: "relative",
    minWidth: 121,
    margin: "4px 0px 0px",
  },
  row2__spacer: {
    flex: "0 1 55.5px",
  },
  row4: {
    display: "flex",
    position: "relative",
    flex: "0 1 468px",
    margin: "4px 0px 81px",
  },
  col2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 197px",
  },
  col3: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  col4: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "0px 0px 0px 7px",
    "@media (max-width: 1199px)": {
      margin: "0px 0px 0px 6px",
    },
    "@media (max-width: 991px)": {
      margin: "0px 0px 0px 5px",
    },
  },
  col5: {
    display: "flex",
    flexDirection: "column",
    width: "61.58%",
    position: "relative",
    margin: "0px 35.79% 0px 2.63%",
  },
  highlights1: {
    font: '400 16px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    margin: "10px",
    "@media (max-width: 1199px)": {
      fontSize: "15px",
      textAlign: "left",
    },
    "@media (max-width: 991px)": {
      fontSize: "14px",
    },
    "@media (max-width: 767px)": {
      fontSize: "13px",
    },
    "@media (max-width: 479px)": {
      fontSize: "12px",
    },
    position: "relative",
  },
  highlights4: {
    font: '400 18px/1.2 "Alef", Helvetica, Arial, serif',
    color: 'rgb(65,92,189)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '17px',
      textAlign: 'left',
      margin: '0px 31px 0px 8px'
    },
    '@media (max-width: 991px)': {
      fontSize: '16px',
      margin: '0px 26px 0px 7px'
    },
    '@media (max-width: 767px)': {
      fontSize: '15px',
      margin: '0px 22px 0px 6px'
    },
    '@media (max-width: 479px)': {
      fontSize: '14px',
      margin: '0px 17px 0px 5px'
    },
    position: 'relative',
    margin: '0px 36px 0px 9px',
    '@media (max-width: 575px)': {
      margin: '0px 20px 0px 5px'
    },
    '@media (max-width: 383px)': {
      margin: '0px 16px 0px 5px'
    }
  },
  col6: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "8px 0px 0px 5px",
  },
  highlights41: {
    font: '400 18px/1.2 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "left",
      margin: "0px 9px",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
      margin: "0px 7px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
      margin: "0px 6px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
      margin: "0px 5px",
    },
    position: "relative",
    margin: "0px 10px",
  },
  col7: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "4px 22px 0px 5px",
    "@media (max-width: 1199px)": {
      margin: "4px 19px 0px 5px",
    },
    "@media (max-width: 991px)": {
      margin: "4px 16px 0px 5px",
    },
    "@media (max-width: 767px)": {
      margin: "4px 14px 0px 5px",
    },
    "@media (max-width: 575px)": {
      margin: "4px 13px 0px 5px",
    },
    "@media (max-width: 479px)": {
      margin: "4px 11px 0px 5px",
    },
    "@media (max-width: 383px)": {
      margin: "4px 10px 0px 5px",
    },
  },
  highlights42: {
    font: '400 18px/1.2 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "left",
      margin: "1px 8px 0px",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
      margin: "1px 7px 0px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
      margin: "1px 6px 0px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
    },
    position: "relative",
    margin: "1px 9px 0px",
    "@media (max-width: 575px)": {
      margin: "1px 5px 0px",
    },
  },
  col8: {
    display: "flex",
    flexDirection: "column",
    width: 137,
    position: "relative",
    minWidth: 137,
    margin: "4px 0px 0px",
  },
  highlights3: {
    font: '400 15px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "14px",
      textAlign: "left",
    },
    "@media (max-width: 991px)": {
      fontSize: "13px",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
    },
    position: "relative",
  },
  highlights43: {
    display: "flex",
    justifyContent: "center",
    font: '400 18px/1.2 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    textAlign: "center",
    letterSpacing: "0px",
    width: "52.55%",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "center",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
    },
    position: "relative",
    margin: "8px 37.23% 0px 10.22%",
  },
  row5: {
    display: "flex",
    position: "relative",
    margin: "25px 0px 0px",
  },
  text: {
    font: '400 14px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 991px)": {
      fontSize: "13px",
      textAlign: "left",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
    },
    position: "relative",
    flex: "0 0 auto",
    minWidth: 25,
    margin: "1px 0px 29px 20px",
  },
  desc1: {
    font: '400 12px/1.2 "Alef", Helvetica, Arial, serif',
    color: "rgb(29,9,9)",
    letterSpacing: "0px",
    opacity: 0.69,
    position: "relative",
    flex: "1 1 138px",
    margin: "0px 0px 0px 8px",
    "@media (max-width: 1199px)": {
      margin: "0px 0px 0px 7px",
    },
    "@media (max-width: 991px)": {
      margin: "0px 0px 0px 6px",
    },
    "@media (max-width: 767px)": {
      margin: "0px 0px 0px 5px",
    },
  },
  col9: {
    display: "flex",
    flexDirection: "column",
    width: 131,
    position: "relative",
    minWidth: 131,
    margin: "3px 0px 0px",
  },
  row6: {
    display: "flex",
    position: "relative",
  },
  text1: {
    font: '400 14px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 991px)": {
      fontSize: "13px",
      textAlign: "left",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
    },
    position: "relative",
    flex: "0 0 auto",
    minWidth: 40,
  },
  text2: {
    font: '400 14px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 991px)": {
      fontSize: "13px",
      textAlign: "left",
      margin: "0px 0px 0px 35px",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
      margin: "0px 0px 0px 25px",
    },
    position: "relative",
    flex: "0 0 auto",
    minWidth: 39,
    margin: "0px 0px 0px 51px",
    "@media (max-width: 1199px)": {
      margin: "0px 0px 0px 43px",
    },
    "@media (max-width: 767px)": {
      margin: "0px 0px 0px 28px",
    },
    "@media (max-width: 479px)": {
      margin: "0px 0px 0px 21px",
    },
    "@media (max-width: 383px)": {
      margin: "0px 0px 0px 19px",
    },
  },
  row7: {
    display: "flex",
    position: "relative",
    margin: "9px 0px 0px",
  },
  text3: {
    font: '400 14px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 991px)": {
      fontSize: "13px",
      textAlign: "left",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
    },
    position: "relative",
    flex: "0 0 auto",
    minWidth: 43,
    margin: "1px 0px 0px",
  },
  text4: {
    font: '400 14px/1.2 "Aldrich", Helvetica, Arial, serif',
    color: "rgb(0,0,0)",
    letterSpacing: "0px",
    "@media (max-width: 991px)": {
      fontSize: "13px",
      textAlign: "left",
      margin: "0px 0px 1px 33px",
    },
    "@media (max-width: 575px)": {
      fontSize: "12px",
      margin: "0px 0px 1px 24px",
    },
    position: "relative",
    flex: "0 0 auto",
    minWidth: 40,
    margin: "0px 0px 1px 48px",
    "@media (max-width: 1199px)": {
      margin: "0px 0px 1px 41px",
    },
    "@media (max-width: 767px)": {
      margin: "0px 0px 1px 27px",
    },
    "@media (max-width: 479px)": {
      margin: "0px 0px 1px 20px",
    },
    "@media (max-width: 383px)": {
      margin: "0px 0px 1px 18px",
    },
  },
  row4__spacer: {
    flex: "0 1 37px",
  },
  col10: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: "0 1 234px",
    margin: "158px 0px 113px",
  },
  highlights44: {
    font: '400 18px/1.2 "Alef", Helvetica, Arial, serif',
    color: "rgb(65,92,189)",
    letterSpacing: "0px",
    "@media (max-width: 1199px)": {
      fontSize: "17px",
      textAlign: "left",
      margin: "6px 23px 0px",
    },
    "@media (max-width: 991px)": {
      fontSize: "16px",
      margin: "6px 19px 0px",
    },
    "@media (max-width: 767px)": {
      fontSize: "15px",
      margin: "6px 16px 0px",
    },
    "@media (max-width: 479px)": {
      fontSize: "14px",
      margin: "6px 13px 0px",
    },
    position: "relative",
    margin: "6px 26px 0px",
    "@media (max-width: 575px)": {
      margin: "6px 15px 0px",
    },
    "@media (max-width: 383px)": {
      margin: "6px 12px 0px",
    },
  },
});
