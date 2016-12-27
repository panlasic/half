import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { AllQuestionsComponent } from "./all-questions/all-questions.component";
import { SingleQuestionComponent } from "./single-question/single-question.component";

const APP_ROUTES: Routes = [
	{ path: 'profile', component: ProfileComponent },
	{ path: 'singlequestion', component: SingleQuestionComponent },
	{ path: '', component: AllQuestionsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);