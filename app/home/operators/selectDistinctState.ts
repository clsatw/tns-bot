import { UnaryFunction, pipe, Observable } from "rxjs";
import { distinctUntilChanged, pluck, map } from "rxjs/operators";

export function selectDistinctState<T, I>(key: string): UnaryFunction<Observable<T>, Observable<I>> {
    return pipe(
        pluck<T, I>(key),
        distinctUntilChanged<I>()
    );
}

export function inputToValue(defaultValue: number = null) {
        return pipe(
            map((event: any): number => {
                const parsed = event ? parseInt(event.value, 10) : defaultValue;
                return (parsed === 0 || parsed) ? parsed : defaultValue;
            })
        );
    }

