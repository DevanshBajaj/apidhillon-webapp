import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Collapse, Button, Modal, Text, Grid, Card } from '@nextui-org/react';

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
      <div className={styles.main}>
        <Grid.Container gap={2} justify="center">
          <Navbar />
          {data.map((ap, index) => {
            return (
              <Grid xs={8} sm={6} md={4} key={index}>
                <Card bordered shadow={false} hoverable css={{ mw: "100%" }} key={index}>
                  <p>Song ↪   {ap.title}</p>
                  <p>Singer ↪ {ap.singer.join(' , ')}</p>
                  <p>Lyricist ↪ {ap.lyricist.join(' , ')}</p>
                  <a href={ap.video_link} className={styles.description}>Youtube Link</a>

                  <Collapse.Group splitted>
                    <Collapse title={`Play ${ap.title}`} expanded>
                      <iframe width="100%" height="80%"
                        src={`${ap.video_link.replace('/watch?v=', '/embed/')}?controls=1`}>
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
        <p>Made by <a href="https://github.com/DevanshBajaj">Devansh Bajaj</a></p>
        <p>Thanks to Abhishek for the <a href='https://github.com/akaushik759/api-dhillon'>API</a></p>
      </footer>
    </div >
  )
}
