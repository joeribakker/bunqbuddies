define([
	'backbone',
	'moment'
], function (Backbone, moment) {

	var User = Backbone.Model.extend({

		defaults: {
			id: 			new String(),
			name: 		new String(),
			lastseen: null
		},

		initialize: function (options) {
			// Only set lastseen if it has been defined in the options and appears to be valid
			if (options !== undefined) {
				if (options.lastseen && moment(options.lastseen).isValid()) {
					this.set("lastseen", moment(options.lastseen + " +0000", "YYYY-MM-DD HH:mm:ss Z"));
				}
			}
		}
	});

	return User;
});