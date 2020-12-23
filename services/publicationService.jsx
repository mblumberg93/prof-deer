export const publicationString = (publication) => {
    let pubStr = authorsString(publication.authors)
    pubStr += "(" + publication.year + "). "
    pubStr += publication.title + ". "
    pubStr += sourceString(publication)
    return {__html: pubStr}
}

export const publicationKey = (publication) => {
    let title = publication.title.substring(0,12).replace(' ', '_')
    let source = "TBD"
    if (publication.source) {
        source = publication.source.replace(' ', '_')
    }
    return `pub_${ title }_${ source }`;
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
    if (!publication.source) {
        return ""
    }
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