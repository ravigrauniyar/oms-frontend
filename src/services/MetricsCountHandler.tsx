import ApiService from "../services/ApiService"
import { ApiListResponse } from "../models/Responses/ApiListResponse"
import { PatientView } from "../models/Views/PatientView"
import { MemberView } from "../models/Views/MemberView"
import { ServiceView } from "../models/Views/ServiceView"
import { AppointmentView } from "../models/Views/AppointmentView"
import Cookies from 'js-cookie'

class MetricsCountHandler
{
  static async getCount(metricsType: string)
  {
    var metricsCount= 0;

    switch(metricsType)
    {
      case 'patients':
      {
        const endpoint = 'patient'  
        const token = Cookies.get('token')!
        const params: Map<string, string> = new Map<string, string>([
          ['pageNumber', '1'],
          ['listType', 'All']
        ])
        
        const patientsResponse = await ApiService.getRequest<ApiListResponse<PatientView>>(endpoint, token, params)
        metricsCount =(patientsResponse.data.meta.totalCount)
        break
      }
      case 'doctors':
      {
        const endpoint = 'members'  
        const token = Cookies.get('token')!
        const params: Map<string, string> = new Map<string, string>([
          ['pageNumber', '1'],
          ['listType', 'All'],
          ['userType', 'Doctor']
        ])
        
        const doctorsResponse = await ApiService.getRequest<ApiListResponse<MemberView>>(endpoint, token, params)
        metricsCount =(doctorsResponse.data.meta.totalCount)
        break
      }
      case 'services':
      {
        const endpoint = 'services'  
        const token = Cookies.get('token')!
        const params: Map<string, string> = new Map<string, string>([
          ['pageNumber', '1']
        ])
        
        const servicesResponse = await ApiService.getRequest<ApiListResponse<ServiceView>>(endpoint, token, params)
        metricsCount =(servicesResponse.data.meta.totalCount)
        break
      }
      case 'appointments':
      {
        const endpoint = 'appointments/list'  
        const token = Cookies.get('token')!
        const params: Map<string, string> = new Map<string, string>()
        
        const appointmentsResponse = await ApiService.getRequest<ApiListResponse<AppointmentView>>(endpoint, token, params)
        metricsCount =(appointmentsResponse.data.meta.totalCount)
        break
      }
    }
    return metricsCount
  }
}
export default MetricsCountHandler