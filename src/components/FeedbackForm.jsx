import React from 'react'
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

export default function FeedbackForm() {
    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    const handleText = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }
        console.log(e.target.value);
        setText(e.target.value);
        
    }

    
    return (
      <Card>
          <h2>How would you rate our service</h2>

          <form>
              <div className="input-group">
                  <input type="text" onChange={handleText} placeholder='Enter your  feedback here' value={text} />
                  <Button type="submit" isDisabled={btnDisabled}>submit</Button>
              </div>

              {message && <div className='message'>{message}</div> }
          </form>
      </Card>
    )
  }
  