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
                            <p>I'm always open to discussing new projects, opportunities, or just having a chat about
                                technology. Whether you have a question, a proposal, or simply want to connect, feel
                                free to reach out — I'll do my best to get back to you as soon as possible.
                            </p>
                        </Col>
                        <Col xs={5} className="ps-5">
                            <p>You can find my socials down here or in the top right of the page or down below.</p>

                            <a href="https://linkedin.com/in/gabriele-forner">LinkedIn | Gabriele Forner </a> <br />
                            <a href="https://github.com/gabrieleforner">GitHub | <code>gabrieleforner</code> </a> <br />
                            <a href="mailto:gabriele.forner@icloud.com">Email Address </a>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </section>
    );
}