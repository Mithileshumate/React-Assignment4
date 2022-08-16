import React from 'react'

const Student = () => {
  return (
    <div className='student1'>
      Student Details
      <button className='btn'>Add-Student</button>
      <table className='table'>
        <tr>
        <th>Name</th>
        <th>Course</th>
        <th>Batch</th>
        </tr>
        <tr>
          <td>Mithilesh</td>
          <td>Elevation course</td>
          <td>April 2022</td>
        </tr>
        <tr>
          <td>Tejeshwar</td>
          <td>Engineering</td>
          <td>May2020</td>
        </tr>
        <tr>
          <td>Abhishek K.</td>
          <td>TCS</td>
          <td>Dec 2021</td>
        </tr>

      </table>
    </div>
  )
}

export default Student
