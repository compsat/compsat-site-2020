import WebsiteCard from '../../components/WebsiteCard'
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
                <WebsiteCard 
                    MicrositeTitle="QPI CALCULATOR"
                    PrimaryIcon={QPICalc_Icon} 
                    type="microsite"
                    />

                <WebsiteCard 
                    MicrositeTitle="GEARBOX"
                    PrimaryIcon={Gearbox_Icon}
                    type="microsite"
                    />

                <WebsiteCard
                    MicrositeTitle="WILDCARD"
                    PrimaryIcon={Wildcard_Icon} 
                    type="microsite"
                    />
            </Container>
        </div>
    )
} 
