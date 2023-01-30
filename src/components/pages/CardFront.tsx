import React from "react";
import {css} from "aphrodite/no-important";
import cn from "classnames";
import {PersonInfoResponse} from "../../grpc/pb/message_and_service_pb";
import styles from "../styles/cardFrontStyle";


type CarteGenerationProps = {
  userInfo: PersonInfoResponse.AsObject;
};

const SexMap = {
  1: "M",
  2: "F"
}
function rebuildBase64Image(userInfo : PersonInfoResponse.AsObject) {
    return userInfo.biometrics?.photoType! + "," + userInfo.biometrics?.photos!
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
          // style={{ width: 250, height: 600 }}
          src={rebuildBase64Image(userInfo)}
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
              <h4 className={css(styles.highlights4)}>{userInfo.id?.id}</h4>
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
        src={rebuildBase64Image(userInfo)}
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
