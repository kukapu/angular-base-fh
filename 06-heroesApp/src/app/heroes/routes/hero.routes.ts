import { Routes } from "@angular/router";
import { LayoutPageHeroComponent } from "../pages/layout-page/layout-page.component";
import { NewPageComponent } from "../pages/new-page/new-page.component";
import { SearchPageComponent } from "../pages/search-page/search-page.component";
import { ListPageComponent } from "../pages/list-page/list-page.component";
import { HeroPageComponent } from "../pages/hero-page/hero-page.component";

export const heroesChilds: Routes = [
  {
    path: '',
    component: LayoutPageHeroComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list'},
    ]
  }
]
