import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: 200, createdAt: 1000} ));
const expenseTwo = store.dispatch(addExpense( {description: 'Car', amount: 10, createdAt: -1000} ));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 30000}));
// store.dispatch(setTextFilter('sewa'));
// store.dispatch(setTextFilter('r'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-2000));
// store.dispatch(setEndDate(250));
// console.log(expenseOne);

const demoState = {
    expenses: [
        {
            id: 'dsadadad',
            description: 'Rental',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        },
        {
            id: 'dsadadad',
            description: 'Rental',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user,
    location: 'Kuala Lumpur'
});