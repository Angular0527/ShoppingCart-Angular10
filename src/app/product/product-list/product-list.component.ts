import { AuthServiceService } from "./../../index/shared/auth.service";
import { Product } from "./../model/product";
import { ProductService } from "./../shared/product.service";
import { Component, OnInit } from "@angular/core";
import { LoaderSpinnerService } from "../../modules/loader-spinner/loader-spinner";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(
    private productService: ProductService,
    private spinnerService: LoaderSpinnerService,
    public authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.spinnerService.show();
    const x = this.productService.getProducts();
    x.snapshotChanges().subscribe(product => {
      this.spinnerService.hide();
      this.productList = [];
      product.forEach(element => {
        const y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productList.push(y as Product);
      });
    });
  }
}
