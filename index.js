const app = "I don't do much.";

 var kittens = ["Milo", "Otis", "Garfield"];
 
 var destructivelyAppendKitten = ["Milo", "Otis", "Garfield"];
 destructivelyAppendKitten.push("Ralph");
 destructivelyAppendKitten;

 var destructivelyPrependKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyPrependKitten.unshift("Bob");
 destructivelyPrependKitten;
 
 var destructivelyPrependKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyPrependKitten(kittens, "Bob");
 destructivelyPrependKitten;
 
 
var destructivelyRemoveLastKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyRemoveLastKitten.pop();
  destructivelyRemoveLastKitten;

var destructivelyRemoveFirstKitten = ["Milo", "Otis", "Garfield"];
 destructivelyRemoveLastKitten.pop();
  destructivelyRemoveLastKitten;
  

 var appendKitten = ["Broom", ...kittens];
 appendKitten;
 
 
 var prependKitten = [kittens, "Arnold"];
  prependKitten;

  var removeLastKitten = [kittens, "Garfield"];
  removeLastKitten;

 var destructivelyRemoveLastKitten= ["Milo", "Otis"];
      destructivelyRemoveLastKitten.pop();

      
  var destructivelyRemoveFirstKitten = ["Milo", "Otis"];
      destructivelyRemoveFirstKitten.shift();

     

  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })


removeLastKitten.slice(0, lastIndexNum);
  removeLastKitten;

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})

   

  