import React from "react";
import Button from "./Button";

const Header = ({
  handleForm,
  titleCss,
  buttonCss,
  showButton,
  buttonTitle,
  formTitle,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className={`text-[20px] ${titleCss} `}>{formTitle}</div>
      {showButton && (
        <div>
          <Button onClick={handleForm} />
        </div>
      )}
    </div>
  );
};

export default Header;
