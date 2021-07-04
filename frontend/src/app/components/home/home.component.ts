import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produit: any[] = []

  constructor( private produitservice:ProduitService) { }
  ngOnInit(): void {
    this.produitservice.grtAllproduit().subscribe(prods =>{
      console.log(prods)
    })
   
  }

}
