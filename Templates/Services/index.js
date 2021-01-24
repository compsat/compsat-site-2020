import React, { useState } from 'react'

import ServicesButton from "../../components/ServicesButton"
import {
    ServicesLandingContainer,
    Background,
    OptionsContainer,
    Header,
    Headline,
    Headline_container,
    Background_Bottom,
    Headline_Img,
    Background_Top,
    Bottom,
    DesktopWrapper,
    Sys_BG,
    MobileWrapper,
    WD_bg1,
    WD_bg2,
    ContentContainer
} from "./styles"
import Icon_Webdev from "../../public/static/img/services-webdev.svg"
import Icon_Systems from "../../public/static/img/services-systems.svg"
import Icon_Learning from "../../public/static/img/services-learning.svg"
import BG_Design1 from "../../public/static/img/services-background1.svg"
import BG_Design2 from "../../public/static/img/services-background2.svg"
import Banner from "../../public/static/img/services-header.svg"

import Service from '../../components/Service'
import CompanyImg from '../../public/static/img/services-webdev-company.svg'
import CMSImg from '../../public/static/img/services-webdev-cms.svg'
import ECommImg from '../../public/static/img/services-webdev-ecomm.svg'
import WebAppImg from '../../public/static/img/services-webdev-webapp.svg'
import webdev_desk_bg1 from '../../public/static/img/services-webdev-dbg1.svg'
import webdev_desk_bg2 from '../../public/static/img/services-webdev-dbg2.svg'

import TopDesign from '../../public/static/img/services-design-top.svg'
import BottomDesign from '../../public/static/img/services-background2.svg'

import { SectionTitleWrapper, SectionTitle, Wrapper, DesignContainerTop, DesignContainerBottom, devWrapper } from './styles'

import RegImg from '../../public/static/img/services-systems-reg.svg'
import MemTrackImg from '../../public/static/img/services-systems-memtrack.svg'
import CustomImg from '../../public/static/img/services-systems-custom.svg'
import S_bg from '../../public/static/img/services-systems-deskbg.svg'

import ProgImg from '../../public/static/img/services-LS-prog.svg'
import WebdevImg from '../../public/static/img/services-LS-webdev.svg'


export default () => {

    const [page, setPage] = useState("");
    const handleClick = (e) => {
        console.log('Free Pizza');
        console.log(e)
    }



    return (
        <ServicesLandingContainer>
            <DesktopWrapper>
                <Wrapper>
                <Background_Top>
                    <img src={BG_Design1} />
                </Background_Top>
            

                <Header>
                    <Headline_Img><img src={Banner} alt="banner" /> </Headline_Img>
                    <Headline_container><Headline>What We Can Do For You</Headline></Headline_container>
                </Header>
            
                <OptionsContainer>
                    <ServicesButton
                        Name="WEB DEVELOPMENT"
                        Icon={Icon_Webdev}
                        type="button"
                        onClick={() => setPage("web development")} />
                    <ServicesButton
                        Name="SYSTEMS"
                        Icon={Icon_Systems}
                        type="button"
                        onClick={() => setPage("systems")} />
                    <ServicesButton
                        Name="LEARNING SERVICES"
                        Icon={Icon_Learning}
                        type="button"
                        onClick={() => setPage("learning services")} />
                </OptionsContainer>
            
                <DesignContainerBottom> <img src={BottomDesign} /> </DesignContainerBottom>
                </Wrapper>
            </DesktopWrapper>
            {page === "" ? 
            <MobileWrapper>
                <Wrapper>
                <Background_Top>
                    <img src={BG_Design1} />
                </Background_Top>
            

                <Header>
                    <Headline_Img><img src={Banner} alt="banner" /> </Headline_Img>
                    <Headline_container><Headline>What We Can Do For You</Headline></Headline_container>
                </Header>
            
                <OptionsContainer>
                    <ServicesButton
                        Name="WEB DEVELOPMENT"
                        Icon={Icon_Webdev}
                        type="button"
                        onClick={() => setPage("web development")} />
                    <ServicesButton
                        Name="SYSTEMS"
                        Icon={Icon_Systems}
                        type="button"
                        onClick={() => setPage("systems")} />
                    <ServicesButton
                        Name="LEARNING SERVICES"
                        Icon={Icon_Learning}
                        type="button"
                        onClick={() => setPage("learning services")} />
                </OptionsContainer>
            
                <DesignContainerBottom> <img src={BottomDesign} /> </DesignContainerBottom>

            </Wrapper> 
            </MobileWrapper>
            : null}

            {page === 'web development' ?
                <Wrapper>
                    <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
                    <SectionTitleWrapper>
                        <SectionTitle>Web Development</SectionTitle>
                    </SectionTitleWrapper>


                    <ContentContainer>
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
                    </ContentContainer>

                    <DesignContainerBottom> <img src={BottomDesign} /> </DesignContainerBottom>
                    <WD_bg1><img src={webdev_desk_bg1} /></WD_bg1>
                    <WD_bg2><img src={webdev_desk_bg2} /></WD_bg2>
                </Wrapper>
                : null}

            {page === 'systems' ?
                <Wrapper>
                    <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
                    <SectionTitleWrapper>
                        <SectionTitle>Systems</SectionTitle>
                    </SectionTitleWrapper>

                    <ContentContainer>
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
                    </ContentContainer>
                    <Sys_BG><img src={S_bg}/> </Sys_BG>
                    <Bottom><img src={BottomDesign} /></Bottom>
                </Wrapper>
                : null}

            {page === 'learning services' ?
                <Wrapper>
                    <DesignContainerTop> <img src={TopDesign} /> </DesignContainerTop>
                    <SectionTitleWrapper>
                        <SectionTitle>Learning Services</SectionTitle>
                    </SectionTitleWrapper>

                    <ContentContainer>
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
                    </ContentContainer>
                </Wrapper>
                : null}

        </ServicesLandingContainer>
    );
};