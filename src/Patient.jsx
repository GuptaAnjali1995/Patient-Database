import React, { Component } from 'react';

import PatientTable from './PatientTable';

import SearchBar from './SearchBar';



class Patient extends Component {

    
        constructor(props) {
            super(props);
        
           this.state = [];
           this.state.filterText = "";
            this.state.patients = [
              {
                id: 1,
                name: 'Anaya Goods',
                email: 'anaya.goods@xyz.com',
                age: 12,
                gender: 'female'
              }, {
                id: 2,
                name: 'Manya Verma',
                email: 'manya.verma@xyz.com',
                age: 12,
                gender: 'female'
              }, {
                id: 3,
                name: 'Akshay Kumar',
                email: 'kumar.akshay@xyz.com',
                age: 42,
                gender: 'male'
              }, {
                id: 4,
                name: 'Tanav Gupta',
                email: 'gupta.tanav@xyz.com',
                age: 21,
                gender: 'female'
              }, {
                id: 5,
                name: 'Elina shah',
                email: 'elina@abc.com',
                age: 12,
                gender: 'female'
              }, {
                id: 6,
                name: 'Kritika Talvar',
                email: 'talvar.kritika@xyz.com',
                age: 28,
                gender: 'female'
              }
            ];

        };
        
          
        
          handleUserInput(filterText) {
            this.setState({filterText: filterText});
          };
          handleRowDel(patient) {
            var index = this.state.patients.indexOf(patient);
            this.state.patients.splice(index, 1);
            this.setState(this.state.patients);
          };
        
          handleAddEvent(evt) {
            var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
            var patient = {
              id: id,
              name: "",
              email: "",
              age: 0,
              gender: ""
            }
            this.state.patients.push(patient);
            this.setState(this.state.patients);
        
          }
        
          handlePatientTable(evt) {
            var item = {
              id: evt.target.id,
              name: evt.target.name,
              value: evt.target.value
            };
        var patients = this.state.patients.slice();
          var newPatients = patients.map(function(patient) {
        
            for (var key in patient) {
              if (key === item.name && patient.id === item.id) {
                patient[key] = item.value;
        
              }
            }
            return patient;
          });
            this.setState({patients:newPatients});
          //  console.log(this.state.patients);
          };

          render() {
        
            return (
              <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <PatientTable onPatientTableUpdate={this.handlePatientTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} patients={this.state.patients} filterText={this.state.filterText}/>
              </div>
            );
        
          }

    }
 


export default Patient;