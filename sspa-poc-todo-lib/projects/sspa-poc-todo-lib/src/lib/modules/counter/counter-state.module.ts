import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterStateService } from './counter-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [CounterStateService]
})
export class CounterStateModule { }