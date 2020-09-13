import styled from "styled-components";

export const OfficersWrapper = styled.div`
  h2 {
    text-align: left;
    margin-bottom: 24px;
  }

  h3 {
    text-align: left;
    margin-bottom: 8px;
  }

  p {
    text-align: left;
    margin-bottom: 4px;
  }
`;

export const Department = styled.div`
  margin-bottom: 16px;
`;

export const Top2Member = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 24px;

  p {
    color: #07106D;
  }
`;

export const EBMember = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 8px;

  p {
    color: #07106D;
  }
`;

export const ACMember = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;
`;

export const OfficerContent = styled.div`
  width: 65%;
`;

export const OfficerPicture = styled.div`
  width: 74px;
  height: 74px;
  border: 3px #FFF solid;
  border-radius: 50%;
  background: #07106D;
  margin-right: 8px;
`;

export const OfficerDetails = styled.p`
  font-size: 8px;
`;
