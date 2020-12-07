import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import { Pubs } from '../lib/pubs';

export default function Publications() {
    const publicationString = (publication, number) => {
        let pubStr = number + ". "
        pubStr += authorsString(publication.authors)
        pubStr += "(" + publication.year + "). "
        pubStr += publication.title + ". "
        pubStr += sourceString(publication)
        return {__html: pubStr}
    }

    const authorsString = (authors) => {
            let authorsStr = ""
            for (let [index, author] of authors.entries()) {
                let authorStr = author == "Deer, L. K." ? "<span class=\"pub-author\">" + author + "</span>" : author
                if (index == authors.length - 1) {
                    authorStr = "& " + authorStr
                    authorsStr += authorStr + " "
                } else {
                    authorsStr += authorStr + ", "
                }
            }
            return authorsStr
    }

    const sourceString = (publication) => {
        let sourceStr = "<span class=\"pub-source\">" + publication.source;
        if (publication.volume_issue) {
            sourceStr += ", " + publication.volume_issue
        }
        if (publication.reference) {
            sourceStr += ",</span> " + publication.reference
        } else {
            sourceStr += "</span>."
        }
        return sourceStr
    }

    return (
        <Layout>
            <p>Below is a list of my current published work. Please feel free to reach out if you have any questions on the publications.</p>
            {Pubs.map((publication, index) => (
                <p dangerouslySetInnerHTML={publicationString(publication, (Pubs.length - index))}></p>
            ))}
        </Layout>
    )
}