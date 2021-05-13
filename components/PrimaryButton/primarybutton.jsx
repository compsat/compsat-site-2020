import React from "react";
import { PrimaryButtonWrapper } from "./styles";

const PrimaryButton = React.forwardRef(
  ({ children, isLink, onClick, href }, ref) => (
    <PrimaryButtonWrapper
      as={isLink && "a"}
      onClick={onClick}
      href={href}
      ref={ref}
    >
      {children}
    </PrimaryButtonWrapper>
  )
);

export default PrimaryButton;
