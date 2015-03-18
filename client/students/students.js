var students = Postgres.subscribe('students');

Template.students.helpers({
	students : function() {
		return students.fetch();
	}
});

Template.students.events({
	"submit .add-student" : function() {
		var $input = $('[name="name"]');

		Meteor.call("add-student", $input.val());
		$input.val('');

		return false;
	}
});
