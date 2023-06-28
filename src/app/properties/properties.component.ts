import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { property } from './properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  allProperty:any;
  formValue!:FormGroup
  PropertyModelObj:property=new property();
  showAdd!:boolean;
  showEdit:boolean;
constructor(private fb:FormBuilder, private api:PropertyService){}
ngOnInit():void{
  this.formValue=this.fb.group({
    ptitle:[''],
    pprice:[''],
    plocation:[''],
    pdetails:['']
  })
  this.getAllProperty()
}
clickAddProp(){
  this.formValue.reset();
  this.showAdd=true;
  this.showEdit=false;
}
getAllProperty(){
  this.api.getAllProp().subscribe((res)=>{
    this.allProperty=res;
    console.warn(this.allProperty)
  })
}
addProp(){
this.PropertyModelObj.ptitle=this.formValue.value.ptitle;
this.PropertyModelObj.pprice=this.formValue.value.pprice;
this.PropertyModelObj.plocation=this.formValue.value.plocation;
this.PropertyModelObj.pdetails=this.formValue.value.pdetails;
// this.PropertyModelObj.ptitle=this.formValue.value.ptitle;
// console.log(this.PropertyModelObj)
this.api.addListing(this.PropertyModelObj).subscribe((res)=>{
  console.log(res);
  alert("record added successfully");
  let ref=document.getElementById('clear');
  ref?.click()
  this.formValue.reset();
  this.getAllProperty();
  
  

})

 }
 deletProp(data:any){
  this.api.deleteProp(data.id).subscribe((res)=>{
    alert("deleted successfully")
    this.getAllProperty()
  })

 }
//  getById(id:number){
//   this.api.getbyId(id).subscribe((res)=>{
//     this.allProperty=res;
//   })

//  }

onEdit(data:any){
  this.showAdd=false;
  this.showEdit=true;
  this.PropertyModelObj.id=data.id;
  this.formValue.controls['ptitle'].setValue(data.ptitle)
  this.formValue.controls['pprice'].setValue(data.pprice)
  this.formValue.controls['plocation'].setValue(data.plocation)
  this.formValue.controls['pdetails'].setValue(data.pdetails)
}
// update
updatProp(){
  this.PropertyModelObj.ptitle=this.formValue.value.ptitle;
this.PropertyModelObj.pprice=this.formValue.value.pprice;
this.PropertyModelObj.plocation=this.formValue.value.plocation;
this.PropertyModelObj.pdetails=this.formValue.value.pdetails;
this.api.updateProp(this.PropertyModelObj,this.PropertyModelObj.id).subscribe((res)=>{
  alert("updated successfuly")
  let ref=document.getElementById('clear');
  ref?.click()
  this.formValue.reset();
  this.getAllProperty();
})

}
}
