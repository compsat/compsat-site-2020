import { Wrapper, TitleWrapper,Description } from './styles'

const Service = ({ Icon, Title, Caption }) => (
    <Wrapper>
        <img src={Icon} />
        <TitleWrapper>
            <h4>{Title}</h4>
        </TitleWrapper>
        <Description>{Caption}</Description>
    </Wrapper>
);

export default Service;
