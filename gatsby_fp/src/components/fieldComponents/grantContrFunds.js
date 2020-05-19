import React from "react"

export default function GrantContrFunds ({grantContrFunds}){
   return(
    <>
    <div className="sectiontitle">Grants, Contracts, and Funds</div>
        <div>
          <p dangerouslySetInnerHTML={{__html: grantContrFunds}}></p>
        </div>
    </>
  )
}