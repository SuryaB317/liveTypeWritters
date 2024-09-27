import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TextBoxComponent } from './text-box/text-box.component';

const routes: Routes = [
  {
    path: "clock",
    component: ClockComponent
  },
  {
    path: "nav",
    component: NavBarComponent
    },
    {
      path: "content",
      component: ContentComponent
      },
      {
        path: "res",
        component: ResultPageComponent
        },
        {
          path: "textBox",
          component: TextBoxComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
