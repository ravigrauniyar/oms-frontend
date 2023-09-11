import Cookies from 'js-cookie'
import ApiService from "../services/ApiService"
import { ApiListResponse } from "../models/Responses/ApiListResponse"
import { AppointmentView } from "../models/Views/AppointmentView"
import { useEffect, useState } from 'react'
import { Nav, Row } from 'react-bootstrap'
import AppointmentStatus from '../services/AppointmentStatus'

function AppointmentsTable() 
{
    var [appointments, setAppointments] = useState<AppointmentView[]>()
    
    useEffect(()=>{

        async function fetchAppointments(){
            try{
                const endpoint = 'appointments/list'
                const token = Cookies.get('token')!
                const params = new Map<string, string>()

                const appointmentsResponse = await ApiService.getRequest<ApiListResponse<AppointmentView>>(endpoint, token, params)
                setAppointments(appointmentsResponse.data.items)
            }
            catch(error) {
                console.log("Error while fetching appointments!")
            }
        }
        fetchAppointments()
    }, [])
    
    return (
        <Row className='appointments-table p-3'>
            <Row className='h5 mb-2'>Appointments</Row>
            <table>
                <thead>
                    <tr>
                        <th className='h6 col-5'>Name</th>
                        <th className='h6 col-3'>Date</th>
                        <th className='h6 col-3'>Time</th>
                        <th className='h6 col-1'>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    appointments !== undefined && appointments.slice(0, 5).map((appointment, key) =>
                        appointment !== undefined && (
                            <tr key={key}>
                                <td className='h6 col-5'>{appointment.out_patient.firstName + ' ' + appointment.out_patient.lastName}</td>
                                <td className='h6 col-3'>{appointment.date}</td>
                                <td className='h6 col-3'>{appointment.timeSlot ?? 'Not Approved'}</td>
                                <td className='h6 text-center col-1'>
                                    <AppointmentStatus 
                                        isApproved = {appointment.isApproved} 
                                        isWaiting = {appointment.isWaiting}
                                        isCompleted = {appointment.isCompleted}
                                    />
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            <Row className='text-center mt-2 more-appointments'><Nav.Link href="/appointments">More...</Nav.Link></Row>
        </Row>
    )
}

export default AppointmentsTable