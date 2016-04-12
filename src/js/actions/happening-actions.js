import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  openHappenings() {
    dispatch({
      actionType: AppConstants.HAPPENINGS.OPEN
    })
  },
  closeHappenings() {
    dispatch({
      actionType: AppConstants.HAPPENINGS.CLOSE
    })
  },
  toggleHappenings() {
    dispatch({
      actionType: AppConstants.HAPPENINGS.TOGGLE
    })
  }
}