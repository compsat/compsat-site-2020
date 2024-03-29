import {
  OfficersWrapper,
  Top2Container,
  DepartmentsContainer,
  DepartmentsHalf,
  Department,
  Top2Member,
  EBMember,
  ACMember,
  OfficerContent,
  OfficerDetails,
  OfficerName,
  OfficerPicture,
} from './styles';
import Moderator from './../Moderator';
import { attributes } from '../../../../content/aboutUs.md';

const Officers = () => {
  let { ebac } = attributes;
  // let { top2, communications, correl, dnt, secgen, ea, finance, memrel } = ebac;
  let { top2, creatives, dnt, secgen, ea, finance, memrel } = ebac;

  const genOfficerContent = (member) => {
    return (
      <>
        <OfficerPicture image={`/static/img/officers/${member.image}`} />
        <OfficerContent>
          <OfficerName>{member.name}</OfficerName>
          <OfficerDetails>{member.position}</OfficerDetails>
          <OfficerDetails>
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </OfficerDetails>
        </OfficerContent>
      </>
    );
  };

  return (
    <OfficersWrapper>
      <h2>Executive Board + Associates Council</h2>

      <Top2Container>
        {top2.map((member) => (
          <Top2Member key={member.name}>{genOfficerContent(member)}</Top2Member>
        ))}
      </Top2Container>

      <DepartmentsContainer>
        <DepartmentsHalf>
          <Department>
            <h3>Department of Communications</h3>
            {creatives.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department>

          {/* <Department>
            <h3>Department of Corporate Relations</h3>
            {correl.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department> */}

          <Department>
            <h3>Department of Development and Training</h3>
            {dnt.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
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
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of External Affairs</h3>
            {ea.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Member Relations</h3>
            {memrel.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department>

          <Department>
            <h3>Department of Finance</h3>
            {finance.map((member, idx) =>
              idx == 0 ? (
                <EBMember key={member.name}>
                  {genOfficerContent(member)}
                </EBMember>
              ) : (
                <ACMember key={member.name}>
                  {genOfficerContent(member)}
                </ACMember>
              )
            )}
          </Department>
        </DepartmentsHalf>
      </DepartmentsContainer>

      <Moderator />
    </OfficersWrapper>
  );
};

export default Officers;
