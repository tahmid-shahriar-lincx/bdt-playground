import { Component, OnInit } from '@angular/core'
import { AllServicesService } from '../all-services.service'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pro-one',
  templateUrl: './pro-one.component.html',
  styleUrls: ['./pro-one.component.scss']
})
export class ProOneComponent implements OnInit {
  constructor (private allServices: AllServicesService,private fb: FormBuilder) {}
  result: any = null;
  labels: any = ['press the fetch button']
  jsonObject: any = {
    label: 'a > 2 ?',
    evalF: 'root',
    data: { a: 1 },
    children: [
      {
        label: 'a > b ?',
        evalF: 'aGtb',
        data: { a: 1, b: 2 },
        children: [
          {
            label: 'leaf 1',
            evalF: 'l1',
            data: null,
            children: null
          },
          {
            label: 'leaf 2',
            evalF: 'l2',
            data: null,
            children: null
          }
        ]
      },
      {
        label: 'b > a ?',
        evalF: 'bGta',
        data: { a: 1, b: 2 },
        children: [
          {
            label: 'leaf 3',
            evalF: 'l3',
            data: null,
            children: null
          },
          {
            label: 'leaf 4',
            evalF: 'l4',
            data: null,
            children: null
          }
        ]
      }
    ]
  }
  dtConf = this.fb.group({
    conf: [''],
  });
  ngOnInit (): void {}

  getLabels () {
    this.allServices.getLabels().subscribe(res => (this.labels = res))
  }
  submitForm(){
    console.log(this.dtConf.value)
    this.allServices.postTree(this.dtConf.value).subscribe(res =>this.result = res.result);
  }
}
