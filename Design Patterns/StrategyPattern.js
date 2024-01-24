/*Strategy pattern defines a family of algorithms, encapsulates each one and makes them interchangable
Strategy lets the alogrithm vary independenty from Client that uses it */

/*Principles
1. Identify aspects of your application that vary and separate them from what stays the same
2. Program to an interface, not an implementation
3. Favor composition over inheritance(favor has-a over is-a)
*/

var Shipping = function () {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package) {
        return this.company.calculate(package);
    }
};

var UPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

var USPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$39.40";
    }
};

var Fedex = function () {
    this.calculate = function (package) {
        // calculations...
        return "$43.20";
    }
};

function run() {

    var package = { from: "76712", to: "10012", weigth: "lkg" };

    // the 3 strategies

    var ups = new UPS();
    var usps = new USPS();
    var fedex = new Fedex();

    var shipping = new Shipping();

    shipping.setStrategy(ups);
    console.log("UPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(usps);
    console.log("USPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(fedex);
    console.log("Fedex Strategy: " + shipping.calculate(package));
}


run();

