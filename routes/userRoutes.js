import express from 'express';
import { getallUsers,createUser} from '../controller/userController.js';

 const route = express.Router();

 route.route('/').get(getallUsers).post(createUser);



 export const UserRoute =route;