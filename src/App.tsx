import {Container, Nav, Navbar} from "react-bootstrap";
import type {SocialButton} from "./lib/types.ts";

import gh_logo from '@/assets/GitHubLogo.svg';
import in_logo from '@/assets/LinkedInLogo.png';
import AboutMeSection from '@/sections/AboutMeSection.tsx';
import ProjectsSection from '@/sections/ProjectsSection.tsx';
import ContactsSection from '@/sections/ContactsSection.tsx';

export default function PortfolioView() {
    const socialButtons: SocialButton[] = [
        { socialUrl: "https://github.com/gabrieleforner", buttonImage: gh_logo },
        { socialUrl: "https://linkedin.com/in/gabriele-forner", buttonImage: in_logo }
    ];

    return (
        <>
            { /* Navbar with social links and in-page links */}
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary justify-content-between">
                <Container>
                    <Navbar.Brand href="#">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        {
                            socialButtons.map((social: SocialButton) => {
                                return (
                                    <Nav.Link href={social.socialUrl}>
                                        <img src={social.buttonImage} width={25} height={25}/>
                                    </Nav.Link>
                                );
                            })
                        }
                    </Nav>
                </Container>
            </Navbar>

            { /* Page sections */}
            <AboutMeSection/>
            <ProjectsSection/>
            <ContactsSection/>
        </>
    );
}