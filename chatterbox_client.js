// define some mock data
var conversations = [
	{
		people: ['bob', 'tim'],
		_id: '123'
	},
	{
		people: ['mary', 'jane'],
		_id: '456'
	},
	{
		people: ['mary', 'jane'],
		_id: '789'
	}


]

Template.conversations.helpers({
	conversations: function () {
		return conversations
	}
});