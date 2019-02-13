import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate   } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  //destructure from react-dates library
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  }
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    if(e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  render() {
    console.log(this.props.filters)
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
            type='text'
            value={ this.props.filters.text }
            onChange={this.onTextChange}
            className="text-input"
            placeholder="Search expenses"
            />
          </div>
          <div>
            <select
            className="select"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}>
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>
          <div>
            <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=> false} //allow go back in time
            />
          </div>
        </div>
        
        
        
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const matDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dospatch(setEndDate(endDate))
  }
}

export default connect(mapStateToProps, matDispatchToProps)(ExpenseListFilters);