import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:karthisaloki123@gmail.com"
          data-hover="Let's talk!"
        >
   
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="tel:+919080610456">Phone</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/karthikeyanrock"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/karthikeyan-s-89152226a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="">
          karthisaloki123@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/karthikeyanrock"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karthikeyan S
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
