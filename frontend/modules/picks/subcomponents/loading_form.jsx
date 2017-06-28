import React from 'react';

class LoadingForm extends React.Component {
  render() {
    return (
      <div className="selection-item">
        <label className={'selection-form-away'} htmlFor='away-pick'>
          <img
            className="pick-button pick-away-button"
            alt='TTT'
          />
          <div className="selection-form-away-name">
            <div>
              {'TTTT'}
            </div>
            <div>
              {'TT'}-{'TT'}-{'TT'}
            </div>
          </div>
        </label>

        <div className="selection-form-time">
          <div className="time-row">
            <div>
              {'TTTT'}
            </div>
            <div className='time-props'>
              <div>{'TT'}</div>
              <div>{'TT'}</div>
            </div>
          </div>
          <div className="date-row">
            {'TTTTTT'}
          </div>
        </div>
        <div className="selection-form-line">
          {'TTTTT'}
        </div>
        <div className="selection-form-spread">
          {'TTTT'}
        </div>
        <div className="selection-form-score">
          {'TTTT'}
        </div>

        <label className={'selection-form-home'} htmlFor='home-pick'>
          <div className="selection-form-home-name">
            <div>
              {'TTTT'}
            </div>
            <div>
              {'TT'}-{'TT'}-{'TT'}
            </div>
          </div>
          <button onClick={() => this.submitPick("home")} />
          <img
            className='pick-button pick-home-button'
            alt={`TTTT`}
          />
        </label>
      </div>
    );
  }
}

export { LoadingForm };
