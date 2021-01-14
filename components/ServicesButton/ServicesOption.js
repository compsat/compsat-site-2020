import { Service, Title } from './styles'
import Link from 'next/link'

const ServicesButton = ({ Name, Icon, Page, type, onClick }) => (
    <Service onClick={onClick} type={type}>
        <img src={Icon} alt="Icon"></img>
        <Title> {Name} </Title>
        
    </Service>
);

export default ServicesButton;