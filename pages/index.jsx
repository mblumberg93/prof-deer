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
            <Image className={styles.homeImage} src="/images/home.jpg" height={500} width={350} layout='responsive' priority='true' alt="LillyBelle Deer Head Shot" />
          </Col>
          <Col md={6}>
            <div className={styles.homeIntro}>
              <p>
                Hello! My name is LillyBelle Deer and I am a F32 postdoctoral researcher at the University of Denver. My research integrates developmental and health psychology to understand how stress and early experience “gets under the skin” and impacts physical and mental health. I currently work with Drs. Elysia Davis, Jenalee Doom, and Benjamin Hankin at the <a target="_blank" href="https://careprojectdenver.org/current-projects">Care Project</a> at the University of Denver. I am currently funded by the National Heart Lung and Blood Institute on a F32 grant where I aim to assess the role of placental corticotrophin releasing hormone (CRH) in the development of child cardiovascular health and eating behaviors. I am particularly interested in prenatal and early childhood experiences that shape the health and behavior of children.
              </p>
              <p>
                I completed my doctoral studies in Developmental Psychology with <a target="_blank" href="http://seslab.ucdavis.edu/">Dr. Camelia E. Hostinar</a> at the University of California Davis in June 2021, where I studied the effects of acute and chronic stress on children's stress neurobiology, health, and cognitive processes such as executive function. I received my B.A. from Claremont McKenna College in 2015.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}