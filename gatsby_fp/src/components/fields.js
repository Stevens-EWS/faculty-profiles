import React from "react"
import GenInfoTable from "./fieldComponents/GenInfoTable"
import Education from "./fieldComponents/Education"
import ProfService from "./fieldComponents/ProfService"
import UnivService from "./fieldComponents/UnivService"
import ProfSocieties from "./fieldComponents/ProfSocieties"
import IntellCont from "./fieldComponents/IntellCont"
import GeneralSection from "./fieldComponents/GeneralSection"

export default function Fields({ facultyData }) {
  return (
    <>
      <h1 className="biotitle">
        {facultyData.pf_first_name} {facultyData.pf_last_name}
      </h1>
      <GenInfoTable
        title={facultyData.pf_title}
        building={facultyData.building}
        room={facultyData.room}
        phone={facultyData.pf_work_phone}
        fax={facultyData.pf_work_fax}
        imgsrc={facultyData.photo_base64}
        username={facultyData.pf_username}
        website={facultyData.website}
        firstName={facultyData.pf_first_name}
        lastName={facultyData.pf_last_name}
        school={facultyData.school}
        department={facultyData.ses_department}
        email={facultyData.pf_email}
      />
      {facultyData.education && (
        <Education educationList={facultyData.education} />
      )}
      {facultyData.research && (
        <GeneralSection
          fieldLabel="Research"
          fieldData={facultyData.research}
        />
      )}
      {facultyData.bio && (
        <GeneralSection
          fieldLabel="General Information"
          fieldData={facultyData.bio}
        />
      )}
      {facultyData.experience && (
        <GeneralSection
          fieldLabel="Experience"
          fieldData={facultyData.experience}
        />
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
      {facultyData.notable_courses && (
        <GeneralSection
          fieldLabel="Courses"
          fieldData={facultyData.notable_courses}
        />
      )}
    </>
  )
}
