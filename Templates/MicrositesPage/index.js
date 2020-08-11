import Microsite from '../../components/Microsite'
import QPICalcImg from './microsite-qpi-calculator.svg'
import testimg from '../../public/static/img/microsite-qpi-calculator 2.svg'

export default () => {
    return (
        <Microsite
            MicrositeTitle="QPI Calculator"
            PrimaryIcon={QPICalcImg}
            SecondaryIcon={testimg}
            >   
        </Microsite>
        
    )
}
