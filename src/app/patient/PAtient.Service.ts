import {Injectable} from '@angular/core'
import{HttpClient,HttpHeaders} from "@angular/common/http"
import {Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})
export class PatientService{
    
    constructor(private http:HttpClient){}
    private url="http://localhost:5000/Hospital";
    getHospitals() {
        return this.http.get('/Hospital');
}
addHospital(hospital){
    const httpheaders=new HttpHeaders();
    httpheaders.append('content-type','application/json');
    console.log(JSON.stringify(hospital));
    return this.http.post(this.url,hospital,{headers:httpheaders});
}
}