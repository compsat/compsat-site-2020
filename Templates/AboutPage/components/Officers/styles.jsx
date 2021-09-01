import styled from "styled-components";

export const OfficersWrapper = styled.div`
  h2 {
    text-align: left;
    margin-bottom: 24px;
  }

  h3 {
    text-align: left;
    margin-bottom: 8px;
    font-weight: 500;
  }

  p {
    text-align: left;
    margin-bottom: 4px;
  }

  @media screen and (min-width: 800px) {
    max-width: 1400px;
    margin: auto;
    z-index: 2;
    position: relative;

    h2 {
      text-align: center;
      margin-bottom: 48px;
    }
  }
`;

export const Top2Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DepartmentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DepartmentsHalf = styled.div`
  @media screen and (min-width: 800px) {
    width: 48%;
  }
`;

export const Department = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 800px) {
    margin-bottom: 48px;
  }
`;

export const EBACMember = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 8px;

  p {
    color: #07106D;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 16px;
  }
`;

export const Top2Member = styled(EBACMember)`
  @media screen and (min-width: 800px) {
    width: 48%;
    margin-bottom: 48px;
  }
`;

export const EBMember = styled(EBACMember)``;

export const ACMember = styled(EBACMember)``;

// export const ACMember = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 16px;
//   margin-bottom: 8px;

//   @media screen and (min-width: 800px) {
//     margin-bottom: 16px;
//   }
// `;

export const OfficerContent = styled.div`
  width: 65%;
`;

export const OfficerPicture = styled.div`
  width: 80px;
  height: 80px;
  border: 3px #FFF solid;
  border-radius: 50%;
  background: #07106D;
  background-size: cover;
  background-position: center;
  margin-right: 8px;
  background-image: url('${props => props.image}');
`;

export const OfficerDetails = styled.p`
  font-size: 8px;

  @media screen and (min-width: 800px) {
    font-size: 12px;
  }
`;
