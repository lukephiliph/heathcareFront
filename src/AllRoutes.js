import { Route, Routes } from "react-router-dom"
import { PatientList } from "./PatientList"
import { PatientDetails } from "./PatientDetails"
import { HomePage } from "./Home"



export const AllRoutes = () => {
  return (
    <div>
         <Routes>
         <Route path="/" element={<HomePage />} />

        <Route path="/patientsList" element={<PatientList />} />
        <Route path="/patientdetails/:id" element={<PatientDetails />} />
      </Routes>
       

    </div>
  )
}
