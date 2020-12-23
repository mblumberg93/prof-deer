import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../style/outside_academia.module.scss'

export default function OutsideAcademia() {
    return (
        <Layout>
            <Container className={styles.oaImages}>
                <Row>
                    <Col md={6}>
                        <img src="/images/IMG-2049.jpg" />
                    </Col>
                    <Col md={6}>
                        <Container>
                            <Row>
                                <img src="/images/IMG-9162.jpg" />
                            </Row>
                            <Row>
                                <img src="/images/IMG-9972.jpg" />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <p>I was born and raised in Honolulu, Hawai'i and have lived in various cities in California for most of my adult life. Living in such beautiful parts of the country has inspired a love for the outdoors and I spend many weekends hiking and camping.</p>
            <p>Growing up near the ocean, aquatic sports have been a huge part of my life. I swam and played water polo throughout high school and college and now swim with <a target="_blank" href="https://www.damfast.org/">Davis Aquatics Masters</a></p>
            <p>I currently live in Sacramento with my fiancé, Marc, and my three dogs, Doug, Milo, and Dot.</p>
        </Layout>
    )
}