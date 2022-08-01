import React, { useState } from 'react'
export default function ScheduleMeeting(props) {

    return(
        <div>
            <h3>detaleils about {props.service.serviceName} service:</h3>
                        <h6>serviceName:       </h6>  <label>{props.service.serviceName           }</label>
                        <h6>numOfMeetings:     </h6>  <label>{props.service.numOfMeetings         }        </label>
                        <h6>durationOfMeeting: </h6>  <label>{props.service.durationOfMeeting     }     </label>
                        <h6>cost:              </h6>  <label>{props.service.cost                  }    </label>
                        <h6>openingHours:      </h6>  <label>{props.service.openingHours          }   </label>
                        <h6>address                   </h6>  <label>{props.service.address.number},
                                                             {props.service.address.street},
                                                             {props.service.address.city    }              </label>


        <input type={Date}></input>
        <input type={TimeRanges}></input>                  
        </div>
    )
}