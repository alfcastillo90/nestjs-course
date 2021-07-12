import {findAllCourses, findLessonsForCourse} from './db-data';

// tslint:disable-next-line:no-var-requires
const MongoClient = require('mongodb').MongoClient;
// tslint:disable-next-line:no-var-requires
const ObjectId = require('mongodb').ObjectID;
/*****************************************************************************************************
*
*
* IMPORTANT!!!
*
* MongoDB Connection URL - create your own url with the right cluster name, username, password and database name
*
* Format: mongodb+srv://username:password@clustername
*
* Example (don't use this as you don't have write access):
*
* mongodb+srv://nestjs:ZeEjdswOWHwoenQO@cluster0-dbucq.gcp.mongodb.net
*
*****************************************************************************************************/

const MONGODB_CONNECTION_URL = 'mongodb+srv://nestjs-admin:mzLBd4bhikJG4v8r@cluster0.z0tzn.mongodb.net/';

// Database Name
const dbName = 'nestjs-course';

// Create a new MongoClient
const client = new MongoClient(MONGODB_CONNECTION_URL);

// Use connect method to connect to the Server
// tslint:disable-next-line:no-shadowed-variable
client.connect(async (err, client) => {
  try {
    if (err) {
      process.exit();
    }

    const db = client.db(dbName);

    const courses = findAllCourses();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < courses.length; i++) {

      const course: any = courses[i];

      const newCourse: any = {...course};
      delete newCourse.id;

      const result = await db.collection('courses').insertOne(newCourse);

      const courseId = result.insertedId;

      const lessons = findLessonsForCourse(course.id);

      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < lessons.length; j++) {

        const lesson = lessons[j];

        const newLesson: any = {...lesson};
        delete newLesson.id;
        delete newLesson.courseId;
        newLesson.course = new ObjectId(courseId);
        await db.collection('lessons').insertOne(newLesson);
      }
    }
    await db.collection('courses').createIndex( { url: 1 }, { unique: true } );

    client.close();
    process.exit();

  }  catch (error) {
    client.close();
    process.exit();
  }

});

process.stdin.resume();
