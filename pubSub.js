'use strict';

const events = require('events');
const eventsEmitter = new events.EventEmitter();

let eventName = 'greeting';

class Publisher {
    constructor() {

    }
    publishOurMessage() {
        let message = 'Hello World';
        eventsEmitter.emit(eventName, message);
    }
}

class Subscriber {
    constructor() {
        eventsEmitter.on(eventName, (greeting) => {
            console.log('We have a greeting:' + greeting);
        });
    }
}

const publisher = new Publisher();
const subscriber = new Subscriber();

publisher.publishOurMessage();


