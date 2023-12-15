import { ExerciseContext } from "../../../lib/Exercise.js";
import { skipExercise } from "../../../lib/skipExercise.js";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const a = await createPromise("a");
    const b = await createPromise("b");

    const aB = await Promise.all([a, b]);
    const c = await createPromise("c");
    const d = await createPromise("d");
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const a = createPromise("a");
    const b = createPromise("b");

    Promise.all([a, b])
      .then(() => {
        createPromise("c");
      })
      .then(() => {
        createPromise("d");
      });
  };

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: skipExercise(asyncAwait),
  makeThenCatchExercise: skipExercise(thenCatch),
};
