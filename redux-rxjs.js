Store, Reducer, Subscribe, Dispatch

Store is where the entire state of the application lives.
Actions are sent from views, (dispatched) which are payload that are sent to reducers or read by reducers
Reducers: read the payload from actions and update the store (master data)

combineReducers to combine more than 1 reducer

Using Provider from 'react-redux' lets allow the react app to access the store.


redux uses middleware to manage async operation.
Most of them uses callbacks or promises

Promises cannot be cancelled. (ie it has Guareenteed Feature)

Use Observables.
- Stream of Zero, one or more values
- Over any amount of time
- Cancellable

observable.subscribe(
  value =>
  err =>
  () =>
);
Observables can be transformed (map, filter, reduce)
Observables can be combined (concat, merge, zip)
Observables represent time (because they have time dimension) - debounce, throttle, buffer, combineLatest
Observables are lazy (retry, repeat)

Observable is just a function that takes an observer and returns a function
If you really want to understand observable, you could simply write one. It’s not as hard as it sounds, honestly. An observable, boiled down to it’s smallest parts, is no more than a specific type of function with a specific purpose.

Shape:
A function
That accepts an observer: An object with `next`, `error` and `complete` methods on it.
And returns a cancellation function
Purpose:
To connect the observer to something that produces values (a producer), and return a means to tear down that connection to the producer. The observer is really a registry of handlers that can be pushed values over time.

Basic Implementation:
function myObservable(observer) {
    const datasource = new DataSource();
    datasource.ondata = (e) => observer.next(e);
    datasource.onerror = (err) => observer.error(err);
    datasource.oncomplete = () => observer.complete();
    return () => {
        datasource.destroy();
    };
}

// https://redux-observable.js.org/
const autoComplete = (action$, store) =>
  action$.ofType('QUERY')
        .debounceTime(500)
        .switchMap(action => // switchMap is implicit cancellation. ie, another query reached this stage, cancels prev. call.
          ajax('./api/users?='+value)
            .map(payload => (
              {type: 'QUERY_FULFILLED', payload}
            ))
            .takeUntil(action$.ofType('CANCEL_QUERY')) // explicit cancellation
            .catch(payload => (
              {type: 'QUERY_REJECTED', payload, error: true}
            ))
        )
