import { Router } from 'express';
import matchesController from '../controllers/matchesController';

const router = Router();

router.get('/', matchesController.searchMatches);

export default router;
