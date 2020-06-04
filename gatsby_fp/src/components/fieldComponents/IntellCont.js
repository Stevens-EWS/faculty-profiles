import React from "react"
const shortid = require("shortid")

export default function IntellCont({ intellContList }) {
  return (
    <>
      <div className="sectiontitle">Selected Publications</div>
      <div>
        <ol>
          {intellContList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
                  ${
                    element.intellcont_auth.fname
                      ? `${element.intellcont_auth.fname}`
                      : ``
                  }
                  ${
                    element.intellcont_auth.lname
                      ? `${element.intellcont_auth.lname}`
                      : ``
                  } 
                  ${
                    element.dty_pub
                      ? `(${element.dty_pub}).`
                      : ``
                  }
                  ${
                    element.contype
                      ? `${element.contype}`
                      : ``
                  }
                  ${
                    element.contypeother
                      ? `${element.contypeother}`
                      : ``
                  }
                  ${
                    element.status
                      ? `${element.status}`
                      : ``
                  }
                  ${
                    element.journal_name
                      ? `${element.journal_name}`
                      : ``
                  }
                  ${
                    element.pagenum
                      ? `${element.pagenum}`
                      : ``
                  }
                  ${
                    element.title
                      ? `${element.title}`
                      : ``
                  }
                  ${
                    element.title_secondary
                      ? `${element.title_secondary}`
                      : ``
                  }
                  ${
                    element.volume
                      ? `${element.volume}`
                      : ``
                  }
                  ${
                    element.publisher
                      ? `${element.publisher}`
                      : ``
                  }
                  ${
                    element.pubctyst
                      ? `${element.pubctyst}`
                      : ``
                  }
                  ${
                    element.issue
                      ? `${element.issue}`
                      : ``
                  }
                  ${
                    element.dty_acc
                      ? `${element.dty_acc}`
                      : ``
                  }
                  ${
                    element.dty_sub
                      ? `${element.dty_sub}`
                      : ``
                  }
                  ${
                    element.web_address
                      ? `${element.web_address}`
                      : ``
                  }
                  ${
                    element.intellcont_auth.faculty_name
                      ? `${element.intellcont_auth.faculty_name}`
                      : ``
                  }                 
              `,
              }}
            ></li>
          ))}
        </ol>
      </div>
    </>
  )
}
