import express from 'express';
import * as diaryControllers from '../controllers/diaries';
import type { newDiaryEntry } from '../types.t';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryControllers.getEntriesWithoutSensitiveInfo());
});


router.get('/:id', (req, res) => {
  const diary = diaryControllers.findById(+req.params.id); //parsing "req.params.id" a number with "+" operator because req.params is "string" type and "findById" method waiting for a "number" parameter
  (diary != null) ? res.send(diary) : res.sendStatus(404);
});

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body as newDiaryEntry;
  const newDiary = diaryControllers.addEntry(date, weather, visibility, comment);

  res.json(newDiary);
});

export default router;