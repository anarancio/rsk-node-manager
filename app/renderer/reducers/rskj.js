import { handleActions } from 'redux-actions';
import actions from '../actions/navigation';

export default handleActions(
  {
    [actions.goToRskjNodes]: (state, action) => {
        let releases = {
            releases: [
                {
                    name: 'release1'
                },
                {
                    name: 'release2'
                }
            ]
        }
      return { ...state, ...releases };
    },
  },
  {},
);
