import { option } from 'fp-ts';
import { myFn } from './playground';

describe('playground', () => {
  it('missing', async () => {
    expect(myFn(option.none, option.none)).toMatchObject({
      key: 'missing',
    });
  });
  it('missing', async () => {
    expect(myFn(option.some(4), option.none)).toMatchObject({
      key: 'missing',
    });
  });
  it('warning', async () => {
    expect(myFn(option.some(21), option.none)).toMatchObject({
      key: 'warning',
      value: 21,
    });
  });
  it('warning', async () => {
    expect(myFn(option.some(1334), option.some(42))).toMatchObject({
      key: 'warning',
      value: 42,
    });
  });
  it('valid', async () => {
    expect(myFn(option.some(4), option.none)).toMatchObject({
      key: 'valid',
      value: 2,
    });
  });
  it('valid', async () => {
    expect(myFn(option.some(4), option.some(2))).toMatchObject({
      key: 'valid',
      value: 2,
    });
  });
  it('valid', async () => {
    expect(myFn(option.some(6), option.some(2))).toMatchObject({
      key: 'valid',
      value: 2,
    });
  });
  it('valid', async () => {
    expect(myFn(option.some(21), option.some(2))).toMatchObject({
      key: 'valid',
      value: 2,
    });
  });
});
