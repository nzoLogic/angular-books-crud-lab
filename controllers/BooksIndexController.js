angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests
BooksIndexController.$inject = ['$http'];

function BooksIndexController($http){
  var vm = this,
      url = 'https://super-crud.herokuapp.com/books';
  vm.books;
  vm.show = function(){
    var id = book._id;
  }
   $http({
    method: 'GET',
    url: url,
  }).then(bookSuccess, handleErr);
  ///book success
  function bookSuccess(res){
    vm.books = res.data.books;
    console.log(res.data.books);
  }

  //handle error
  function handleErr(err){
    console.log(err);
  }
}
