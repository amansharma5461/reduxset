const InitialState = { count: 0 }
function rootReducer(state = InitialState, action) {
switch (action.type) {
case 'counter/like': return { ...state, count: state.count.value + 1 };
case 'counter/view': return { ...state, count: state.count.value - 1 };
default: return state;
}};
export { rootReducer };