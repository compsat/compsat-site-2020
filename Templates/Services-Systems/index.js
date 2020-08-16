import { SectionTitleWrapper, SectionTitle, Wrapper, DesignContainerTop, DesignContainerBottom } from "../Services-WebDev/styles"

import TopDesign from '../../public/static/img/services-design-top.svg'
import BottomDesign from '../../public/static/img/services-background2.svg'
import RegImg from '../../public/static/img/services-systems-reg.svg'
import MemTrackImg from '../../public/static/img/services-systems-memtrack.svg'
import CustomImg from '../../public/static/img/services-systems-custom.svg'

import Service from '../../components/Service'

export default () => {
    return(
        <Wrapper>
            <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
            <SectionTitleWrapper>
                <SectionTitle>Systems</SectionTitle>
            </SectionTitleWrapper>
            <Service 
                Title="Registration Systems"
                Icon={RegImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="Member-Tracking Systems"
                Icon={MemTrackImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="Custom Systems"
                Icon={CustomImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <DesignContainerBottom> <img src={BottomDesign} /> </DesignContainerBottom>
        </Wrapper>
    );
};
