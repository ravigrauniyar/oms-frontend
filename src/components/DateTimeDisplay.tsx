import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

interface DatePartProps{
    datePartsMap: Map<string, string>
}
function DatePart( props: DatePartProps ) 
{
    const dateParts = props.datePartsMap
    const labels = [...dateParts.keys()]
    const values = [...dateParts.values()]

    return (
        <Row className='col-5'>
            <table className='text-center table date-time-table table-bordered'>
                <thead>
                    <tr>
                    {
                        labels.map((label, index) => (
                            <th className='h6 col-4' key={index}>{label}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            values.map((value, index) =>(
                                <td className='h5 col-4' key={index}>{value}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </Row>
    )
}

function DateTimeDisplay() 
{
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const formattedDate= currentDateTime.toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  const [day, month, year] = formattedDate.split('/')

  const dateParts : Map<string,string> = new Map<string, string>([
    ['Day', day],
    ['Month', month],
    ['Year', year]
  ])
  
  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  const [ hour, minute, second ] = formattedTime.split(':')

  return (
    <Row className="justify-content-around">
        <DatePart datePartsMap={dateParts} />
        <Row className='col-5 date-time-table'>
            <table className='text-center table table-bordered'>
                <thead>
                    <tr>
                        <th className='h6' colSpan={3}>Current Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h5'>
                        <td className='col-4'>{hour}</td>
                        <td className='col-4'>{minute}</td>
                        <td className='col-4'>{second}</td>
                    </tr>
                </tbody>
            </table>
        </Row>
    </Row>
  )
}

export default DateTimeDisplay
