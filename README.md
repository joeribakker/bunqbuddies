#	BunqBuddies
BunqBuddies is a chat app created as an exercise for frontend development. A live implementation can be found at [bunq.joeri.me](http://bunq.joeri.me).

## Features

### As of version 1.0
* 	When the app loads, you are logged as one of 5 test users.
* 	Send and receive messages in your conversations.
* 	Start personal or group conversations with any of your contacts.
* 	Messages and conversations are updated every 0.5 seconds or so, depending on server latency. Conversations will display the number of unread messages.
* 	Upon selecting a conversation, the latest 20 messages are shown. A batch of older messages is loaded when, while scrolling through, you reach the top of the message list.
* 	The UI is fully responsive, allowing a great user experience on desktop, tablet and mobile phone.

### Planned features

*   1.1 and on
    * Browser notifications and sounds
    * Sorting of conversation items
    * Unique colors for each user's name

*   2.0
    * User accounts
    * New API

## Libraries and frameworks
BunqBuddies uses a few different libraries and frameworks to introduce a modular and more structured way of writing code, not reinvent the wheel and keep the focus on solving the problems specific to building a chat app.

* 	[RequireJS][] is a modular script loader that enforces an AMD workflow. This helps keep things structured and makes dependency loading very straightforward.
* 	[Backbone.js][] is used as a framework for MV* development.
* 	[Underscore.js][] is a javascript toolbox that not only introduces numerous useful helpers, but also provides a templating engine and works in close conjunction with Backbone.js.
* 	[Moment.js][] helps parsing and formatting dates and incorperating the set locale and timezone.
* 	[Compass][] is a [Sass][]-based CSS framework. It features nesting, cross-browser compatability options and ways to cleanly structure CSS project files.

## Build your own?
This project uses [Bower][] to load packages and keep them up to date. After you clone this repository, you'll need to run a `bower install` on the project folder to fetch all the used packages.

[Bower]: http://bower.io/
[RequireJS]: http://requirejs.org/
[Backbone.js]: http://backbonejs.org/
[Underscore.js]: http://underscorejs.org/
[Moment.js]: http://momentjs.com/
[Compass]: http://compass-style.org/
[Sass]: http://sass-lang.com/