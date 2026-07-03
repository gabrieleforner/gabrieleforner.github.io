import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { RepositoryCard } from "../components/RepositoryCard.tsx";
import { useEffect, useState } from "react";
import type { GHRepository } from "../lib/types.ts";
import { fetchGHRepositories } from "../lib/api.ts";

export default function ProjectsSection() {
  const GH_USERNAME = "gabrieleforner";
  const [repos, setRepos] = useState<GHRepository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);

    (async () => {
      setLoading(true);

      try {
        const data = await fetchGHRepositories(GH_USERNAME);
        setRepos(data);
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        setError(errorMessage);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [GH_USERNAME]);

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Container className="p-5">
          <h3 className="display-6">Projects</h3>
          <Row className="g-3 align-items-center">
            <p>
              In order to always improve myself and learn new things, i like the approach to learn-by-doing, so
              whenever i find myself to learn something new, i start a project that involves it. Here you can
              find a list of GitHub-hosted repositories of projects i build (or that are still ongoing). Enjoy!
            </p>
            {loading && (
              <Col xs={12}>
                <p>Loading repositories...</p>
              </Col>
            )}
            {error && (
              <Col xs={12}>
                <p style={{ color: "red" }}>Error: {error}</p>
                <p>⚠️ Failed to pull repositories</p>
              </Col>
            )}
            {!loading && !error && (
              <Row className="g-4">
                {repos.map((repo) => (
                  <RepositoryCard key={repo.id} repo={repo} />
                ))}
              </Row>
            )}
          </Row>
        </Container>
      </motion.div>
    </section>
  );
}