import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  studentForm: FormGroup;

  constructor(
    private service: StudentService,
    builder: FormBuilder,
    private router: Router
    ) {
      this.studentForm = builder.group({
        name: '',
        phone: '',
        email: '',
        address: ''
      });
  }

  save() {
    this.service.save(this.studentForm.value);
    this.router.navigateByUrl('/list');
  }

}
