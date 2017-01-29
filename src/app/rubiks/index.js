import angular from 'angular';

import {permutation} from './permutation';
import {permutations} from './permutations';

export const permutationsModule = 'permutations';

angular
  .module(permutationsModule, [])
  .component('ldezPermutation', permutation)
  .component('ldezPermutations', permutations);
