angular.module('libraryApp')
    .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject = ['$routeParams', '$location', '$http'];

function BooksShowController($routeParams, $location, $http) {
    var vm = this,
    bookId = $routeParams.id,
    url = 'https://super-crud.herokuapp.com/books/';
    vm.book = [];
    $http({
      method: 'GET',
      url: url + bookId,
    }).then(bookSuccess, handleErr);
    vm.deleteBook = function(book){
    $http({
      method: 'DELETE',
      url : url + bookId
    }).then(deleteBookSuccess, handleErr);
  }
  vm.updateBook = function(book){
    console.log(book);
    $http({
      method: 'PUT',
      url: url + bookId,
      data: book
    }).then(editSuccess, handleErr);
  }
function bookSuccess(res){
  vm.book = res.data;
}
    // delete book success
    function deleteBookSuccess(res){
      console.log(res);
      $location.path('/');
    }
    function editSuccess(res){
      console.log(res)
      vm.book = res.data;
      $location.path('/')
    }
    function handleErr(err){
      console.log('err');
    }
};
