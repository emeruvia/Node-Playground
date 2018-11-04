const Joi = require('joi'); // use uppercase since joi is a class
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'}  
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

// first parameter in get is the route where the data is being sent
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// parameters
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,  //id should be assigned by database
    name: req.body.name
  };
  courses.push(course); // pushes course to courses
  res.send(course); // need to return course object to client
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course does not exist');
  
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');  
  
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
  // checks if the course id is the same as the one in the parameter
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // 404 error
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course);
});

// To create a port in windows `set PORT=3000`
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));