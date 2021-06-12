import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base-component';
import { SelectOption } from 'src/app/shared/controls/select/select-option';
import { CurrentPage } from 'src/app/shared/controls/table/current-page';
import { TableColumn } from 'src/app/shared/controls/table/table-column';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
  }

  public carsColumns:TableColumn[] = [
    {
      name:'Tesla',
      dataKey:'manufacturer',
      isSortable:true
    },
    {
      name:'Tesla 2',
      dataKey:'model',
      isSortable:true
    },
    {
      name:'Tesla t',
      dataKey:'powerSupply',
      isSortable:true
    }
  ];
  public carsRows: any[] = [
    {
      manufacturer: 'Tesla',
      model: 'Model 3',
      powerSupply: 'electricity',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '7676',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
  ];

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signIn() {
    console.log(this.form.value);
  }

  items:SelectOption[]=[
    {
      id:'1',
      title:'one'
    },
    {
      id:'2',
      title:'two'
    },
    {
      id:'3',
      title:'three'
    }
  ]

  sortData(val) {
    console.log(val);
  }

  page(event:CurrentPage) {
    console.log('Page No:'+event.pageNumber + "  "+ 'Page Size:' + event.pageSize);
  }
}
