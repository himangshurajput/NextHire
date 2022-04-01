import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
  Renderer2,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  Validators,
  NgForm,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  animate,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SubmittedComponent } from '../submitted/submitted.component';
import { contact } from '../../app/model/contact';
import { FormsModule } from '@angular/forms';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-requestdemo',
  templateUrl: './requestdemo.component.html',
  styleUrls: ['./requestdemo.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('buttonSubmit', [
      state(
        'lone',
        style({
          opacity: 1,
        })
      ),
      state(
        'open',
        style({
          opacity: 0,
        })
      ),

      transition('lone => open', [
        query('buttonText', animate('10ms', style({ display: 'none' }))),
        animate(
          '300ms ease-in-out',
          keyframes([
            style({ opacity: 0.75 }),
            style({ opacity: 0.5 }),
            style({ opacity: 0.25 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class RequestdemoComponent implements OnInit, AfterViewInit {
  @ViewChild('submitButton', { read: ElementRef }) submitButtonRef: ElementRef;
  @ViewChild('buttonLoader', { read: ElementRef })
  buttonLoaderRef: ElementRef;
  @ViewChild('buttonSvg', { read: ElementRef })
  buttonSvgRef: ElementRef;
  @ViewChild('buttonSpan', { read: ElementRef })
  buttonSpanRef: ElementRef;
  contact: contact;
  form: FormGroup;
  constructor(
    private element: ElementRef,
    private render: Renderer2,
    public dialog: MatDialog,
    private service: ContactService,
    private formBuilder: FormBuilder
  ) {
    this.contact = new contact();
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      fullName: [Validators.required],
      email: [Validators.required, Validators.email],
      number: [Validators.minLength, Validators.maxLength],
      workType: [Validators.required],
    });
  }

  ngAfterViewInit(): void {}
  submit(form) {
    console.log(form);
    console.log(this.submitButtonRef.nativeElement);
    this.render.removeChild(
      this.submitButtonRef.nativeElement,
      this.buttonSvgRef.nativeElement
    );
    this.render.removeChild(
      this.submitButtonRef.nativeElement,
      this.buttonSpanRef.nativeElement
    );
    this.render.setStyle(
      this.buttonLoaderRef.nativeElement,
      'display',
      'block'
    );
    this.render.setStyle(
      this.submitButtonRef.nativeElement,
      'padding',
      '0.5em 3em'
    );
    setTimeout(() => {
      this.render.setStyle(
        this.buttonLoaderRef.nativeElement,
        'display',
        'none'
      );
      this.render.setProperty(
        this.buttonSpanRef.nativeElement,
        'innerHTML',
        '&#10004;'
      );
      this.render.appendChild(
        this.submitButtonRef.nativeElement,
        this.buttonSpanRef.nativeElement
      );
    }, 1000);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '200px';
    dialogConfig.width = '500px';
    this.service.submitContact(this.contact).subscribe((res: any) => {
      console.log(res);
      if (res) {
        const dialogRef = this.dialog.open(SubmittedComponent, dialogConfig);
      } else {
        console.log('Error');
      }
    });
  }
}
