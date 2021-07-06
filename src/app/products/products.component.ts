import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { content }  from './products-data'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData = [];
  productsLength = 12;
  mainData=[];
  isHighToLowFilterApplied = true ;
  initialData =[];
  filterType = 'hightolow'

  constructor( private _router: Router ,  private _activatedroute: ActivatedRoute 
    ) { }

  ngOnInit() {

    this.mainData = content();
    this.initialData = content ();

    this._activatedroute.queryParams.subscribe((params)=>{
      this.filterType=params.sortType;
      this.filterData(this.filterType);
    })



    this.sortData(this.mainData);
  }

  sortData(data){

    this.productsLength = 12;

    this.mainData  = data.sort(function(a,b){
      if(a.Price <  b.Price) return -1;
      if(a.Price > b.Price) return 1;
      return 0;
    });

    if(!this.isHighToLowFilterApplied){
      this.productsData = this.mainData.slice(0,this.productsLength)
    }
    else{
      this.productsData = this.mainData.reverse().slice(0,this.productsLength)

    }

  }

  filterData(value = 'hightolow'){

    value == 'hightolow'  ? this.isHighToLowFilterApplied = true  : this.isHighToLowFilterApplied = false ;

    if(this.isHighToLowFilterApplied){
      this._router.navigate(['list'], { queryParams: { sortType: 'hightolow'} });

    }
    else{
      this._router.navigate(['list'], { queryParams: { sortType: 'lowtohigh'} });
    }


    this.sortData(this.initialData);

  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event){
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
     let max = document.documentElement.scrollHeight;
    if (pos == max) {
      if(this.productsLength <= 36){
      this.productsLength = this.productsLength + 12 ;
       this.productsData = this.mainData.slice(0,this.productsLength);

      }
    }
  }


}
