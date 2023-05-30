import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
	const StoreWrapper = (props) => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions },
					}),
			})
		);

		useEffect(() => {
			const loadCharactersAndPlanets = async () => {
				await state.actions.loadCharactersFetch();
				await state.actions.loadPlanetsFetch();
			};
			loadCharactersAndPlanets();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;

/*

I made the following changes to fix the errors:

The useEffect hook was not properly utilizing the state.actions.loadCharactersFetch and state.actions.loadPlanetsFetch functions. I fixed it by wrapping them in an async function called loadCharactersAndPlanets and then calling it inside useEffect.
To avoid the "missing dependencies" error, I added an eslint-disable comment since we don't need to add state.actions.loadCharactersFetch and state.actions.loadPlanetsFetch to the dependency array. These functions don't change during the lifecycle of the component.
Please let me know if you have any other questions or if there's anything else I can help you with!

*/