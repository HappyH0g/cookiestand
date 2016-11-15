'use strict';

function CookieStore(storeName, minCust, maxCust, avgCookiesSold) {
  this.name = storeName;
  this.minCust = minCust;
  this. maxCust = maxCust;
  this.avgCookiesSold = avgCookiesSold;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.totalCookies = [];
  this.totalSales = [];
}

var pikeCookieStore = new CookieStore('1st and Pike', 23, 65, 6.3);

CookieStore.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this. minCust);
};
//console.log(pikeCookieStore.custPerHour());
CookieStore.prototype.perHourBought = function() {
  for (var i = 0; i < this.hours.length; i++) {
    this.totalCookies.push(Math.floor(this.custPerHour() * this.avgCookiesSold));
  }
  console.log('perHourBought', pikeCookieStore.totalCookies);
};

CookieStore.prototype.renderHeaderRow = function() {
  var blankTableHeader = document.createElement('th');
  var storeTable = document.getElementById('table_area');
  var tableRow = document.createElement('tr');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < this.hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = this.hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }
  totalTableHeader.textContent = ('Total');
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
};

CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('table_area');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('th');
  var hourlyTableData;

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.totalCookies.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.totalCookies[i];
    tableRow.appendChild(hourlyTableData);
  }
  totalTableData.textcontent = 100;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};
console.log(pikeCookieStore.perHourBought());
pikeCookieStore.renderHeaderRow();
pikeCookieStore.toHtml();

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
