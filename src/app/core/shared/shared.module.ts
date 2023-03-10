import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

//material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
    declarations: [
        NotFoundComponent,
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatTableModule,
        DragDropModule,
        MatDialogModule
        
    ],
    providers: [],
    exports: [
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
        FormsModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatTableModule,
        MatTableModule,
        DragDropModule,
        MatDialogModule
        
        
    ]
})

export class SharedModule {
    constructor() { }
} 