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
                    element.contype
                      ? `
                    contype: ${element.contype}<br> `
                      : ``
                  }
                  ${
                    element.contypeother
                      ? `
                    contypeother: ${element.contypeother}<br> `
                      : ``
                  }
                  ${
                    element.status
                      ? `
                    status: ${element.status}<br> `
                      : ``
                  }
                  ${
                    element.journal_name
                      ? `
                    journal_name: ${element.journal_name}<br> `
                      : ``
                  }
                  ${
                    element.pagenum
                      ? `
                    pagenum: ${element.pagenum}<br> `
                      : ``
                  }
                  ${
                    element.title
                      ? `
                    title: ${element.title}<br> `
                      : ``
                  }
                  ${
                    element.title_secondary
                      ? `
                    title_secondary: ${element.title_secondary}<br> `
                      : ``
                  }
                  ${
                    element.volume
                      ? `
                    volume: ${element.volume}<br> `
                      : ``
                  }
                  ${
                    element.publisher
                      ? `
                    publisher: ${element.publisher}<br> `
                      : ``
                  }
                  ${
                    element.pubctyst
                      ? `
                    pubctyst: ${element.pubctyst}<br> `
                      : ``
                  }
                  ${
                    element.issue
                      ? `
                    issue: ${element.issue}<br> `
                      : ``
                  }
                  ${
                    element.dty_pub
                      ? `
                    dty_pub: ${element.dty_pub}<br> `
                      : ``
                  }
                  ${
                    element.dty_acc
                      ? `
                    dty_acc: ${element.dty_acc}<br> `
                      : ``
                  }
                  ${
                    element.dty_sub
                      ? `
                    dty_sub: ${element.dty_sub}<br> `
                      : ``
                  }
                  ${
                    element.web_address
                      ? `
                    web_address: ${element.web_address}<br> `
                      : ``
                  }
                  ${
                    element.intellcont_auth.faculty_name
                      ? `
                    faculty_name: ${element.intellcont_auth.faculty_name}<br> `
                      : ``
                  }
                  ${
                    element.intellcont_auth.fname
                      ? `
                    intellcont_auth.fname: ${element.intellcont_auth.fname}<br> `
                      : ``
                  }
                  ${
                    element.intellcont_auth.lname
                      ? `
                    intellcont_auth.lname: ${element.intellcont_auth.lname}<br> `
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
