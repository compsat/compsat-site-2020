import { OptionContainer, Title } from './styles'
import Link from 'next/link'

const ServicesButton = ({ Name, Icon, Page }) => (
    <OptionContainer>
        <img src={Icon} alt="Icon"></img>
        <Title> {Name} </Title>
    </OptionContainer>
);

export default ServicesButton;