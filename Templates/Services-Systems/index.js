import { SectionTitleWrapper, SectionTitle, Wrapper, DesignContainerTop, DesignContainerBottom } from "../Services-WebDev/styles"

import TopDesign from '../../public/static/img/services-design-top.svg'
import BottomDesign from '../../public/static/img/services-background2.svg'

import Service from '../../components/Service'

export default () => {
    return(
        <Wrapper>
            <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
            <SectionTitleWrapper>
                <SectionTitle>Web Development</SectionTitle>
            </SectionTitleWrapper>
            <Service 
                Title="Company and Org Websites"
                Icon={CompanyImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="Content Management Systems"
                Icon={CMSImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="E-Commerce Sites"
                Icon={ECommImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <Service 
                Title="Web Applications"
                Icon={WebAppImg}
                Caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus eget porttitor augue. Ut sed diam erat. Nunc laoreet libero 
                nec dui maximus, ac feugiat sem pellentesque."/>
            <DesignContainerBottom> <img src={BottomDesign} /> </DesignContainerBottom>
        </Wrapper>
    );
};
