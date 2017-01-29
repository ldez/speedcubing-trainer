class PermutationsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/rubiks/f2l.json')
      .then(response => {
        this.permutations = response.data;
      });
    this.criterias = {
      whiteFace: {
        layer: 'U',
        orientation: 'U'
      },
      edge: {
        layer: 'U',
        position: 'L',
        sameColor: true
      }
    };

    const vm = this;
    this.byCriteria = function (permutation) {
      return (vm.criterias.whiteFace.layer === 'all' ||
       permutation.white_face.layer === vm.criterias.whiteFace.layer) &&
      (vm.criterias.whiteFace.orientation === 'all' ||
       permutation.white_face.orientation === vm.criterias.whiteFace.orientation) &&
      (vm.criterias.edge.layer === 'all' ||
       permutation.edge.layer === vm.criterias.edge.layer) &&
      (vm.criterias.edge.position === 'all' ||
       permutation.edge.position === vm.criterias.edge.position);

      // return permutation.white_face.layer === vm.criterias.whiteFace.layer &&
      //   permutation.white_face.orientation === vm.criterias.whiteFace.orientation &&
      //   permutation.edge.layer === vm.criterias.edge.layer &&
      //   permutation.edge.position === vm.criterias.edge.position;
    };
  }
}

export const permutations = {
  template: require('./permutations.html'),
  controller: PermutationsController
};
