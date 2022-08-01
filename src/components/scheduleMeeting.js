import axios from 'axios';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import { useLocation } from 'react-router-dom';
export default function ScheduleMeeting() {



    function handleSubmit() {

    }
    // const location = useLocation();
    // const from = location.state;
    // console.log( .business.id)
    const service = JSON.parse(sessionStorage.getItem('service'));
    return (
        <div>
            <h3>detaleils about {service.serviceName} service:</h3>

            
                         < h4>serviceName:       </ h4>  <label>{ service.serviceName           }</label>
                         < h4>numOfMeetings:     </ h4>  <label>{ service.numOfMeetings         }        </label>
                         < h4>durationOfMeeting: </ h4>  <label>{ service.durationOfMeeting     }     </label>
                         < h4>cost:              </ h4>  <label>{ service.cost                  }    </label>
                         < h4>openingHours:      </ h4>  <label>{ service.openingHours          }   </label>
                         < h4>address                   </ h4>  <label>{ service.address.number},
                                                              { service.address.street},
                                                              { service.address.city    }              </label>
                                                              
                                                             
     <br/><br/>                                                     
        <input type='date'></input>
        <br/><br/>
        <input type='time'></input> 
        <br/><br/>
        <Button variant="contained" onClick={handleSubmit}>submit</Button>                 

        </div>
    )
}

