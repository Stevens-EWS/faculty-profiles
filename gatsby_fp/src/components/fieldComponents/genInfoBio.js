import React from "react"

export default function GenInfoBio ({bio}){
    return(
      <>
      <div className="sectiontitle">General Information</div>
          <div>
            <p dangerouslySetInnerHTML={{__html: bio}}></p>
          </div>
      </>
    )

}