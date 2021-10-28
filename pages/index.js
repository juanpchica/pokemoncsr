import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Container, FormControl, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

import { useQuery } from "react-query";

import { useAuthState, useAuthDispatch } from "../components/context";

export async function getServerSideProps(context) {
  console.log(context, "context server indexxx");
  return {
    props: {},
  };
}

export default function Main(props) {
  console.log(props, "Props from indexxxx");

  const datas = useAuthState();

  console.log(datas, "data from provider");

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
          value='fds'
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </Container>
    </div>
  );
}
