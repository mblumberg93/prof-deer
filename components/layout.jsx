import Head from 'next/head'
import styles from './layout.module.scss'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" 
              content="LillyBelle Deer's Professional Website" />
        <meta name="og:title" content="LillyBelle Deer" />
      </Head>
      <Container fluid="md" className={styles.pageContainer}>
        <Navbar expand="lg" className={styles.topNav}>
          <Navbar.Brand href="/">LillyBelle Deer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">Bio</Nav.Link>
              <Nav.Link href="">Publications</Nav.Link>
              <Nav.Link href="">Outside Academia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main className={styles.pageContent}>{children}</main>
      </Container>
    </>
  )
}