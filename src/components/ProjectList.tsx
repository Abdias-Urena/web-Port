"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Home = () => {
  const [user, setUser] = useState<any>(null); 
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: user } = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${'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'}`,
          },
        });

        const { data: repos } = await axios.get(
          "https://api.github.com/user/repos",
          {
            headers: {
              Authorization: `Bearer ${'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'}`,
            },
          }
        );

        setUser(user);
        setRepos(repos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5" id="projects">
      {repos.length > 0 && (
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Carousel>
            {repos.map((repo: any) => (
              <Carousel.Item key={repo.id}>
                <Image
                  className="d-block w-100"
                  src="/imagenPro.jpg"
                  alt={repo.name}
                  width={1000}
                  height={600}
                />
                <Carousel.Caption className=".carousel-caption">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <p>Language: {repo.language}</p>
                  <p>Stars: {repo.stargazers_count}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
