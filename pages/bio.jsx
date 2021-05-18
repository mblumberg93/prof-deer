import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../style/bio.module.scss'
import Image from 'next/image'

export default function Bio() {
    return (
        <Layout>
            <p>My research focuses on the role of stress in shaping child development, including its role in critical outcomes in their lives such as their health and academic achievement. I focus on the moderators of these processes, such as individual differences in stress neurobiology and cognitive processes like executive function. I have used and will continue to employ measures spanning multiple levels of analysis (e.g., endocrine and immune biomarkers, EKG data, survey data, behavioral measures) to (1) understand socioeconomic disparities in health and academic achievement and underlying mechanisms; (2) examine the role of stress in shaping regulatory abilities like executive function; (3) uncover protective factors for children undergoing stress.</p>
            <p>I am a graduate student affiliate of the <a target="_blank" href="https://poverty.ucdavis.edu/">UC Davis Center for Poverty Research</a>, you can read my recent policy brief <a target="_blank" href="https://poverty.ucdavis.edu/post/boosting-executive-function-may-help-close-income-based-achievement-gap">here</a>. I am also a mentor in the <a target="_blank" href="https://urc.ucdavis.edu/">UC Davis Undergraduate Research Center</a>'s <a target="_blank" href="https://urc.ucdavis.edu/MMP">Mentor-Mentee Program in Humanities, Arts, Cultural Studies and Social Sciences</a>.</p>
            <p>You can download my latest CV <a href="/pdfs/LillyBelleDeerCV 5-18-21.pdf" target="_blank">here</a>.</p>
            <Container>
                <Row>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/UC Psych_for About Page.jpg" height={260} width={260} priority='true' alt="LillyBelle Deer - UC Davis Department of Psychology" />
                    </Col>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/CPR_for About Page.png" height={125} width={260} priority='true' alt="LillyBelle Deer - Center for Poverty Research" />
                    </Col>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/SES Lab_for About Page.png" height={235} width={260} priority='true' alt="LillyBelle Deer - Social Environment and Stress Lab" />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}