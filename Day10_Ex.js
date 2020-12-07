Date.prototype.addDays = function (day) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
};

//each dates within the start date to the end date
function begetdatebetween(start_date, end_date) {
  let dateArray = [];
  let currentDate = start_date;
  while (currentDate <= end_date) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

begetdatebetween(new Date(), new Date().addDays(2)).forEach(function (date) {
  console.log(date);
});
/*
Mon Dec 07 2020 23:59:03 GMT+0530 (India Standard Time)
VM143:2 Tue Dec 08 2020 23:59:03 GMT+0530 (India Standard Time)
VM143:2 Wed Dec 09 2020 23:59:03 GMT+0530 (India Standard Time)
undefined
*/
