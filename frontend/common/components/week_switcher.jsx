import React from 'react';
import PropTypes from 'prop-types';

const WeekSwitcher = ({ week, updateWeek }) => {
  if (week === 21) {
    week = 22;
  }

  const renderText = () => {
    if (week <= 17) {
      return `Week ${week}`;
    } else if (week === 18) {
      return 'Wildcard';
    } else if (week === 19) {
      return 'Divisional';
    } else if (week === 20) {
      return 'Conference';
    } else if (week === 21) {
      return 'Pro Bowl';
    } else if (week === 22) {
      return 'Super Bowl';
    }
  };

  return (
    <div className="week-switcher">
      { week > 1 && (
        <i
          onClick={() => updateWeek(-1)}
          className="fa fa-caret-left"
          aria-hidden="true"
        />
      )}

      { renderText() }

      { week < 22 && (
        <i
          onClick={() => updateWeek(1)}
          className="fa fa-caret-right"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

WeekSwitcher.propTypes = {
  week: PropTypes.number.isRequired,
  updateWeek: PropTypes.func.isRequired
};

export { WeekSwitcher };
