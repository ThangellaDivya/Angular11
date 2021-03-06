import {Injectable} from "@angular/core";
@Injectable({
    providedIn : "root"
})
export class myService{
    getAcImage(){
        return "hiiii... am from Ac service!!!!!!"
    }
    getCamera(){
        return "hii... iam from camera service........."
    }
}