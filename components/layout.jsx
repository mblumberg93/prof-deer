import Head from 'next/head'
import Link from 'next/link'
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
              <Link href="/bio" passHref>
                <Nav.Link className={styles.topNavLink}>Bio</Nav.Link>
              </Link>
              <Link href="/publications" passHref>
                <Nav.Link className={styles.topNavLink}>Publications</Nav.Link>
              </Link>
              <Link href="/outside_academia" passHref>
                <Nav.Link className={styles.topNavLink}>Outside Academia</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link className={styles.topNavLink} >Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main className={styles.pageContent}>{children}</main>
      </Container>
    </>
  )
}