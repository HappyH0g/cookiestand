'use strict';

var firstCookieStoreLocation = {
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

    for (var i = 0; i < this.hours.length; i++) {
      li = document.createElement('li');
      li.textContent = (this.hours[i] + ': ' + this.totalDailyCookies[i] + ' cookies');
      ul.appendChild(li);
    }
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
    var total = [];chj
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
