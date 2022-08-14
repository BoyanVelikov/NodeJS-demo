function pubSub() {
    const subscribers = {};

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        }
        subscribers[eventName].forEach((callback) =>
            callback(data));
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
        const index = subscribers[eventName].length - 1;
        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1);
            }
        };
    }
    const unsubscribe = subscribe('food', function(data) {
        console.log(`Received some food: ${data}`);
    });
    unsubscribe();
    return {
        publish,
        subscribe
    };
}