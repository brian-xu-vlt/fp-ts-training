import { option } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { Option } from 'fp-ts/lib/Option';

type MyFnResult = {
  key: 'missing' | 'warning' | 'valid';
  value?: number;
};

const isLessThanFive = (n: number) => n < 5;

export const myFn = (
  managed: Option<number>,
  active: Option<number>,
): MyFnResult => {
  if (option.isNone(managed) && option.isNone(active)) {
    return { key: 'missing' };
  }

  return pipe();
};
