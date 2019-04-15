const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/courses', isAuth,feedController.getCourses);
router.post('/course/create',isAuth, feedController.createCourse);
router.post('/takecourse/:id', isAuth, feedController.takeCourse);
router.post('/mycourses', isAuth, feedController.myCourses);
router.post('/deletecourse/:id', isAuth, feedController.deleteCourse);
router.post('/editcourse/:id', isAuth, feedController.editCourse);
router.get('/details/:id', isAuth, feedController.detailsCourse);

module.exports = router;