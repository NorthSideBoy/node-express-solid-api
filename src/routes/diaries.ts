import express from 'express';
import * as diaryControllers from '../controllers/diaries';
import toNewDiaryEntry from '../utils/diary';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryControllers.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryControllers.findById(+req.params.id); //parsing "req.params.id" a number with "+" operator because req.params is "string" type and "findById" method waiting for a "number" parameter
  (diary != null) ? res.send(diary) : res.sendStatus(404);
});

router.post('/add', (req, res) => {
  try {
    const NewDiaryEntry = toNewDiaryEntry(req.body);
    const addedDiaryEntry = diaryControllers.addDiary(NewDiaryEntry);
    res.json(addedDiaryEntry);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
  }
});

export default router;