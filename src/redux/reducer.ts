import AppState from "./app-state";
import Action from "./action";
import { ActionType } from "./action-type";

const defaultAppState = new AppState();
export function reduce(oldAppState: AppState = defaultAppState, action: Action): AppState {
    // Cloning the oldState (creating a copy)
    const newAppState = { ...oldAppState };
    switch (action.type) {
        // adding user credentials to redux
        case ActionType.Login:
            newAppState.userType = action.payload.userType;
            newAppState.userId = action.payload.userId;
            break;
        // deleting user credentials from redux
        case ActionType.LogOut:
            newAppState.userType = null;
            newAppState.userId = null;
            break;
        case ActionType.DiscoverGames:
            newAppState.discoverGames = action.payload;
            break;
        case ActionType.ChangeBgImg:
            newAppState.currentBgImg = action.payload;
            break;
    }

    // After returning the new state, it's being published to all subscribers
    // Each component will render itself based on the new state
    return newAppState;
}