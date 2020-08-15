import Service from '../../components/Service'
import CompanyImg from '../../public/static/img/services-webdev-company.svg'
import CMSImg from '../../public/static/img/services-webdev-cms.svg'
import ECommImg from '../../public/static/img/services-webdev-ecomm.svg'
import WebAppImg from '../../public/static/img/services-webdev-webapp.svg'

import { SectionTitleWrapper, SectionTitle, Wrapper } from './styles'

export default () => {
    return(
        <Wrapper>
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
        </Wrapper>
    );
};