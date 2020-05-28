import React from "react"
import GenInfoTable from "./fieldComponents/genInfoTable"
import Education from "./fieldComponents/education"
import ProfService from "./fieldComponents/profService"
import UnivService from "./fieldComponents/univService"
import ProfSocieties from "./fieldComponents/profSocieties"
import IntellCont from "./fieldComponents/intellCont"
import Section from "./fieldComponents/generalSection"

export default function Fields({ facultyData }) {
  return (
    <>
      <h1 className="biotitle">
        {facultyData.pf_first_name} {facultyData.pf_last_name}
      </h1>
      {/* still need to conditionally render fields for this component */}
      <GenInfoTable
        title={facultyData.pf_title}
        building={facultyData.building}
        room={facultyData.room}
        phone={facultyData.pf_work_phone}
        fax={facultyData.pf_work_fax}
        imgsrc={facultyData.photo_base64}
        username={facultyData.pf_username}
        website={facultyData.website}
      />
      {facultyData.education && (
        <Education educationList={facultyData.education} />
      )}
      {facultyData.research && (
        <Section fieldLabel="Research" fieldData={facultyData.research} />
      )}
      {facultyData.bio && (
        <Section fieldLabel="General Information" fieldData={facultyData.bio} />
      )}
      {facultyData.experience && (
        <Section fieldLabel="Experience" fieldData={facultyData.experience} />
      )}
      {facultyData.service_university && (
        <UnivService univServiceList={facultyData.service_university} />
      )}
      {facultyData.service_professional && (
        <ProfService profServiceList={facultyData.service_professional} />
      )}
      {facultyData.consult_service && (
        <Section
          fieldLabel="Consulting Service"
          fieldData={facultyData.consult_service}
        />
      )}
      {facultyData.appointment && (
        <Section
          fieldLabel="Appointments"
          fieldData={facultyData.appointment}
        />
      )}
      {facultyData.innovate_enterpreneur && (
        <Section
          fieldLabel="Innovation and Entrepreneurship"
          fieldData={facultyData.innovate_enterpreneur}
        />
      )}
      {facultyData.honor_award && (
        <Section
          fieldLabel="Honors and Awards"
          fieldData={facultyData.honor_award}
        />
      )}
      {facultyData.member && (
        <ProfSocieties profSocietiesList={facultyData.member} />
      )}
      {facultyData.grant_contract && (
        <Section
          fieldLabel="Grants, Contracts, and Funds"
          fieldData={facultyData.grant_contract}
        />
      )}
      {facultyData.patent_invention && (
        <Section 
          fieldLabel="Patents and Inventions"
          fieldData={facultyData.patent_invention} 
        />
      )}
      {facultyData.intellcont && (
        <IntellCont intellContList={facultyData.intellcont} />
      )}
    </>
  )
}
