'use strict';

function CookieStore(storeName, minCust, maxCust, avgCookiesSold) {
  this.name = storeName;
  this.minCust = minCust;
  this. maxCust = maxCust;
  this.avgCookiesSold = avgCookiesSold;
  this.hours = 15;
  this.totalCookies = [];
  this.dailyTotalSum = [];
}

CookieStore.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this. minCust);
};
//console.log(pikeCookieStore.custPerHour());
CookieStore.prototype.perHourBought = function() {
  for (var i = 0; i < this.hours; i++) {
    this.totalCookies.push(Math.floor(this.custPerHour() * this.avgCookiesSold));
  }
};

CookieStore.prototype.dailyTotalCount = function() {
  for (var i = 0; i < this.totalCookies.length; i++) {
    var total = 0;
    total += this.totalCookies[i];
    this.dailyTotalSum.push(total[i]);

  }
};

CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('table_area');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('th');
  var hourlyTableData;
  var dailyTotalData;

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.totalCookies.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.totalCookies[i];
    tableRow.appendChild(hourlyTableData);
  }

  for (var j = 0; j < this.totalCookies.length; j++) {
    dailyTotalData = document.createElement('td');
    dailyTotalData.textContent = this.dailyTotalSum[j];
    tableRow.appendChild(dailyTotalData);
  }
  totalTableData.textcontent = 0;
  tableRow.appendChild(totalTableData);
  console.log(tableRow);
  storeTable.appendChild(tableRow);
};
var pikeLocation = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTacLocation = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenterLocation = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHillLocation = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alkiLocation = new CookieStore('Alki', 2, 16, 4.6);


function renderHeaderRow() {
  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var blankTableHeader = document.createElement('th');
  var storeTable = document.getElementById('table_area');
  var tableRow = document.createElement('tr');
  var dailyTotalHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }
  dailyTotalHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(dailyTotalHeader);
  storeTable.appendChild(tableRow);

};

function renderFooterRow() {
  var blankTableFooter = document.createElement('tr');
  var storeTable = document.getElementById('table_area');
  var tableRow = document.createElement('tr');

  tableRow.appendChild(blankTableFooter);
  //totalTableFooter.textContent = ('Total');
  //tableRow.appendChild(totalTableFooter);
  storeTable.appendChild(tableRow);

}
renderHeaderRow();

pikeLocation.perHourBought();
pikeLocation.toHtml();
seaTacLocation.perHourBought();
seaTacLocation.toHtml();
seattleCenterLocation.perHourBought();
seattleCenterLocation.toHtml();
capitolHillLocation.perHourBought();
capitolHillLocation.toHtml();
alkiLocation.perHourBought();
alkiLocation.toHtml();

renderFooterRow();

/*var firstCookieStoreLocation = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookieSale: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalDailyCookies: [],
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchasedPerHour: function() {
    var total = [];
    for (var i = 0; i < this.hours.length; i++) {
      total[i] = (Math.floor(this.custPerHour() * this.averageCookieSale));
    }
    this.totalDailyCookies = total;
  },
  listHours: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var totalListItem = document.createElement('li');

    for (var i = 0; i < this.hours.length; i++) {
      li = document.createElement('li');
      li.textContent = (this.hours[i] + ': ' + this.totalDailyCookies[i] + ' cookies');
      ul.appendChild(li);
    }
    totalListItem.textContent = 'Total: ' + this.total;
    ul.appendChild(totalListItem);
    return ul;
  }
};
firstCookieStoreLocation.cookiesPurchasedPerHour();
var ul = firstCookieStoreLocation.listHours();
var contentArea = document.getElementById('contentarea');
contentArea.appendChild(ul);

var secondCookieStoreLocation = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookieSale: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalDailyCookies: [],

  custPerHour: function() {
      return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    }
  },
  cookiesPurchasedPerHour: function() {
    var total = [];
    for (var i = 0; i < this.hours.length; i++) {
      total [i] = (Math.floor(this.custPerHour() * this.averageCookieSale));
      this.totalDailyCookies = total;
    }
  },
  listHours: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    for (var i = 0; i < this.hours.length; i++) {
      li = document.createElement('li');
      li.textContent = (this.hours[0] + ': ' + this.totalDailyCookies[0] + ' cookies');
      ul.appendChild(li);
    }
    return ul;
  }
};
secondCookieStoreLocation.cookiesPurchasedPerHour();
ul = secondCookieStoreLocation.listHours();
contentArea = document.getElementById('contentarea');
contentArea.appendChild(ul);
*/
