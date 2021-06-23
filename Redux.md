constants ==> constants are the actiontypes(strings)
actions ==> methods that returns objects having type property
reducer ==> reducers are the function which takes state and action as arguments
and based on the action type it returns the new state object.
state should be first initialised else error may happen having undefined state.
store ==> store is the container for the react state

as soon as action is dispatched state is updated
when we dispatch a action it goes to the reducer internally,
then we check for the type of action with action type,
and for that action we return new state having some state change in previous state object.
then the component is subscribed to the store so whenever changes happen component rerenders.

when we using the async action for fetching the data we will include
{
loading:true,
data:[],
err:""
}

loading property helps us to display loading spinner in componenents
