import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './client.html';
/**
 * Templates
 */
if (Meteor.isClient) {


    DDPConnection = (Meteor.isClient) ? DDP.connect("http://localhost:3000/") : {};



    Meteor.startup(() => {

        __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL="http://localhost:3000"


    });





    Meteor.connection = DDPConnection;
    Meteor.users = new Mongo.Collection('users');
    Meteor.connection.subscribe('users');

// And then you subscribe like this:
    DDPConnection.subscribe("messages");



    Template.messages.helpers({
        messages: function() {
            return Messages.find({}, { sort: { time: -1}});
        }
    });








    Template.input.events = {
        'keydown input#message' : function (event) {

            if (event.which == 13) { // 13 is the enter key event
                if (Meteor.user)
                    var name = Meteor.user().profile.name;
                else
                    var name = 'Anonymous';
                var message = document.getElementById('message');
                if (message.value != '') {
                    Messages.insert({
                        name: name,
                        message: message.value,
                        time: Date.now(),
                    });

                    document.getElementById('message').value = '';
                    message.value = '';
                }
            }
        }
    }



    Template.body.rendered = function() {

        Blaze.render(Template.bamooChat,   document.getElementById('bamooChat'))

    }

}


