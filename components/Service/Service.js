import { Wrapper, TitleWrapper,Description, TextWrapper } from './styles'

const Service = ({ Icon, Title, Caption }) => (
    <Wrapper>
        <img src={Icon} />
        <TextWrapper>
            <TitleWrapper>
                <h5>{Title}</h5>
            </TitleWrapper>
            <Description>{Caption}</Description>
        </TextWrapper>
    </Wrapper>
);

export default Service;
