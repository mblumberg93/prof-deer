import Head from 'next/head'
import styles from './layout.module.scss'
import { Container, Navbar, Nav, Alert } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" 
              content="LillyBelle Deer's Professional Website" />
        <meta name="og:title" content="LillyBelle Deer" />
      </Head>
      <Alert variant="info">
        Website under construction - check back soon!
      </Alert>
      <Container fluid="md">
        <Navbar expand="lg">
          <Navbar.Brand className={styles.topNavBrand}  href="/">LillyBelle Deer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={styles.topNavLink} href="/">Bio</Nav.Link>
              <Nav.Link className={styles.topNavLink} href="/">Publications</Nav.Link>
              <Nav.Link className={styles.topNavLink} href="/">Outside Academia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main className={styles.pageContent}>{children}</main>
      </Container>
    </>
  )
}