import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={6}>
            <img className="home-image" src="/images/home.jpg" />
          </Col>
          <Col md={6}>
            <p>Lorem ipsum dolor sit amet, quem periculis ius ad, has vivendum scribentur id, aperiam intellegam pri ei. At mei sint nemore explicari, ad has aeque postea. Audire insolens expetenda ne pri. Cu inani tantas comprehensam mea, putent tamquam qualisque an sed, ne paulo eloquentiam sed.</p>
            <p>Ad has ubique posidonium delicatissimi. Quis noster meliore te nec, ex duo iudicabit honestatis. Ex porro numquam cotidieque mei, nec exerci nostro saperet ex, ut veniam feugait urbanitas mei. Honestatis ullamcorper vim ex, quo stet vituperata et. Atqui omnesque intellegebat qui eu.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}