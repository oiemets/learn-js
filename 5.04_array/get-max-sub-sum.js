/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций. */


// All tests passed!

function getMaxSubSum(numbers) {
    if (!numbers.length) {
      return 0;
    }
      
    let sum = 0;
    const subArray = [];
    for (let number of numbers) {
      sum += number
      if (sum > 0) {
         subArray.push(sum);
      } else if (number < 0) {
          sum = 0;
      };  
    };
  
    if (!subArray.length) {
      return 0;
    }
    
    return Math.max(...subArray)
  };

  