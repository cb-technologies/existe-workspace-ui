import React, {useState} from "react";
import QRCode from "qrcode.react";

export default function QrCode() {
    const [data, setData] = useState('');

    const downloadQRCode = (event: React.FormEvent) => {
        event.preventDefault();

        setData('');

    };

    const fetchUserData = () => {

    }

    const qrCode = (
        <QRCode
            id="qrCodeId"
            size={100}
            value={"https://google.com/user/dgiklhyjv,bk"}
            bgColor="white"
            fgColor="black"
            level="H"
        />
    );

    return (
        <div className="qr-container">
            <form onSubmit={downloadQRCode} className="qr-container__form">
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="https://example.com"
                />

                <button type="submit">Download QR Code</button>
            </form>

            <div className="qr-container__qr-code">{qrCode}</div>
        </div>
    );
}