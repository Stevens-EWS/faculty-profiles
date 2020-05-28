import React from "react"
import GenInfoTable from "./fieldComponents/genInfoTablex"
import Education from "./fieldComponents/educationx"
import ProfService from "./fieldComponents/profServicex"
import UnivService from "./fieldComponents/univServicex"
import ProfSocieties from "./fieldComponents/profSocietiesx"
import IntellCont from "./fieldComponents/intellContx"
import GeneralSection from "./fieldComponents/generalSectionx"

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
        <GeneralSection fieldLabel="Research" fieldData={facultyData.research} />
      )}
      {facultyData.bio && (
        <GeneralSection fieldLabel="General Information" fieldData={facultyData.bio} />
      )}
      {facultyData.experience && (
        <GeneralSection fieldLabel="Experience" fieldData={facultyData.experience} />
      )}
      {facultyData.service_university && (
        <UnivService univServiceList={facultyData.service_university} />
      )}
      {facultyData.service_professional && (
        <ProfService profServiceList={facultyData.service_professional} />
      )}
      {facultyData.consult_service && (
        <GeneralSection
          fieldLabel="Consulting Service"
          fieldData={facultyData.consult_service}
        />
      )}
      {facultyData.appointment && (
        <GeneralSection
          fieldLabel="Appointments"
          fieldData={facultyData.appointment}
        />
      )}
      {facultyData.innovate_enterpreneur && (
        <GeneralSection
          fieldLabel="Innovation and Entrepreneurship"
          fieldData={facultyData.innovate_enterpreneur}
        />
      )}
      {facultyData.honor_award && (
        <GeneralSection
          fieldLabel="Honors and Awards"
          fieldData={facultyData.honor_award}
        />
      )}
      {facultyData.member && (
        <ProfSocieties profSocietiesList={facultyData.member} />
      )}
      {facultyData.grant_contract && (
        <GeneralSection
          fieldLabel="Grants, Contracts, and Funds"
          fieldData={facultyData.grant_contract}
        />
      )}
      {facultyData.patent_invention && (
        <GeneralSection 
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
