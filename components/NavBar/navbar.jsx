import {NavMobileWrapper} from './styles'
import Hamburger from '../../public/assets/img/hamburger.svg'

const NavBar = () => (
    <NavMobileWrapper>
        <img src="img/logo.svg" alt="CompSAt Logo"/>
        <img src={Hamburger} alt="Hamburger Icon"/>
    </NavMobileWrapper>
);

export default NavBar