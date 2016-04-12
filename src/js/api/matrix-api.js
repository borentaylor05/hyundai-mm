var data = teleTechGlobalData;

export default {
  getYears: function () {
    return Object.keys(data.cars).reverse();
  },
  getCarsByYear: function (year) {
    return data.cars[year];
  }
}