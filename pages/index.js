import Head from "next/head";
import { Container } from "react-bootstrap";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon csr</title>
        <meta name='description' content='Pokemon csr' />
      </Head>

      <Container></Container>
    </div>
  );
}
