import React from "react"

export default function IntellCont({ intellContList }) {
  return (
    <>
      <div className="sectiontitle">Selected Publications</div>
      <div>
        <ol>
          {intellContList.map((element, index) => (
            // <li key={index} dangerouslySetInnerHTML = {{__html:
            //   `${element.contype} ${element.contypeother}
            //   <br>(${element.dtm_pub} ${element.dtd_pub} ${element.dty_pub}).
            //   ${element.title}, ${element.title_secondary}, ${element.publisher}
            //   <br>Issue: ${element.issue}
            //   <br>Number of Pages: ${element.number_of_pages}
            //   <br>Status: ${element.status}<br>Refereed:${element.refereed}
            //   <br>Editorial Reviewed: ${element.editorial_reviewed}
            //   <br> ISBNISSN: ${element.isbnissn}
            //   <br>User Reference Creator: ${element.user_reference_creator}`}}>
            // </li>
            <li
              key={index}
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
                    element.classification
                      ? `
                    classification: ${element.classification}<br> `
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
                    element.status
                      ? `
                    status: ${element.status}<br> `
                      : ``
                  }
                  ${
                    element.publicavail
                      ? `
                    publicavail: ${element.publicavail}<br> `
                      : ``
                  }
                  ${
                    element.title
                      ? `
                    title: ${element.title}<br> `
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
                    element.pubcntry
                      ? `
                    pubcntry: ${element.pubcntry}<br> `
                      : ``
                  }
                  ${
                    element.refereed
                      ? `
                    refereed: ${element.refereed}<br> `
                      : ``
                  }
                  ${
                    element.audience
                      ? `
                    audience: ${element.audience}<br> `
                      : ``
                  }
                  ${
                    element.user_reference_creator
                      ? `
                    user_reference_creator: ${element.user_reference_creator}<br> `
                      : ``
                  }
                  ${
                    element.number_of_pages
                      ? `
                    number_of_pages: ${element.number_of_pages}<br> `
                      : ``
                  }
                  ${
                    element.editorial_reviewed
                      ? `
                    editorial_reviewed: ${element.editorial_reviewed}<br> `
                      : ``
                  }
                  ${
                    element.isbnissn
                      ? `
                    isbnissn: ${element.isbnissn}<br> `
                      : ``
                  }
                  ${
                    element.issue
                      ? `
                    issue: ${element.issue}<br> `
                      : ``
                  }
                  ${
                    element.dtm_pub
                      ? `
                    dtm_pub: ${element.dtm_pub}<br> `
                      : ``
                  }
                  ${
                    element.dtd_pub
                      ? `
                    dtd_pub: ${element.dtd_pub}<br> `
                      : ``
                  }
                  ${
                    element.dty_pub
                      ? `
                    dty_pub: ${element.dty_pub}<br> `
                      : ``
                  }
                  ${
                    element.dtm_acc
                      ? `
                    dtm_acc: ${element.dtm_acc}<br> `
                      : ``
                  }
                  ${
                    element.dtd_acc
                      ? `
                    dtd_acc: ${element.dtd_acc}<br> `
                      : ``
                  }
                  ${
                    element.dty_acc
                      ? `
                    dty_acc: ${element.dty_acc}<br> `
                      : ``
                  }
                  ${
                    element.dtm_expsub
                      ? `
                    dtm_expsub: ${element.dtm_expsub}<br> `
                      : ``
                  }
                  ${
                    element.dtd_expsub
                      ? `
                    dtd_expsub: ${element.dtd_expsub}<br> `
                      : ``
                  }
                  ${
                    element.dty_expsub
                      ? `
                    dty_expsub: ${element.dty_expsub}<br> `
                      : ``
                  }
                  ${
                    element.dtm_sub
                      ? `
                    dtm_sub: ${element.dtm_sub}<br> `
                      : ``
                  }
                  ${
                    element.dtd_sub
                      ? `
                    dtd_sub: ${element.dtd_sub}<br> `
                      : ``
                  }
                  ${
                    element.dty_sub
                      ? `
                    dty_sub: ${element.dty_sub}<br> `
                      : ``
                  }
                  ${
                    element.doi
                      ? `
                    doi: ${element.doi}<br> `
                      : ``
                  }
                  ${
                    element.abstract
                      ? `
                    abstract: ${element.abstract}<br> `
                      : ``
                  }
                  ${
                    element.full_text
                      ? `
                    full_text: ${element.full_text}<br> `
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
                  ${
                    element.intellcont_auth.role
                      ? `
                    intellcont_auth.role: ${element.intellcont_auth.role}<br> `
                      : ``
                  }
                  ${
                    element.intellcont_auth.institution
                      ? `
                    intellcont_auth.institution: ${element.intellcont_auth.institution}<br> `
                      : ``
                  }
                  ${
                    element.intellcont_auth.student_level
                      ? `
                    intellcont_auth.student_level: ${element.intellcont_auth.student_level}<br> `
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
