import Microsite from '../../components/Microsite'
import MicrositeHeader from './components/Header'
import { Container } from './styles'
import QPICalc_Icon from '../../public/static/img/microsite-qpi-calculator.svg'
import Gearbox_Icon from '../../public/static/img/microsite-gearbox.svg'
import Wildcard_Icon from '../../public/static/img/microsite-wildcard.svg'

export default () => {
    return (
        <div>
            <MicrositeHeader> </MicrositeHeader>
            <Container> 
                <Microsite 
                    MicrositeTitle="QPI CALCULATOR"
                    PrimaryIcon={QPICalc_Icon} 
                    />

                <Microsite 
                    MicrositeTitle="GEARBOX"
                    PrimaryIcon={Gearbox_Icon}
                    />

                <Microsite 
                    MicrositeTitle="WILDCARD"
                    PrimaryIcon={Wildcard_Icon} 
                    />
            </Container>
        </div>
    )
} 
