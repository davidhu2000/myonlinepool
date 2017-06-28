import React from 'react';

class LoadingForm extends React.Component {
  render() {
    return (
      <div className="selection-item">
        <label className={'selection-form-away'} htmlFor='away-pick'>
          <img
            className="pick-button pick-away-button pending"
            alt='TTT'
          />
          <div className="selection-form-away-name">
            <div className='pending'>
              {'TTTT'}
            </div>
            <div className='pending'>
              {'TT'}-{'TT'}-{'TT'}
            </div>
          </div>
        </label>

        <div className="selection-form-time">
          <div className="time-row">
            <div className='pending'>
              {'TTTT'}
            </div>
            <div className='time-props pending'>
              <div>{'TT'}</div>
              <div>{'TT'}</div>
            </div>
          </div>
          <div className="date-row pending">
            {'TTTTTT'}
          </div>
        </div>
        <div className="selection-form-line">
          <div className='pending'>
            {'TTTT'}
          </div>
        </div>
        <div className="selection-form-spread">
          <div className='pending'>
            {'TTTT'}
          </div>
        </div>
        <div className="selection-form-score">
          <div className='pending'>
            {'TT-TT'}
          </div>
        </div>

        <label className={'selection-form-home'} htmlFor='home-pick'>
          <div className="selection-form-home-name">
            <div className='pending'>
              {'TTTT'}
            </div>
            <div className='pending'>
              {'TT'}-{'TT'}-{'TT'}
            </div>
          </div>
          <img
            className='pick-button pick-home-button pending'
            alt={`TTTT`}
          />
        </label>
      </div>
    );
  }
}

export { LoadingForm };
