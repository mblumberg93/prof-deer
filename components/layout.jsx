import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LillyBelle Deer</title>
        <meta name="description" 
              content="LillyBelle Deer's Professional Website" />
        <meta name="og:title" content="LillyBelle Deer" key="ogtitle" />
        <meta property="og:description" content="LillyBelle Deer's Professional Website" key="ogdesc" />
        <meta name="author" content="Marc Blumberg" />
        <meta name="designer" content="Icons made by Smashicons (https://www.flaticon.com/authors/smashicons) from www.flaticon.com (https://www.flaticon.com/)" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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