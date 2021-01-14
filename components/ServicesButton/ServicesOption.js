import { Service, Title } from './styles'
import Link from 'next/link'

const ServicesButton = ({ Name, Icon, Page, onClick }) => (
    <Service onClick={onClick} type="button">
        <img src={Icon} alt="Icon"></img>
        <Title> {Name} </Title>
        
    </Service>
);

export default ServicesButton;