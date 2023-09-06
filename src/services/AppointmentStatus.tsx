import { useEffect, useState } from "react"
import { FaCheckCircle, FaHourglass, FaSpinner, FaUserCog } from "react-icons/fa"

interface AppointmentStatusProps{
    isApproved: boolean,
    isWaiting: boolean, 
    isCompleted: boolean
}
function AppointmentStatus(props: AppointmentStatusProps) 
{
    const {isApproved, isWaiting, isCompleted} = props
    const [statusIcon, setStatusIcon] = useState<JSX.Element | null>(<FaSpinner/>)
    
    useEffect(()=>
    {
        if(isApproved){
            if(isWaiting){
                setStatusIcon(<FaHourglass />)
            }
            if(isCompleted){
                setStatusIcon(<FaCheckCircle />)
            }
        }
        else{
            setStatusIcon(<FaUserCog/>)
        }
    }, [])
    return statusIcon
}

export default AppointmentStatus