var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

var _ = require('underscore');

var todos = [];
var todoNextId = 1;


app.get('/', function (req, res) {
	res.send("Todo API Root");
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoId});

	if (matchedTodo === undefined) res.status(404).send();
	else res.json(matchedTodo);
});

app.post('/todos', function  (req, res) {
	var body = _.pick(req.body, 'description', 'completed');

	if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
		return res.status(404).send();
	}

	body.description = body.description.trim();
	body.id = todoNextId;
	todos.push(body);
	res.json(todos);
	todoNextId++;
});

app.listen(PORT, function() {
	console.log("Express listening on port " + PORT + "!");
})