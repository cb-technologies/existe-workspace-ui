import React, { useEffect, useState } from "react";
import { css } from "aphrodite/no-important";
import styles from "../styles/carteGenerationStyle";

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
          <h4 className={css(styles.highlights5)}>
            {userInfo?.getId()?.getId()}
          </h4>
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
                    <h4 className={css(styles.highlights42)}>Bokoro</h4>
                  </div>
                </div>

                <div className={css(styles.row5)}>
                  <div className={css(styles.text)}>ADDRESS:</div>
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
                Date de Naissance/ Date of birth
              </h5>
              <h4 className={css(styles.highlights44)}>{`${userInfo
                ?.getDateOfBirth()
                ?.getDay()}-${userInfo?.getDateOfBirth()?.getMonth()}-${userInfo
                ?.getDateOfBirth()
                ?.getYear()}`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}