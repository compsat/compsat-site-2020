import { OptionContainer, Title } from './styles'
import Link from 'next/link'

const ServicesButton = ({ Name, Icon, Page, onClick }) => (
    <OptionContainer onClick={onClick}>
        <img src={Icon} alt="Icon"></img>
        <Title> {Name} </Title>
        
    </OptionContainer>
);

export default ServicesButton;