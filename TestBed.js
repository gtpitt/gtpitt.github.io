
Ajax.Responders.register({
	onCreate: function() {
		Element.show('busy');
	},
	onComplete: function() {
		if (0 == Ajax.activeRequestCount) {
			Element.hide('busy');
		}
	}
});

var timer;

