/** Problem state that we have to find celibrity. And the condition to be a celibrity is that person should be known by all & he should not know anyone.
 *  Let's compare two person a & b. 
 *  1. if a knows b -----> a cannot be a celibrity
 *  2. if a does not know b -----> means b cannot be a celibrity
 *  
 *  Using above two assumption we can solve this problem in two ways. 
 *  1. Using Stack 
 *          Time Complexity - O(n)
 *          Space Complexity - O(1)
 *     Algorithm :-
 *          i) Push all persons in stack 
 *          ii) Pop two person & check if they know each other. Using above assumptions push the potential celibrity and eliminate the other.
 *          iii) Repeat above till only single person is remaining in stack
 *          iv) Potential is remaining element in the stack
 *          v) Check if potential is a celibrity by checking its row & column
 *  2. Using two pointers
 *          Time Complexity - O(n)
 *          Space complexity - O(1)
 *      Algorithm :-
 *          i) Choose two pointer one at start and one at the end. a & b
 *          ii) Check if a knows b
 *              if a knows b ---> then a++
 *                  else -----> b--
 *          iii) Repeat till a < b
 *          iv) Potential celibrity is a;
 *          v) Check if potential is a celibrity by checking its row & column
*/

const knows = (p1, p2, matrix) => matrix[p1][p2];

const findCelibrityLinearSpace = (matrix) => {
  let a = 0;
  let b = matrix.length - 1;

  while (a < b) {
    if (knows(a, b, matrix)) {
      a++;
    } else {
      b--;
    }
  }

  let potential = a;
  // Verify if potential is celibrity
  for (let i = 0; i < matrix.length; i++) {
    if (i !== potential) {
      if (knows(potential, i, matrix) || !knows(i, potential, matrix)) {
        console.log("No celibrity in party");
        return null;
      }
    }
  }
  console.log(`${potential} is our celibrity boys!!`);
  return potential;
};

const findCelibrityUsingStack = (matrix) => {
  let stack = [];
  for (let i = 0; i < matrix.length; i++) {
    stack.push(i);
  }

  while (stack.length > 1) {
    let p1 = stack.pop();
    let p2 = stack.pop();
    if (knows(p1, p2, matrix)) {
      stack.push(p2);
    } else {
      stack.push(p1);
    }
  }
  let potential = stack.pop();

  // Verify if potential is celibrity
  for (let i = 0; i < matrix.length; i++) {
    if (i !== potential) {
      if (knows(potential, i, matrix) || !knows(i, potential, matrix)) {
        console.log("No celibrity in party");
        return null;
      }
    }
  }
  console.log(`${potential} is our celibrity boys!!`);
  return potential;
};

console.log(
  findCelibrityLinearSpace([
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ])
);
