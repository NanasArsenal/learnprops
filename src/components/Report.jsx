import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
const Report = () => {
    const [report,setReport]= useState('');
    const [disabled,setBtnDisabled] = useState(true);
    const [reportMessage, setReportMessage] = useState('')

    function onchangeHandler(e){
        console.log(e.target.value);

        //validation
        if(report===''){
            setBtnDisabled(true);
            setReportMessage(null)
        }else if(report !== '' && report.trim().length <=5){
                setBtnDisabled(true);
                setReportMessage('Should not be less than 5 characters')
        }else{
            setReportMessage(null);
            setBtnDisabled(false);
        }

        setReport(e.target.value);

    }
  return (
    <Card>
        <h2>Type your report Here</h2>
        <form>
            <div className="input-group">
                <input type="text"  placeholder='Report' onChange={onchangeHandler} value={report}/>
                <Button type='primary' isDisabled={disabled}>Report</Button>
            </div>
        </form>
        {reportMessage && <div className='message'>{reportMessage}</div>}
    </Card>
  )
}

export default Report