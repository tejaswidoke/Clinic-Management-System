import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerPatient(
    pname,
    age,
    gender,
    mobile,
    address,
    email,
    password,
) {
  const url = createUrl('/patient/register')
  const body = {
    pname,
    age,
    gender,
    mobile,
    address,
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginPatient(email, password) {
  const url = createUrl('/patient/login')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

//patient appointment

export async function patientAppointment(
  pid,
  did,
  date,
  symptoms,
) {
const url = createUrl('/appointment/bookAppointment')
const body = {
  pid,
  did,
  date,
  symptoms,
}

// wait till axios is making the api call and getting response from server
try {
  const response = await axios.post(url, body)
  log(response.data)
  return response.data
} catch (ex) {
  log(ex)
  return null
}
}
