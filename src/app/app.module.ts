import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule,MatMenuModule,MatButtonModule,MatDialogModule,MatIconModule,MatCardModule,MatDividerModule,MatListModule,MatTabsModule,MatTreeModule} from "@angular/material";
import {Routes,RouterModule} from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";


import {AppComponent} from "./app.component";
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavitemsComponent } from './sidenavitems/sidenavitems.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { RightsidenavComponent } from './rightsidenav/rightsidenav.component';
import { DialogdataComponent } from './dialogdata/dialogdata.component';

const routes: Routes =[
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {
    path:'content',
    component:ContentComponent,
    data: { page: 'content' }
  },
  {
    path:'about',
    component:AboutComponent,
    data: { page: 'about' }
  },
  {
    path:'education',
    component:EducationComponent,
    data: { page: 'education' }
  },
  {
    path:'skills',
    component:SkillsComponent,
    data: { page: 'skills' }
  },
  {
    path:'projects',
    component:ProjectsComponent,
    data: { page: 'projects' }
  },
  {
    path:'workshops',
    component:WorkshopsComponent,
    data: { page: 'workshops' }
  },
  {
    path:'achivements',
    component:AchivementsComponent,
    data: { page: 'achivements' }
  },
  {
    path:'interests',
    component:InterestsComponent,
    data: { page: 'interests' }
  },
  {
    path:'contact',
    component:ContactComponent,
    data: { page: 'contact' }
  }
];

  @NgModule({
    declarations: [
      AppComponent,
      SidenavComponent,
      SidenavitemsComponent,
      AboutComponent,
      ContentComponent,
      EducationComponent,
      SkillsComponent,
      ProjectsComponent,
      WorkshopsComponent,
      AchivementsComponent,
      InterestsComponent,
      ContactComponent,
      RightsidenavComponent,
      DialogdataComponent
    ],

    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatTabsModule,
      MatTreeModule,
      MatListModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatCardModule,
      MatDividerModule,
      FlexLayoutModule,
      RouterModule.forRoot(routes)
  ],
    entryComponents:[
      DialogdataComponent
    ],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
