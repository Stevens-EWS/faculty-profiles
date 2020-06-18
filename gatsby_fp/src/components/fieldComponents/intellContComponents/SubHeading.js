import React from "react"
const shortid = require("shortid")

export default function IntellCont({ intellContList, publicationType }) {

    return (
    <>
      <div className="publicationtitle">{publicationType}</div>
        <ol>
          {intellContList.filter(element => (element.contype === publicationType || element.contypeother === publicationType)).map(element => (
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
                  ${
                    element.intellcont_auth.lname
                      ? `${element.intellcont_auth.lname},`
                      : ``
                  }
                  ${
                    element.intellcont_auth.mname
                      ? `${element.intellcont_auth.lname},`
                      : ``
                  }
                  ${
                    element.intellcont_auth.fname
                      ? `${element.intellcont_auth.fname}.`
                      : ``
                  }
                  ${
                    element.status === "Published"
                      ? `(${element.dty_pub}).`
                      : ``
                  }
                  ${
                    element.status === "Accepted"
                      ? `(${element.dty_acc}).`
                      : ``
                  }
                  ${
                    element.status === "Submitted"
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
