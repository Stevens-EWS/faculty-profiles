import React from "react"

export default function Research ({research}){
    return(
      <>
      <div className="sectiontitle">Research</div>
          <div>
            <p dangerouslySetInnerHTML={{__html: research}}></p>
          </div>
      </>
    )
}
