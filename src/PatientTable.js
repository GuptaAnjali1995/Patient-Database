import React from 'react';

class PatientTable extends React.Component {
render() {
    var onPatientTableUpdate = this.props.onPatientTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var patient = this.props.patients.map(function(patient) {
      if (patient.name.indexOf(filterText) === -1) {
        return;
      }
      return (<PatientRow onPatientTableUpdate={onPatientTableUpdate} patient={patient} onDelEvent={rowDel.bind(this)} key={patient.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            {patient}

          </tbody>

        </table>
      </div>
    );

  }

}

class PatientRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.patient);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onPatientTableUpdate={this.props.onPatientTableUpdate} cellData={{
          "type": "name",
          value: this.props.patient.name,
          id: this.props.patient.id
        }}/>
        <EditableCell onPatientTableUpdate={this.props.onPatientTableUpdate} cellData={{
          type: "email",
          value: this.props.patient.email,
          id: this.props.patient.id
        }}/>
        <EditableCell onPatientTableUpdate={this.props.onPatientTableUpdate} cellData={{
          type: "age",
          value: this.props.patient.age,
          id: this.props.patient.id
        }}/>
        <EditableCell onPatientTableUpdate={this.props.onPatientTableUpdate} cellData={{
          type: "gender",
          value: this.props.patient.gender,
          id: this.props.patient.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onPatientTableUpdate}/>
      </td>
    );

  }}

  export default PatientTable;