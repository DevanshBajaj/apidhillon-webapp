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


  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

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
            let re = /(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
            let id = ap.video_link.match(re)[7];
            return (
              <Grid xs={8} sm={6} md={4} key={index}>
                <Card bordered shadow={false} hoverable css={{ mw: "400px" }} key={index}>
                  <p>Song ↪   {ap.title}</p>
                  <p>Singer ↪ {ap.singer.join(' , ')}</p>
                  <p>Lyricist ↪ {ap.lyricist.join(' , ')}</p>
                  <Button auto flat color="error" onClick={handler}>
                    Youtube Player
                  </Button>
                  <Modal
                    scroll
                    fullScreen
                    closeButton
                    blur
                    aria-labelledby="Youtube Player"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Header>
                      <Text id="modal-title" size={18}>
                        Play &nbsp;
                        <Text b size={18}>
                          {ap.title}
                        </Text>
                      </Text>
                    </Modal.Header>
                    <Modal.Body>
                      <iframe width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${id}?controls=1`}>
                      </iframe>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                  </Modal>
                </Card>
              </Grid>
            )
          })}
        </Grid.Container>
      </div>


      <footer className={styles.footer}>
        <p>Made by <a href="https://github.com/DevanshBajaj">Devansh Bajaj</a></p>
        <p>Thanks to Abhishek for<a href='https://github.com/akaushik759/api-dhillon'>API</a></p>
      </footer>
    </div >
  )
}
