import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from'../style/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={6} className={styles.homeImageContainer}>
            <Image className={styles.homeImage} src="/images/home.jpg" height={500} width={350} layout='responsive' />
          </Col>
          <Col md={6}>
            <div className={styles.homeIntro}>
              <p>Hello! I am a Developmental Psychology Ph.D. Candidate at the University of California, Davis. I study the role of stress in shaping child development, including outcomes such as health and academic achievement. I am particularly interested in moderators of these processes, such as individual differences in stress neurobiology and cognitive processes like executive function.</p>
              <p>I am completing my doctoral studies with <a target="_blank" href="https://psychology.ucdavis.edu/people/hostinar">Camelia E. Hostinar</a> in the <a target="_blank" href="http://seslab.ucdavis.edu/">Social Environment and Stress Lab</a>. I received my B.A. from Claremont McKenna College in 2015, my M.A. from UC Davis in 2018, and will complete my Ph.D. from UC Davis in Summer 2021.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}