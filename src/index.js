'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'GetBenefit': function () {
        this.emit('BenefitHello');
    },
    'GoodbyeWorldIntent': function () {
        this.emit('SayGoodbye');
    },
    'BenefitHello': function () {
        this.emit(':tell', 'I can tell you about Clover benefits');
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello Clover!');
    },
    'SayGoodbye': function () {
        this.emit(':tell', 'Goodbye Clover!');
    }
    
};
