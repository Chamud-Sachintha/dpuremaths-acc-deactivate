import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { DeleteService } from './services/delete.service';
import { Request } from './models/Request/request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  requestParamModel = new Request();
  deleteUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private deleteService: DeleteService, private tost: ToastrService) {}

  ngOnInit(): void {
    this.initDeleteUserForm();
  }

  initDeleteUserForm() {
    this.deleteUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      reason: ['', Validators.required]
    })
  }

  onSubmitDeleteUserForm() {
    
    const userName = this.deleteUserForm.controls['userName'].value;
    const reason = this.deleteUserForm.controls['reason'].value;
    const password = this.deleteUserForm.controls['password'].value;

    if (userName == "") {

    } else if (reason == "") {

    } else if (password == "") {

    } else {
      this.requestParamModel.userName = userName;
      this.requestParamModel.password = password;
      this.requestParamModel.remark = reason;

      this.deleteService.deleteUserProfile(this.requestParamModel).subscribe((resp: any) => {

        if (resp.code === 1) {
          this.tost.success("Delete User Profile", "User Profile Delete Successfully.");
        } else {
          this.tost.error("Delete User Profile", resp.message);
        }
      })
    }
  }
}
