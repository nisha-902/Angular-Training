import { Component,OnInit } from '@angular/core';
import{ FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner'
import { AuthService } from '../shared/user/auth.service';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private userdata:UserdataService, private router:Router,private userauth: AuthService, private spinner:NgxSpinnerService){}
  loginForm=new FormGroup({
    // 'email':new FormControl(""),
    // 'password':new FormControl("")
    "username":new FormControl('')
  })
  ngOnInit():void{
    if(this.userdata.getData()!=null){
      this.router.navigateByUrl("layout/dashboard")
    }
  }
  onclick(){
    // this.userauth.login(this.loginForm.value).subscribe((res:any)=>{
    //   console.log(res.response.token)
    //   this.userdata.setData(res.response.token)
    //   this.router.navigateByUrl('layout/dashboard')
    // },
    // err=>{

    // console.log(err)
    // })
    this.spinner.show()
    setTimeout(() => {
      if(this.loginForm.get("username").value=="nisha"){
        this.spinner.hide()
        this.userdata.setData(this.loginForm.value)
        this.router.navigateByUrl("layout/dashboard")
      }
      else{
        this.spinner.hide()
        alert("incorrect username")
      }
      
    },3000);
    // this.userauth.login(this.loginForm.value).subscribe(
    //   (res:any)=>{
    //    console.log(res.response.token)
    //     this.userdata.setData(res.response.token)
    //     this.router.navigateByUrl('layout/dashboard')
    //    console.log(res)
        
    //   },
    //   err=>{
    //     console.log(err)
    //   }
    // )
   
   }

  }
