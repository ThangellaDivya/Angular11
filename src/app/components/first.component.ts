import {Component} from "@angular/core";
import {myService} from "../services/myService"
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class acService{
public message:string;
    constructor(  public obj:myService){

    }

    ngOnInit(){
        this.message =   this.obj.getAcImage();
    }

}