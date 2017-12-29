import { setTextFilter, setStartDate, setEndDate , sortByAmount, sortByDate} from '../../actions/filter';
import moment from 'moment';

test('should generate set start date against action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date against action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by amount against action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date against action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set text filter against action', () => {
    const action = setTextFilter('AHMAD KAMAL');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'AHMAD KAMAL'
    });
});

test('should generate set text filter empty against action', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});