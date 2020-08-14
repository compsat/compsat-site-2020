import { OptionContainer, Title } from './styles'

const ServicesOption = ({ Name, Icon }) => (
    <OptionContainer>
        <Title> {Name} </Title>
        <img src={Icon} alt="Icon"></img>
    </OptionContainer>
);

export default ServicesOption;