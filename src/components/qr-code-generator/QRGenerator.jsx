import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleQRGenerate = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          type="text"
          name="qrcode"
          placeholder="Enter your value here"
        />
        <button disabled={input.trim() === ""} onClick={handleQRGenerate}>
          Generate
        </button>
      </div>
      <div style={{ paddingTop: "16px" }}>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRGenerator;
