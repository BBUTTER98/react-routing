import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
const reducer = (state, action)=>{
	switch(action.type){
		case 'increment':
				state.count = state.count+1
				return;
		case 'decrement':
				state.count = state.count-1
			return;
		case 'valueToAdd':
				state.count = state.count+parseInt(state.valueToAdd)
				state.valueToAdd = 0
			return;
		case 'onInputChange':
				state.valueToAdd = parseInt(action.newValue)
				return;
		default:
			return;
	}
}
function CounterPage({ initialCount }) {
	const [state, dispatch] = useReducer(produce(reducer),{
		count: initialCount,
		valueToAdd:0
	})
	const increment = () => {
		dispatch({type: 'increment'});
	};
	const decrement = () => {
		dispatch({type: 'decrement'});
	};
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: 'valueToAdd'});
    }
	const handleChange = (e) =>{
		dispatch({type:'onInputChange',newValue:e.target.value});
	}
	return (
		<Panel className="m-3">
			<h1 className="text-lg">Count is {state.count}</h1>
			<div className="flex flex-row">
				<Button secondary onClick={increment}>
					Increment
				</Button>
				<Button onClick={decrement}>Increment</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
                <input type="number" className="p-1 m-3 bg-gray-50 border-gray-300" value={state.valueToAdd} onChange={handleChange}/>
                <Button primary>Add it</Button>
			</form>
		</Panel>
	);
}
export default CounterPage;
