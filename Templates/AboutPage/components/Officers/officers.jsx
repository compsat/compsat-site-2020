import {
  OfficersWrapper,
  Top2Container,
  DepartmentsContainer,
  DepartmentsHalf,
  Department,
  Top2Member,
  EBMember,
  ACMember,
  OfficerPicture,
  OfficerContent,
  OfficerDetails,
} from "./styles";
import { attributes } from "../../../../content/aboutUs.md";

const Officers = () => {
  let { ebac } = attributes;
  let { top2, communications, correl, dnt, secgen, ea, finance, memrel } = ebac;

  return (
    <OfficersWrapper>
      <h2>Executive Board + Associates Council</h2>

      <Top2Container>
        {top2.map((member) => (
          <Top2Member key={member.name}>
            <OfficerPicture />
            <OfficerContent>
              <p>{member.name}</p>
              <OfficerDetails>{member.position}</OfficerDetails>
              <OfficerDetails>{member.email}</OfficerDetails>
            </OfficerContent>
          </Top2Member>
        ))}
      </Top2Container>

      <DepartmentsContainer>
        <DepartmentsHalf>
          <Department>
            <h3>Department of Communications</h3>
            {communications.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Corporate Relations</h3>
            {communications.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Development and Training</h3>
            {dnt.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>
        </DepartmentsHalf>

        <DepartmentsHalf>
          <Department>
            <h3>Department of Documentation</h3>
            {secgen.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of External Affairs</h3>
            {ea.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Finance</h3>
            {finance.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Member Relations</h3>
            {memrel.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  <OfficerPicture />
                  <OfficerContent>
                    <p>{member.name}</p>
                    <OfficerDetails>{member.position}</OfficerDetails>
                    <OfficerDetails>{member.email}</OfficerDetails>
                  </OfficerContent>
                </ACMember>
              )
            )}
          </Department>
        </DepartmentsHalf>
      </DepartmentsContainer>
    </OfficersWrapper>
  );
};

export default Officers;
