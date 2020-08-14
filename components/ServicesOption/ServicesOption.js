import { OptionContainer, Title } from './styles'

const ServicesOption = ({ Name, Icon }) => (
    <OptionContainer>
        <img src={Icon} alt="Icon"></img>
        <Title> {Name} </Title>
    </OptionContainer>
);

export default ServicesOption;