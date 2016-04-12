import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  selectYear(year) {
    dispatch({
      actionType: AppConstants.MATRIX.SELECT_YEAR,
      year: year
    })
  },
  selectCar(car) {
    dispatch({
      actionType: AppConstants.MATRIX.SELECT_CAR,
      car: car
    })
  }
}