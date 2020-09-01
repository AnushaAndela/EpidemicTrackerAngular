import {PatientService} from './PAtient.Service';
import { Component, OnInit ,Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  hospital:any;
  constructor(private service:PatientService) { }
  ngOnInit(){
    this.getDataFromAPI();

  }
    getDataFromAPI(){
 this.service.getHospitals().subscribe(response=>{
   //console.log(response);
   this.hospital=response;
   console.log(response);
 });
 }
 createHospital(HospitalForm:NgForm){
  const hospital={
    Name:HospitalForm.value.hname,
    Phone:parseInt(HospitalForm.value.hphone),
    StreetNo:HospitalForm.value.hstreetno,
    Area:HospitalForm.value.harea,
    City:HospitalForm.value.hcity,
    State:HospitalForm.value.hstate,
    Country:HospitalForm.value.hcountry,
    Pincode:parseInt(HospitalForm.value.hpincode)

  }
  this.service.addHospital(hospital)
  .subscribe(response=>{
    console.log(response);
  });
}
 
  }
  
  

 

