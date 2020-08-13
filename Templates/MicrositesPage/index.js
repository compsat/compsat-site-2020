import Microsite from '../../components/Microsite'
import MicrositeHeader from './components/Header'
import { Container } from './styles'
import QPICalcImg from '../../public/static/img/microsite-qpi-calculator.svg'
import testimg from '../../public/static/img/microsite-qpi-calculator 2.svg'

export default () => {
    return (
        <div>
            <MicrositeHeader> </MicrositeHeader>
            <Container> 
                <Microsite MicrositeTitle="QPI CALCULATOR"
                PrimaryIcon={QPICalcImg}> </Microsite>

                <Microsite MicrositeTitle="GEARBOX"> </Microsite>

                <Microsite MicrositeTitle="WILDCARD"> </Microsite>
            </Container>
        </div>
    )
} 
