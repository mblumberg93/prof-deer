import { Container } from 'react-bootstrap'
import Layout from '../components/layout'

export default function Bio() {
    return (
        <Layout>
            <p>Feel free to get in touch with me. Here are some ways how.</p>
            <ul>
                <li><a target="_blank" href="mailto: lillybelle.deer@du.edu">Email</a></li>
                <li><a target="_blank" href="https://twitter.com/lillybelle_deer">Twitter</a></li>
                <li><a target="_blank" href="https://www.researchgate.net/profile/Lillybelle_Deer2">ResearchGate</a></li>
                <li><a target="_blank" href="https://scholar.google.com/citations?user=p91jr18AAAAJ&hl=en">Google Scholar</a></li>
            </ul>
        </Layout>
    )
}