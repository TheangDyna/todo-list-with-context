import { Divider } from "@nextui-org/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="h-20 flex justify-between items-center text-default-500 px-5">
      <div className="flex h-5 items-center gap-3">
        <span className="text-black">Doing:</span> XX{" "}
        <Divider orientation="vertical" /> XX
      </div>
      <div className="flex h-5 items-center gap-3">
        <span className="text-black">Total:</span> XX{" "}
        <Divider orientation="vertical" /> XX
      </div>
    </div>
  );
};

export default Footer;
