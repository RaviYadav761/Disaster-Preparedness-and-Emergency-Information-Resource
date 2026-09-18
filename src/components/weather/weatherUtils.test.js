import test from 'node:test';
import assert from 'node:assert/strict';
import { getNearestHourlyIndex } from './weatherUtils.js';

test('getNearestHourlyIndex picks the closest hourly forecast slot to the current weather time', () => {
  const times = [
    '2026-09-07T12:00:00',
    '2026-09-07T13:00:00',
    '2026-09-07T14:00:00',
    '2026-09-07T15:00:00',
  ];

  assert.equal(getNearestHourlyIndex(times, '2026-09-07T13:45:00'), 2);
  assert.equal(getNearestHourlyIndex(times, '2026-09-07T12:30:00'), 0);
});
