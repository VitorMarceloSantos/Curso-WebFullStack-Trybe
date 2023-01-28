import { Router } from 'express';
import separateMacthes from '../middlewares/separeteMatches';

const router = Router();

router.get('/', separateMacthes);

export default router;
