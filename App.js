function App() {
  return (
    <>
    <div align="center">
    <h1>TECH TALK REPORT</h1>
    <tr>
    <td><label>Name of  the faculty</label> </td>
    <td><input></input></td>
    </tr>
    <td><label>Mudil Number</label></td>
    <td><input></input></td>
    <tr>
    <td> Lecture Delivered to Branch </td>
    <td>
    <select name=" Lecture Delivered to Branch">
    <option> Computer science and engineering </option>
    <option> Electrical and electronical engineering </option>
    <option> Mechanical Engineering </option>
     </select>
     </td>
     </tr>
     <tr>
      <td><label>Semester</label></td>
     <td><select name="Semester">
      <option>ODD</option>
      <option>EVEN</option>
      </select>
      </td> </tr>
     <tr>
    <td><label>Section</label></td>
    <select name="section">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    </tr>
    <tr>
      <td><label>Date of Lecture Delivered</label></td>
      <td><input></input></td>
    </tr>
    <tr>
      <td><label>Period</label></td>
      <td><input></input></td>
        </tr>
        <tr>
         <td><label>Topic of Discussion</label></td>
          <td><input></input></td>
        </tr>
        <tr>
          <td><label>NO.of Beneficiaries</label></td>
          <td><input></input></td>
        </tr>
        <tr>
          <td><label><b>Details of the Disscussion made</b></label></td>
        </tr>
        <tr>
          <td><label>Outcome of the Disscussion Made<br/>(should be very specific; It is expected that<br/>
            minimum of five to six interdisciplinary<br/>
            problems and solutions are identified)</label></td>
            <td><input></input></td>
        </tr>
        <tr>
          <td><label>Outcome of the Activity</label></td>
          <td><input></input></td>
        </tr>
        <tr>
          <td><label>POandPSO</label></td>
        </tr>
        <tr>
          <td><label><b>Attachments:</b></label></td>
        </tr>
        <tr>
          <td><label>Attendance Sheet</label></td>
          <td><input type="file" name="pdf"></input></td>
        </tr>
        <tr>
          <td><label>Handouts of Lecture</label></td>
          <td><input type="file" name="pdf"></input></td>
        </tr>
  

    
     

    </div>
    
    </>
  );
}

export default App;