import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {




});





// Listen to incoming HTTP requests, can only be used on the server
WebApp.connectHandlers.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

// Listen to incoming HTTP requests, can only be used on the server
WebApp.rawConnectHandlers.use("/sockjs", function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

