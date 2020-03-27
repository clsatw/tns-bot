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

/* custom operator. Hint: use Observable.create inside the custom operator
const filterOdd = (src$: Observable<any>)=>{
    return new Observable(observer=>{
        return src.subscribe(value=>{
            if (value%2 ===0){
                observer.next(value)
            }
        },
        (err)=>{
            observer.error(err);
        },
        ()=>{observer.complete()}        
        )
    })
}
*/