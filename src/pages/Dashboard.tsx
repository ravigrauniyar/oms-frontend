import { Col, Row, Stack } from "react-bootstrap"
import DashboardLayout from "../components/Layouts/DashboardLayout"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { PersonView } from "../models/Views/PersonView"
import GreetingCard from "../components/cards/GreetingCard"
import MetricsCard from "../components/cards/MetricsCard"
import { FaFileMedical, FaList, FaUser, FaUserMd } from "react-icons/fa"
import MetricsCountHandler from "../services/MetricsCountHandler"
import DateTimeDisplay from "../components/DateTimeDisplay"
import AppointmentsTable from "../components/AppointmentsTable"

function Dashboard() {
  const [username, setUsername] = useState('')
  const [patientsCount, setPatientsCount] = useState(0)
  const [doctorsCount, setDoctorsCount] = useState(0)
  const [servicesCount, setServicesCount] = useState(0)
  const [appointmentsCount, setAppointmentsCount] = useState(0)

  useEffect(() => 
  {
    if(Cookies.get('user') !== undefined) 
    {
      const userObject : PersonView = JSON.parse(Cookies.get('user')!)
      setUsername(userObject.firstName + ' ' + userObject.lastName)
    }

    async function fetchData() {
      try{
        setPatientsCount(await MetricsCountHandler.getCount('patients'))
        setDoctorsCount(await MetricsCountHandler.getCount('doctors'))
        setServicesCount(await MetricsCountHandler.getCount('services'))
        setAppointmentsCount(await MetricsCountHandler.getCount('appointments'))
      }
      catch(error) {
        console.log("Invalid metrics!")
      }
    }
    fetchData()

  }, [])

  return (
    <DashboardLayout>
      <Row className="dashboard-content mx-4 justify-content-around">
        <Col md="5">
          <Stack gap={5}>
            <Row className="greeting-card">
              <GreetingCard username={username} />
            </Row>
            <Row className="d-flex justify-content-between">
              <MetricsCard
                icon= {<FaUser />}
                title="Total Patients"
                counter={patientsCount}
              />
              <MetricsCard
                icon= {<FaUserMd />}
                title="Total Doctors"
                counter={doctorsCount}
              />
              <MetricsCard
                icon= {<FaFileMedical/>}
                title="Total Services"
                counter={servicesCount}
              />
              <MetricsCard
                icon= {<FaList />}
                title="Appointments"
                counter={appointmentsCount}
              />
            </Row>
          </Stack>
        </Col>
        <Col className="col-6 pt-2">
          <Stack gap={5}>
            <DateTimeDisplay />
            <AppointmentsTable />
          </Stack>
        </Col>
      </Row>
    </DashboardLayout>
  )
}
export default Dashboard