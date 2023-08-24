import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../style/bio.module.scss'
import Image from 'next/image'

export default function Bio() {
    return (
        <Layout>
            <p>
                I was born and raised in Honolulu, Hawaii. I then attended Claremont McKenna College, where I majored in Psychology and was an NCAA athlete competing in swimming and water polo. I joined the <a target="_blank" href="https://psychologylawpolicylab.com/people">Psychology, Law, and Policy Lab</a> in my junior year to work with Dr. Daniel Krauss, where I conducted research on jury decision making. I also completed my senior honors thesis in the lab, where I studied how jurors assess the credibility of expert testimony of therapists in sexual assault trials. In my junior and senior years I also joined the <a target="_blank" href="https://www.cmc.edu/autism-center">Claremont Autism Center</a> as a research assistant, where I worked with Dr. Lindsey Sterling on a research study assessing romantic relationships among young adults with autism. I spent my senior year working as a research assistant in the <a target="_blank" href="https://www.bergerinstitute.org/">Berger Institute for Work, Family and Children</a> with Dr. Tomoe Kanaya. During that year and the year after I graduated, I conducted research on barriers such as anxiety for college students and young adults entering the workforce. 
            </p>
            <p>
                To gain training in the biological embedding of early experiences across development, I pursued my PhD in Developmental Psychology at the University of California, Davis with Dr. Camelia Hostinar. In the <a target="_blank" href="https://seslab.ucdavis.edu/">Social Environment and Stress Lab</a>, my colleagues and I conducted studies of the effects of early stress (e.g., low socioeconomic status, acute stress) on children's health and development. My dissertation focused on how different types of stress (low socioeconomic stress, acute stress, and Covid-19-related financial stress) impacts the executive function performance of children and adolescence. 
            </p>
            <p>
                During my graduate training, I often had questions about how the prenatal and postnatal environments might interact to influence child outcomes such as physical and mental health. These questions led me to pursue further training in the assessment of prenatal influences on child health. I pursued my postdoctoral training with Drs. Elysia Davis, Jenalee Doom, and Benjamin Hankin at the <a target="_blank" href="https://careprojectdenver.org/current-projects">Care Project</a> at the University of Denver. I am pursuing this training with funding from the NHLBI (<a target="_blank" href="https://reporter.nih.gov/search/ZI0lXL5oNUO6aaWMMdRKMg/project-details/10538061">F32HL165844</a>) on the association between placental corticotrophin releasing hormone and both child cardiovascular disease risk and obesogenic eating behaviors. I also am currently conducting research on prenatal and infancy experiences on child stress neurobiology, health, and behavior.
            </p>
            <p>
                My aim for my future research is to examine interactions between the prenatal and postnatal environment in predicting child physical and mental health, and to have a focus on early targets for intervention. 
            </p>
            <p>You can download my latest CV <a href="pdfs/LillyBelleDeerCV 8.23.23.pdf" target="_blank">here</a>.</p>
            <Container>
                <Row>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/IMG_5572.jpeg" height={260} width={260} priority='true' alt="LillyBelle Deer - NLBI" />
                    </Col>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/IMG_7043.png" height={125} width={260} priority='true' alt="LillyBelle Deer - Care Project" />
                    </Col>
                    <Col md={4} className={styles.bioImageCol}>
                        <Image className={styles.bioImage} src="/images/SES Lab_for About Page.png" height={235} width={260} priority='true' alt="LillyBelle Deer - Social Environment and Stress Lab" />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}