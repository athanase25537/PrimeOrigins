import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card"
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
    exports: [
        // Import all the required modules from '@angular/material'
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
})
export class MaterialModules{}