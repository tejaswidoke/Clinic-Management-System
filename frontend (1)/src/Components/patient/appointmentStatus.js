import React, { useState } from 'react';
import {
  APPOINTMENT_STATUS_CONFIRMED,
  APPOINTMENT_STATUS_COMPLETED,
  APPOINTMENT_STATUS_CANCELLED
} from './bookAppointment';
import bookAppointment from './bookAppointment';

function appointmentStatus({ appointment }) {
  const [newTime, setNewTime] = useState(appointment.time);
  const [newStatus, setNewStatus] = useState(appointment.status);

  const handleUpdate = async () => {
    try {
      router.get("/patient/:pid", (request, response) => {
        const pid = request.params.pid
        const statement = `select   pname ,age, gender, mobile ,name ,date ,a.symptoms ,a.time
        from patient p inner join appointment a on
        p.pid = a.pid inner join doctor d on 
        d.did = a.did where p.pid = ?`
        db.query(statement, [pid], (error, result) => {
            response.send(utils.createResult(error, result))
          })
      });

      if (response.ok) {
        // Handle successful update, e.g., show a success message
        console.log('Appointment updated successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Failed to update appointment');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <p>Appointment Time: {appointment.time}</p>
      <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
        <option value={APPOINTMENT_STATUS_CONFIRMED}>Confirmed</option>
        <option value={APPOINTMENT_STATUS_COMPLETED}>Completed</option>
        <option value={APPOINTMENT_STATUS_CANCELLED}>Cancelled</option>
      </select>
      <input
        type="text"
        value={newTime}
        onChange={e => setNewTime(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default appointmentStatus;











// Constants.js
