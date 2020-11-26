import { SectionTitleWrapper, SectionTitle, Wrapper, DesignContainerTop } from "../Services-WebDev/styles"

import TopDesign from '../../public/static/img/services-design-top.svg'

import ProgImg from '../../public/static/img/services-LS-prog.svg'
import WebdevImg from '../../public/static/img/services-LS-webdev.svg'

import Service from '../../components/Service'

export default () => {
    return(
        <Wrapper>
            <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
            <SectionTitleWrapper>
                <SectionTitle>Learning Services</SectionTitle>
            </SectionTitleWrapper>
            <Service 
                Title="Programming Tutorials"
                Icon={ProgImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="Web Development Tutorials"
                Icon={WebdevImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
        </Wrapper>
    );
};
