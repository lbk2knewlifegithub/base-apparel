import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'lbk-email-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './email-form.component.html',
})
export class EmailFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  get hasError() {
    return (
      this.form.touched &&
      (this.email.hasError('required') || this.email.hasError('email'))
    );
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
}
