import React from "react"
const shortid = require("shortid")

export default function IntellCont({ intellContList, publicationType }) {

  function sortStatusAndYear(intellContList) {
    var pubIntellContList = []
    var accIntellContList = []
    var subIntellContList = []

    intellContList.forEach(element => {
      switch (element.status) {
        case "Published":
          pubIntellContList.push(element)
          break
        case "Accepted":
          accIntellContList.push(element)
          break
        case "Submitted":
          subIntellContList.push(element)
          break
        default:
          break
      }
    })

    pubIntellContList.sort(function (a, b) { return b.dty_pub - a.dty_pub })
    accIntellContList.sort(function (a, b) { return b.dty_acc - a.dty_acc })
    subIntellContList.sort(function (a, b) { return b.dty_sub - a.dty_sub })

    const sortedIntellContList = pubIntellContList.concat(accIntellContList, subIntellContList)
    return sortedIntellContList
  }

  const sortedIntellContList = sortStatusAndYear(intellContList)
  const liInnerHtmlList =
    sortedIntellContList.filter(element => (element.contype === publicationType || element.contypeother === publicationType)).map(element => {
      let liString = ''
      if (element.status) {
        liString += `${element.status} `
      }
      if (element.contype && !element.contypeother) {
        liString += `${element.contype} – `
      }
      if (element.contypeother) {
        liString += `${element.contypeother} – `
      }
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
      if (element.status === "Published" && element.dty_pub) {
        liString += ` (${element.dty_pub})`
      }
      if (element.status === "Accepted" && element.dty_acc) {
        liString += ` (${element.dty_acc})`
      }
      if (element.status === "Submitted" && element.dty_sub) {
        liString += ` (${element.dty_sub})`
      }
      if(element.dty_pub || element.dty_acc || element.dty_sub || element.intellcont_auth){
        liString += `. `
      }
      if (element.title) {
        liString += `${element.title}`
      }
      if (element.title_secondary) {
        liString += `. ${element.title_secondary}`
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
      if (element.title || element.title_secondary || element.issue || element.volume || element.pagenum) {
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
        liString += `<br>${element.web_address}.`
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
