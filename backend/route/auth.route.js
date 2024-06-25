<<<<<<< HEAD
import express from 'express';
import { Login, Logout, Me } from '../controller/Auth.controller.js';

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;
=======
import express from 'express';
import { Login, Logout, Me } from '../controller/Auth.controller.js';

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
