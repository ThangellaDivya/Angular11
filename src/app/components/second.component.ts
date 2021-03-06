import {Component } from "@angular/core";
import {myService} from "../services/myService";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
   public message :string
        constructor (public obj:myService){

    }
    ngOnInit(){
this.message = this.obj.getCamera();
    }
}