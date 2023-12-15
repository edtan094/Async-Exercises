import { ExerciseContext } from "../../../lib/Exercise.js";
import { skipExercise } from "../../../lib/skipExercise.js";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const first = async () => {
      const a = await createPromise("a");
      const b = await createPromise("b");
      const c = await createPromise("c");
    };
    const second = async () => {
      const a = await createPromise("d");
      const b = await createPromise("e");
      const c = await createPromise("f");
    };
    Promise.all([first(), second()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const first = createPromise("a")
      .then(() => {
        createPromise("b");
      })
      .then(() => {
        createPromise("c");
      });
    const second = createPromise("d")
      .then(() => {
        createPromise("e");
      })
      .then(() => {
        createPromise("f");
      });

    Promise.all([first, second]);
  };

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: skipExercise(asyncAwait),
  makeThenCatchExercise: skipExercise(thenCatch),
};
