export const publicationString = (publication) => {
    let pubStr = authorsString(publication.authors)
    pubStr += yearString(publication.year, publication.in_press)
    pubStr += publication.title + ". "
    pubStr += sourceString(publication)
    pubStr += referenceString(publication.reference)
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
    return authors.replace("Deer, L. K.", "<span class=\"pub-author\">Deer, L. K.</span>")
}

const yearString = (year, inPress)  => {
    if (inPress) {
        return " (" + year + ", in press). "
    }
    return " (" + year + "). "
}

const sourceString = (publication) => {
    if (!publication.source) {
        return ""
    }
    let sourceStr = "<span class=\"pub-source\">" + publication.source;
    if (publication.volume_issue) {
        sourceStr += ", " + publication.volume_issue
    }
    if (publication.pages) {
        sourceStr += ",</span> " + publication.pages
    } else {
        sourceStr += "</span>"
    } 
    sourceStr += "."
    return sourceStr
}

const referenceString = (reference) => {
    if (reference) {
        return " " + reference
    } else {
        return " "
    }
}