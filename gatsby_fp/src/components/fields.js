import React from "react"
import GenInfoTable from "./fieldComponents/genInfoTable"
import Education from "./fieldComponents/education"
import ProfService from "./fieldComponents/profService"
import Appointments from "./fieldComponents/appointments"
import GrantContrFunds from "./fieldComponents/grantContrFunds"
import PatentInv from "./fieldComponents/patentInv"
import GenInfoBio from "./fieldComponents/genInfoBio"
import Research from "./fieldComponents/research"
import Experience from "./fieldComponents/experience"
import InnovateEnt from "./fieldComponents/innovateEnt"
import ConsultService from "./fieldComponents/consultService"
import HonorAward from "./fieldComponents/honorAward"
import UnivService from "./fieldComponents/univService"
import ProfSocieties from "./fieldComponents/profSocieties"
import IntellCont from "./fieldComponents/intellCont"

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
      {facultyData.research && <Research research={facultyData.research} />}
      {facultyData.bio && <GenInfoBio bio={facultyData.bio} />}
      {facultyData.experience && (
        <Experience experience={facultyData.experience} />
      )}
      {facultyData.service_university && (
        <UnivService univServiceList={facultyData.service_university} />
      )}
      {facultyData.service_professional && (
        <ProfService profServiceList={facultyData.service_professional} />
      )}
      {facultyData.consult_service && (
        <ConsultService consultService={facultyData.consult_service} />
      )}
      {facultyData.appointment && (
        <Appointments appointments={facultyData.appointment} />
      )}
      {facultyData.innovate_enterpreneur && (
        <InnovateEnt innovateEnt={facultyData.innovate_enterpreneur} />
      )}
      {facultyData.honor_award && (
        <HonorAward honorAward={facultyData.honor_award} />
      )}
      {facultyData.member && (
        <ProfSocieties profSocietiesList={facultyData.member} />
      )}
      {facultyData.grant_contract && (
        <GrantContrFunds grantContrFunds={facultyData.grant_contract} />
      )}
      {facultyData.patent_invention && (
        <PatentInv patentInv={facultyData.patent_invention} />
      )}
      {facultyData.intellcont && (
        <IntellCont intellContList={facultyData.intellcont} />
      )}
    </>
  )
}
