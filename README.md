# Green Earth



---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---



#### 1) What is the difference between var, let, and const?
var, let, and const are JavaScript keywords for variable declaration,  var has function scope, can be redeclared/reassigned; let has block scope, can be reassigned but not redeclared and const also has block scope, is for constants (cannot be reassigned or redeclared).

#### 2) What is the difference between map(), forEach(), and filter()? 
The primary difference between map(), forEach(), and filter() in JavaScript lies in their purpose and return value.
forEach() is for iteration and side effects; it does not return a new array (it returns undefined).
map() is for transformation; it returns a new array of the same length, where each element is the result of applying a function to the original element.
filter() is for selection; it returns a new array containing only the elements that pass a specific condition .
#### 3) What are arrow functions in ES6?
Arrow functions is a more concise syntax for writing function expressions, primarily using the => operator.

#### 4) How does destructuring assignment work in ES6?
ES6 destructuring assignment lets unpack values from arrays or properties from objects into distinct variables using concise syntax, matching the structure of the data on the left side of the assignment. 
#### 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals use backticks (`) instead of single or double quotes, to support for expression interpolation and multi-line strings. Template literals provide a cleaner, more readable syntax, especially when dealing with complex strings or multiple variables.
## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.




5) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

6) Total Calculation 
    Calculate total price of trees in cart.

7) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

9) Loading Spinner
    Show spinner while data is loading.

10) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Tailwind / DaisyUI)

        JavaScript 


