import React from "react";
import { SecondaryButtonWrapper } from "./styles";

const SecondaryButton = React.forwardRef(
  ({ children, isLink, onClick, href }, ref) => (
    <SecondaryButtonWrapper
      as={isLink && "a"}
      onClick={onClick}
      href={href}
      ref={ref}
    >
      {children}
    </SecondaryButtonWrapper>
  )
);

export default SecondaryButton;
