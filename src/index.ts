import { Observable, Subscriber } from 'rxjs';

// const obs$ = Observable.create(); 

const obs$ = new Observable<string>( subs =>{
    subs.next('hello');
    subs.next('world');

    subs.next('omai');
    subs.next('gat');

    subs.complete();

});

obs$.subscribe( resp =>{
    console.log(resp)
} )




