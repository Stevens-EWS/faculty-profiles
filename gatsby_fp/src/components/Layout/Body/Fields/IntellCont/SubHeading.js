import React from "react"
const shortid = require("shortid")

// Component used for the subheadings under selected publications
export default function IntellCont({ intellContList, publicationType }) {
  
  // Omits any publications whose status is not "Published", and then sorts them by year published
  function sortPublishedByYear(intellContList) {
    var pubIntellContList = []
    intellContList.forEach(element => {
      if(element.status === "Published") {
        pubIntellContList.push(element)
      }
    })
    return pubIntellContList.sort(function (a, b) { return b.dty_pub - a.dty_pub })
  }

  const sortedPubIntellContList = sortPublishedByYear(intellContList)

  /* Creates a list that is ready to be mapped into <li> tags that
     omits elements without a contype/contypeother that don't equal 
     the publicationType which is the title of the subheading.
     Elements without a contype/contypeother get omitted entirely! */
  const liInnerHtmlList =
    sortedPubIntellContList.filter(element => (element.contype === publicationType || element.contypeother === publicationType)).map(element => {
      let liString = ''
      element.intellcont_auth.forEach((elem, index) => {
        if (elem.lname) {
          liString += `${elem.lname}`
        }
        if (elem.fname && !elem.mname) {
          liString += `, ${elem.fname.substr(0,1)}.`
        }
        if (elem.mname && !elem.fname) {
          liString += `, ${elem.mname.substr(0,1)}.`
        }
        if (elem.fname && elem.mname) {
          liString += `, ${elem.fname.substr(0,1)}. ${elem.mname.substr(0,1)}.`
        }
        if(index !== element.intellcont_auth.length - 1){
          liString += `; `
        }
     })
      if (element.dty_pub) {
        liString += ` (${element.dty_pub})`
      }
      if(element.dty_pub || element.intellcont_auth) {
        liString += `. `
      }
      if (element.title) {
        liString += `${element.title}`
      }
      if (element.title_secondary) {
        liString += `. ${element.title_secondary}`
      }
      if (element.journal_name) {
        liString += `. <i>${element.journal_name}</i>`
      }
      if (element.issue && !element.pagenum && !element.volume) {
        liString += ` (${element.issue} ed.)`
      }
      if (!element.issue && element.pagenum && !element.volume) {
        liString += ` (pp. ${element.pagenum})`
      }
      if (!element.issue && !element.pagenum && element.volume) {
        liString += ` (vol. ${element.volume})`
      }
      if (!element.issue && element.pagenum && element.volume) {
        liString += ` (vol. ${element.volume}, pp. ${element.pagenum})`
      }
      if (element.issue && !element.pagenum && element.volume) {
        liString += ` (${element.issue} ed., vol. ${element.volume})`
      }
      if (element.issue && element.pagenum && !element.volume) {
        liString += ` (${element.issue} ed., pp. ${element.pagenum})`
      }
      if (element.issue && element.pagenum && element.volume) {
        liString += ` (${element.issue} ed., vol. ${element.volume}, pp. ${element.pagenum})`
      }
      if (element.title || element.title_secondary || element.journal_name || element.issue || element.volume || element.pagenum) {
        liString += '. '
      }
      if (element.pubctyst && element.publisher) {
        liString += `${element.pubctyst}: ${element.publisher}.`
      }
      if (!element.pubctyst && element.publisher) {
        liString += `${element.publisher}.`
      }
      if (element.pubctyst && !element.publisher) {
        liString += `${element.pubctyst}.`
      }
      if (element.web_address) {
        liString += `<br><a href="${element.web_address}" target="_blank" rel="noreferrer">${element.web_address}</a>.`
      }

      return liString
    })
  return (
    <>
      <div className="publicationtitle">{publicationType}</div>
      <ol>
        {liInnerHtmlList.map(element => (
          <li
            key={shortid.generate()}
            dangerouslySetInnerHTML={{
              __html: element
            }}
          ></li>
        ))}
      </ol>
    </>
  )
}
