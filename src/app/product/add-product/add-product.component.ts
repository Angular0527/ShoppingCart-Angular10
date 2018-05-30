import {
  ToastyService,
  ToastyConfig,
  ToastOptions,
  ToastData
} from "ng2-toasty";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";

declare var $: any;
declare var require: any;
const shortId = require("shortid");
const moment = require("moment");

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = "material";
  }

  ngOnInit() {}

  createProduct(productForm: NgForm) {
    const toastOptions: ToastOptions = {
      title: "Product Creation",
      msg:
        "product " + productForm.value["productName"] + "is added successfully",
      showClose: true,
      timeout: 5000,
      theme: "default"
    };
    productForm.value["productId"] = "PROD_" + shortId.generate();
    productForm.value["productAdded"] = moment().unix();
    productForm.value["ratings"] = Math.floor(Math.random() * 5 + 1);
    if (productForm.value["productImageUrl"] === undefined) {
      productForm.value["productImageUrl"] =
        "http://via.placeholder.com/640x360/007bff/ffffff";
    }

    productForm.value["favourite"] = false;

    const date = productForm.value["productAdded"];

    this.productService.createProduct(productForm.value);

    this.product = new Product();

    $("#exampleModalLong").modal("hide");

    this.toastyService.success(toastOptions);
  }
}
