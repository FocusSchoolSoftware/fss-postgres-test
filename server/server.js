Postgres.publish('students', function() {
	return Postgres.query("select * from students");
});

Meteor.methods({
	"add-student" : function(name) {
		Postgres.query("insert into students (name) values ($1)", [name]).fetch();
	}
});
