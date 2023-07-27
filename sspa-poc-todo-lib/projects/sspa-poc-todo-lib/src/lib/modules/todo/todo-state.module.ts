import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodosApiService } from './services/api/todo-api.service';
import { TodoStateService } from './services/todo-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [TodosApiService, TodoStateService]
})
export class TodoStateModule { }