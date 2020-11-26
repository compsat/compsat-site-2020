import { Wrapper, TitleWrapper,Description } from './styles'

const Service = ({ Icon, Title, Caption }) => (
    <Wrapper>
        <img src={Icon} />
        <TitleWrapper>
            <h5>{Title}</h5>
        </TitleWrapper>
        <Description>{Caption}</Description>
    </Wrapper>
);

export default Service;
