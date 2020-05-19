import React from "react"

export default function HonorAward ({honorAward}){
    return(  
      <>
      <div className="sectiontitle">Honors and Awards</div>
          <div>
            <p dangerouslySetInnerHTML={{__html: honorAward}}></p>
          </div>
      </>
    )
  }
