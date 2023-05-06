"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const ProjectsList = () => {
  const [repos, setRepo] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/Abdias-Urena/repos"
        );
        setRepo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5" id="projects">
      {repos.length > 0 && (
        <div className="mt-5">
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
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
