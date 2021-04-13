import React from "react"
import GenInfoTable from "./Fields/GenInfoTable"
import Education from "./Fields/Education"
import ProfService from "./Fields/ProfService"
import UnivService from "./Fields/UnivService"
import ProfSocieties from "./Fields/ProfSocieties"
import IntellCont from "./Fields/IntellCont"
import GeneralSection from "./Fields/GeneralSection"

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
        fluidData={
          facultyData.facultyImg ? 
            (facultyData.facultyImg.childImageSharp ? 
              facultyData.facultyImg.childImageSharp.fluid : null) 
          : null
        }
        username={facultyData.pf_username}
        website={facultyData.website}
        firstName={facultyData.pf_first_name}
        lastName={facultyData.pf_last_name}
        school={facultyData.school}
        department={facultyData.ses_department}
        email={facultyData.pf_email}
      />
      <div className="main_field_wrapper">
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
      </div>
    </>
  )
}
