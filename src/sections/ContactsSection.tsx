import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";

export default function ContactsSection() {
    return (
        <section id="contacts">
            <motion.div initial={{ opacity: 0}}  whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                <Container className="p-5">
                    <h3 className="display-6">Contacts</h3>
                    <Row className="g-3 align-items-center">
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
                </Container>
            </motion.div>
        </section>
    );
}