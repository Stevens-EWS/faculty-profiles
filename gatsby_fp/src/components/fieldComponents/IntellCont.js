import React from "react"
import SubHeading from "./intellContComponents/SubHeading.js"

export default function IntellCont({ intellContList }) {
  const existingContypes = {
      book: false,
      bookChapter: false,
      bookReview: false,
      case: false,
      conferenceProceeding: false,
      instructionalMaterial: false,
      journalArticle: false,
      magTradePub: false,
      newsletter: false,
      newspaperArticle: false,
      software: false,
      technicalReport: false,
      textbook: false,
      other: false
  }
  intellContList.forEach(element => {
    switch(element.contype){
      case "Book":
        existingContypes.book = true;
        break;
      case "Book Chapter":
        existingContypes.bookChapter = true;
        break;
      case "Book Review":
        existingContypes.bookReview = true;
        break;
      case "Case":
        existingContypes.case = true;
        break;
      case "Conference Proceeding":
        existingContypes.conferenceProceeding = true;
        break;
      case "Instructional Material":
        existingContypes.instructionalMaterial = true;
        break;
      case "Journal Article":
        existingContypes.journalArticle = true;
        break;
      case "Magazine/Trade Publication":
        existingContypes.magTradePub = true;
        break;
      case "Newsletter":
        existingContypes.newsletter = true;
        break;
      case "Newspaper Article":
        existingContypes.newspaperArticle = true;
        break;
      case "Newspaper Article":
        existingContypes.software = true;
        break;
      case "Technical Report":
        existingContypes.technicalReport = true;
        break;
      case "Textbook":
        existingContypes.textbook = true;
        break;
      case "Other":
        existingContypes.other = true;
        break;
      default:
        break;
    }
  })

  return (
    <>
      <div className="sectiontitle">Selected Publications</div>
      <div>
        {existingContypes.book &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Book"
          />
        }
        {existingContypes.bookChapter &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Book Chapter"
          />
        }
        {existingContypes.bookReview &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Book Review"
          />
        }
        {existingContypes.case &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Case"
          />
        }
        {existingContypes.conferenceProceeding &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Conference Proceeding"
          />
        }
        {existingContypes.instructionalMaterial &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Instructional Material"
          />
        }
        {existingContypes.journalArticle &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Journal Article"
          />
        }
        {existingContypes.magTradePub &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Magazine/Trade Publication"
          />
        }
        {existingContypes.newsletter &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Newsletter"
          />
        }
        {existingContypes.newspaperArticle &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Newspaper Article"
          />
        }
        {existingContypes.software &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Software"
          />
        }
        {existingContypes.technicalReport &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Technical Report"
          />
        }
        {existingContypes.textbook &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Textbook"
          />
        }
        {existingContypes.other &&
          <SubHeading 
            intellContList={intellContList}
            publicationType="Other"
          />
        }
      </div>
    </>
  )
}
