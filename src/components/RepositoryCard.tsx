import {Button, Card, Col} from "react-bootstrap";
import type {GHRepository} from "../lib/types.ts";

interface RepositoryCardProps {
    repo: GHRepository
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
    return (
        <Col xs={12} md={3}>
            <Card className="h-100 bg-dark text-white border-secondary d-flex flex-column">
                <Card.Header className="border-secondary fw-bold">
                    {repo.name}
                </Card.Header>

                <Card.Body className="p-3 d-flex flex-column flex-grow-1">
                    <Card.Text className="flex-grow-1">
                        {repo.description ? (
                            repo.description
                        ) : (
                            <span className="text-muted fst-italic text-white-50">
                                No description provided.
                            </span>
                        )}
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="border-0 bg-transparent mt-auto">
                    <Button variant="outline-light" size="sm" className="w-100" href={repo.html_url} target="_blank">
                        Go to Repo
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}