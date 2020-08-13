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
                <Microsite MicrositeTitle="QPI Calculator"
                PrimaryIcon={QPICalcImg}> </Microsite>

                <Microsite MicrositeTitle="QPI Calculator"> </Microsite>

                <Microsite MicrositeTitle="QPI Calculator"> </Microsite>
            </Container>
        </div>
    )
} 
