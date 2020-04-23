import React from "react"
import GenInfoTable from "./fieldComponents/genInfoTable"
import Education from "./fieldComponents/education"
import ProfService from "./fieldComponents/profService"
import Appointments from "./fieldComponents/appointments"
import GrantContrFunds from "./fieldComponents/grantContrFunds"
import PatInv from "./fieldComponents/patInv"
import SelectPubs from "./fieldComponents/selectPubs"
import Journals from "./fieldComponents/journals"
import BookChapters from "./fieldComponents/bookChapters"
import Books from "./fieldComponents/books"
import Reports from "./fieldComponents/reports"


const Fields = () => (
  <>
    <h1 className="biotitle"></h1>
    <GenInfoTable/>
    <Education/>
    <ProfService/>
    <Appointments/>
    <GrantContrFunds/>
    <PatInv/>
    <SelectPubs/>
    <Journals/>
    <BookChapters/>
    <Books/>
    <Reports/>

  </>
)

export default Fields
