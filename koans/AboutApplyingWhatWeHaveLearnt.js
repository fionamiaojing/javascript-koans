var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      //Need revisti
      productsICanEat = products.filter(x => x.containsNuts === false && x.ingredients.includes("mushrooms") === false);

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = _.range(1000).filter(num => num % 3 == 0 || num % 5 == 0).reduce((x, y) => x + y);    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _(products).chain().map(dic => dic.ingredients).flatten().forEach(function(ingredient) {
      ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
    });

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {
    var compositeNumber = 100;

    var largestPrime = function(number) {
      var largestPF = 0;
      for (var i = 2; i < number; i++) {
        if (number % i == 0 && isPrime(i)) {
          largestPF = Math.max(largestPF, i);
        }
      }
      console.log(largestPF);
      return largestPF;
    };

    var isPrime = function(item) {
      for (var i = 2; i <= Math.sqrt(item); i++) {
        if (item % i == 0 && item !== 2) {
          return false
        };
      };
      return item >= 2 && true;
    };

    expect(largestPrime(compositeNumber)).toBe(5);

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    var num1 = 222;
    var num2 = 444;

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    // var numerate = _.range(1, 21);
    //
    // var gcd = function(x, y) {
    //   while (y > 0) {
    //     x, y = y, x % y
    //   };
    //   return x;
    // };
    //
    // var lcm = numerate.shift();
    // for (var i = 0; i < numerate.length; i++) {
    //   lcm = lcm * numerate[i] / gcd(lcm, numerate[i]);
    // };
    //
    // // var lcm = numerate.reduce((acc, cur) => acc * cur / gcd(acc, cur));
    //
    // expect(lcm).toBe(232792560);


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    var numbers = [1,2,3,4,5];

    var diff = numbers.reduce((acc, cur) => acc + Math.pow(cur, 2), 0) - Math.pow(numbers.reduce((acc, cur) => acc + cur), 2);

    expect(diff).toBe(-170);


  });

  it("should find the 10001st prime", function () {
    var count = 0;

    var isPrime = function(item) {
      for (var i = 2; i <= Math.sqrt(item); i++) {
        if (item % i == 0 && item !== 2) {
          return false
        };
      };
      return item >= 2 && true;
    };

    var number = 0;
    while (count < 10001) {
      number++
      if (isPrime(number)) {
        count++;
      };
    };

    expect(number).toBe(104743);

  });

});
