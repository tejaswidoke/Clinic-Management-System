function bookAppointment(props)
{
        return (<>
                 <table>
      <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment.id}>
            <td>{appointment.id}</td>
            <td>{appointment.date}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    );
}

 
export default bookAppointment;
export const APPOINTMENT_STATUS_PENDING = 'pending';
export const APPOINTMENT_STATUS_CONFIRMED = 'confirmed';
export const APPOINTMENT_STATUS_COMPLETED = 'completed';
export const APPOINTMENT_STATUS_CANCELLED = 'cancelled';
