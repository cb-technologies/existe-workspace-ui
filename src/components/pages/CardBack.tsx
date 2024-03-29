import React from "react";
import { css } from "aphrodite/no-important";
import cn from "classnames";
import styles from "../styles/cardBackStyle";
import QRCode from 'qrcode.react';
import Barcode from 'react-barcode';
import {PersonInfoResponse} from "../../grpc/pb/message_and_service_pb";
import {Box, Container} from "@mui/material";

type CarteGenerationProps = {
    userInfo: PersonInfoResponse.AsObject;
};

export default function CardBack({ userInfo }: CarteGenerationProps) {

    const qrCode = (
        <QRCode
            id="qrCodeId"
            size={250}
            value={String(userInfo?.qrcode?.qrcode)}
            bgColor="white"
            fgColor="black"
            level="H"
        />
    );

    const barCode = (
        <Barcode
            value={String(userInfo?.qrcode?.qrcode)}
            displayValue={false}/>
    );

    return (
        <Container>
            <Box>
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
                    <h5>
                        <div className={css(styles.highlights1)}>
                            <span className={css(styles.highlights1_span0)}>Existe LLC </span>
                            <span className={css(styles.highlights1_span1)}>
            <br/>
            Rep. Dem du Congo
            <br/>
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
                        <div className={css(styles.decorator2)}>
                            {qrCode}
                        </div>
                    </div>

                    <div className={css(styles.col)}>
                        <div className={css(styles.col__item)}>
                            {barCode}
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
                            <div className={css(styles.row__spacer)}/>
                            {/* <p className={css(styles.desc_box)}> */}
                            <div className={css(styles.desc)}>
                                <span className={css(styles.desc_span0)}>www.</span>
                                <span className={css(styles.desc_span1)}>ExistLLC.</span>
                                <span className={css(styles.desc_span2)}>
                                com
                                    <br/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>

    );
}
