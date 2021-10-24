import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Container, FormControl, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

import { useQuery } from "react-query";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data } = useQuery(["q", query], async () => {
    const { data } = await axios.get(`/api/search?q=${escape(query)}`);
    return data.map((pokemon) => ({
      ...pokemon,
      image: `/pokemon/${pokemon.name.english
        .toLowerCase()
        .replace(" ", "-")}.jpg`,
    }));
  });

  return (
    <div>
      <Head>
        <title>Pokemon csr</title>
        <meta name='description' content='Pokemon csr' />
      </Head>
      <Container>
        <FormControl
          placeholder='Search'
          aria-label='Search'
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />

        {data && (
          <Row>
            {data.map(({ id, name, type, image }) => (
              <Col xs={4} key={id} style={{ padding: 5 }}>
                <Link href={`/pokemon/${name.english}`}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={image}
                      style={{ maxHeight: 300 }}
                    />
                    <Card.Body>
                      <Card.Title>{name.english}</Card.Title>
                      <Card.Subtitle>{type.join(", ")}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
