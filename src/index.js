import * as core from './arrays/core.js';
import * as adv from './arrays/advanced.js';
import * as date from './date/index.js';
import { chain } from './arrays/chain.js';

export const SUT_ = {
  ...core,
  ...adv,
  ...date,
  chain,
};
