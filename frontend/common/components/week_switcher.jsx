import React from 'react';
import PropTypes from 'prop-types';

const WeekSwitcher = ({ week, updateWeek }) => {
  return (
    <div>
      { week > 1 && (
        <i
          onClick={() => updateWeek(-1)}
          className="fa fa-caret-left"
          aria-hidden="true"
        />
      )}

      Week {week}

      { week < 17 && (
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
