import { Observable } from "rxjs";
import { StateService } from "../state.service";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 42
}

class CounterStateService extends StateService<CounterState> {
    $count: Observable<number> = this.select(state => state.count);

    constructor() {
        super(initialState);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
}

const CounterStateService$ = new CounterStateService();

Object.freeze(CounterStateService$);

export { CounterStateService$ };
