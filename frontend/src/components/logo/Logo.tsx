import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import NHVRLogo from "../../assets/images/woodside.svg";

interface IProps {}

const Logo: FC<IProps> = (props: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      src={NHVRLogo}
      alt="logo"
      onClick={handleClick}
      style={{
        width: 60,
        height: 60,
        cursor: 'pointer',
      }}
    />
  );
};

export default Logo;
