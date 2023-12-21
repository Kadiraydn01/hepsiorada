import React from "react";
import { CDBRating, CDBContainer } from "cdbreact";

const Rating = () => {
  return (
    <CDBContainer className="text-fuchsia-400">
      <CDBRating iconFaces fillClassName="white-text" iconRegular />
    </CDBContainer>
  );
};
export default Rating;
