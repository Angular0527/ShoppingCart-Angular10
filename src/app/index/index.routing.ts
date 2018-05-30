import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { LocalFavouritePageComponent } from "./local-favourite-page/local-favourite-page.component";
import { LocalCartItemComponent } from "./local-cart-item/local-cart-item.component";

export const IndexRoutes: Routes = [
  {
    path: "index",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "favourites",
        component: LocalFavouritePageComponent
      },
      {
        path: "cartItems",
        component: LocalCartItemComponent
      }
    ]
  }
];
