import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


function PatientAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  
  const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doctor/allDoctors');
      setDoctors(response.data.data); // Access the data property in the response
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleBooking = async (event) => {
    event.preventDefault();

    const appointmentData = {
      pid: sessionStorage.getItem('id'),
      did: selectedDoctor,
      date,
      
      symptoms,
    };

    try {
      const response = await axios.post('http://localhost:5000/appointment/bookAppointment', appointmentData);
      if (response.data.status === 'success') {
        console.log('Appointment booked successfully');
        // Add your success message or redirection logic here
      } else {
        console.error('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (

    <div className='d-flex vh-100 justify-content-center align-items-center PageBg' >

      <div className='p-3 bg-white rounded w-45 boarder form-container border border-primary '> 
       
      
      <h2>Appointment Booking</h2>
      <form onSubmit={handleBooking}>
        <div className='mb-3 row-2'>
          <label htmlFor="doctor" className='col-sm-0 col-form-label'>Select Doctor:</label>
          <select
            id="doctor"
            onChange={(e) => setSelectedDoctor(e.target.value)}
            value={selectedDoctor}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.did} value={doctor.did}>
                {doctor.speacialist}
              </option>
            ))}
          </select>
        </div>

        <div className='row'>
          <div className='col'></div>
          <div className='mb-3 row'>
          <label htmlFor="date" className='col-sm-0 col-form-label'>Appointment Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          </div>
        </div>
        
        <div className='row '>
        <div className='col'></div>
        <div className='input-group mb-5 row'>
          <label htmlFor="symptoms">Symptoms:</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
        </div>
        </div>
        <button type="submit" class="btn btn-secondary">
        <Link className="nav-link" to="/appointment-status">Book Appointment</Link>
        </button>
      </form>
    </div>
    </div>
   
  );
}

export default PatientAppointment;
