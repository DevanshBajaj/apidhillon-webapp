import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Link, Collapse, Button, Modal, Text, Grid, Card } from '@nextui-org/react';

export async function getStaticProps() {
  const res = await fetch(`https://api-dhillon.deta.dev/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>AP Dhillon songs list</title>
        <meta name="Catalog sorta" content="thanks to apidhillon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <Text margin="0rem" h3>AP Dhillon Discography</Text>
        <Grid.Container gap={2} justify="center">
          {data.map((ap, index) => {

            let ytEmbeded = ap.video_link.replace('/watch?v=', '/embed/')
            return (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card bordered shadow={false} hoverable css={{ mw: "100%" }} key={index}>
                  <Text margin="1rem 0">
                    <Text>Song ↪   {ap.title}</Text>
                    <Text>Singer ↪ {ap.singer.join(' , ')}</Text>
                    <Text>Lyricist ↪ {ap.lyricist.join(' , ')}</Text>
                  </Text>
                  <Link href={ap.video_link} color="primary" className={styles.description}>Youtube Link</Link>

                  <Collapse.Group>
                    <Collapse css={{ mw: "100%" }} title={`Play ${ap.title}`}>
                      <iframe width="100%" height="80%"
                        src={`${ytEmbeded}?controls=1`}>
                      </iframe>
                    </Collapse>
                  </Collapse.Group>
                </Card>
              </Grid>
            )
          })}
        </Grid.Container>
      </div>

      <footer className={styles.footer}>
        <p>Made by <Link href="https://github.com/DevanshBajaj">Devansh Bajaj</Link></p>
        <p>Thanks to Abhishek for the <Link href='https://github.com/akaushik759/api-dhillon'>API</Link></p>
      </footer>
    </div >
  )
}
