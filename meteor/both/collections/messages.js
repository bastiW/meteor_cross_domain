
DDPConnection = (Meteor.isClient) ? DDP.connect("http://localhost:3000/") : {};

Messages = new Meteor.Collection('messages', DDPConnection);
