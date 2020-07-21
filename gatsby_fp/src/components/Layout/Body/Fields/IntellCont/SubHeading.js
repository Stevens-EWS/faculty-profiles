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

    return (
    <>
      <div className="publicationtitle">{publicationType}</div>
        <ol>
          {sortedIntellContList.filter(element => (element.contype === publicationType || element.contypeother === publicationType)).map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
                 ${
                    element.status
                      ? `${element.status}`
                      : ``
                  }
                  ${
                    element.contype && !element.contypeother
                      ? `${element.contype} -`
                      : ``
                  }
                  ${
                    element.contypeother
                      ? `${element.contypeother} -`
                      : ``
                  }
                  ${element.intellcont_auth.map(elem => (
                    `
                      ${
                        elem.lname
                          ? `${elem.lname},`
                          : ``
                      }
                      ${
                        elem.fname && !elem.mname
                          ? `${elem.fname}.;`
                          : ``
                      }
                      ${
                        elem.mname && !elem.fname
                          ? `${elem.mname}.;`
                          : ``
                      }
                      ${
                        elem.fname && elem.mname
                          ? `${elem.fname}. ${elem.mname}.;`
                          : ``
                      }
                    `
                  )).join('')}
                  ${
                    element.status === "Published" && element.dty_pub
                      ? `(${element.dty_pub}).`
                      : ``
                  }
                  ${
                    element.status === "Accepted" && element.dty_acc
                      ? `(${element.dty_acc}).`
                      : ``
                  }
                  ${
                    element.status === "Submitted" && element.dty_sub
                      ? `(${element.dty_sub}).`
                      : ``
                  }
                  ${
                    element.title
                      ? `${element.title}.`
                      : ``
                  }
                  ${
                    element.title_secondary
                      ? `${element.title_secondary}`
                      : ``
                  }
                  ${
                    (element.issue && !element.pagenum && !element.volume)
                      ? `(${element.issue} ed.).`
                      : ``
                  }
                  ${
                    (!element.issue && element.pagenum && !element.volume)
                      ? `(pp. ${element.pagenum}).`
                      : ``
                  }
                  ${
                    (!element.issue && !element.pagenum && element.volume)
                      ? `(vol. ${element.volume}).`
                      : ``
                  }
                  ${
                    (!element.issue && element.pagenum && element.volume)
                      ? `(vol. ${element.volume}, pp. ${element.pagenum}).`
                      : ``
                  }
                  ${
                    (element.issue && !element.pagenum && element.volume)
                      ? `(${element.issue} ed., vol. ${element.volume}).`
                      : ``
                  }
                  ${
                    (element.issue && element.pagenum && !element.volume)
                      ? `(${element.issue} ed., pp. ${element.pagenum}).`
                      : ``
                  }
                  ${
                    (element.issue && element.pagenum && element.volume)
                      ? `(${element.issue} ed., vol. ${element.volume}, pp. ${element.pagenum}).`
                      : ``
                  }
                  ${
                    element.pubctyst
                      ? `${element.pubctyst}:`
                      : ``
                  }
                  ${
                    element.publisher
                      ? `${element.publisher}.`
                      : ``
                  }
                  <br>
                  ${
                    element.web_address
                      ? `${element.web_address}`
                      : ``
                  }                
              `,
              }}
            ></li>
          ))}
        </ol>
    </>
  )
}
