import {Card, Col, Container, Row } from "react-bootstrap";
import swd_img from '@/assets/SWDeveloperStock.png';
import { motion } from "framer-motion";
import type {GHStatGalleryEntry} from "../lib/types.ts";

export default function AboutMeSection() {
    return (
        <section id="about-me">
            <motion.div initial={{ opacity: 0}}  whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                <Container className="p-5">
                    <h3 className="display-6">About Me</h3>
                    <Row className="g-3 align-items-center">
                        <Col xs={5} className="p-0 d-flex justify-content-center">
                            <img src={swd_img} alt="Stock Logo" width="100%" className="img-fluid rounded-2"/>
                        </Col>

                        <Col xs={7} className="ps-5">
                            <h1 className="blockquote">"Pushing the limits of code"</h1>
                            <p>
                                Hi, I’m Gabriele! I am a student software developer. I am passionate about backend platforms and
                                systems design. What I like the most about building backend services is the continuous challenge
                                of optimizing it at its finest, to ensure the maximum performance, alongside safe, easy-to-consume
                                and scalable APIs.
                            </p>
                            <p>
                                My approach to software development is mainly test-driven, where each component of a microservice
                                has to perfectly work by itself and integrate at its best with the rest of the infrastructure. When
                                designing solutions, I always try to keep my code as clean and decoupled as possible to maintain a robust architecture.
                            </p>
                            <p>
                                One last big reminder I have is to document everything, even if it's the easiest component, so it's way
                                easier to understand, extend, and debug. In terms of AI usage, I hardly use it for implementing full
                                parts, but I delegate to it the work that I am sure it will hardly fail to write. When this happens,
                                I always review its work (Trust is good, but not trusting is better).
                            </p>
                        </Col>
                    </Row>
                    <GitHubStats />
                </Container>
            </motion.div>
        </section>
    );
}

function GitHubStats() {
    const statsImages: GHStatGalleryEntry[] = [
        {
            id: 1,
            title: "Contribution Graph",
            imageUrl: "https://raw.githubusercontent.com/gabrieleforner/gabrieleforner/output/profile-summary-card-output/github_dark/0-profile-details.svg"
        },
        {
            id: 2,
            title: "GH Commits per Language",
            imageUrl: "https://raw.githubusercontent.com/gabrieleforner/gabrieleforner/output/profile-summary-card-output/github_dark/2-most-commit-language.svg"
        }
    ];

    return (
        <Container className="p-5" id="stats">
            <h3 className="display-6">GitHub Analytics</h3>

            <Row className="g-3 flex-nowrap">
                {statsImages.map((stat) => (
                    <Col xs={6} key={stat.id}>
                        <Card className="bg-transparent border-0">
                            <Card.Body className="p-0">
                                <img
                                    src={stat.imageUrl}
                                    alt={stat.title}
                                    className="img-fluid"
                                    style={{
                                        maxHeight: '100%',
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                    loading="lazy"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}