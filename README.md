# Intro to JS Array Methods 
![ber](https://user-images.githubusercontent.com/29741570/153448974-41066273-2650-4c81-906c-ad8fc4a5a3c9.png)

In this repo, we will be working through increasing knowledge in JS array methods by refactoring a Black Excellence Reference app.

<a target="_blank" href="https://blackexcellenceref.netlify.app/">View Demo App</a>

## What are JS Array Methods? 👀
Array methods are functions that are built-in to JavaScript that can be applied to arrays.

Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.

It is important to FIRST identify the problem you are trying to solve and then seeing if there is an array method that can help you solve that problem.

**You can do a google search for `JS array methods` to find what is available to you.**

## 💻 What we finna do?
We are about to learn about a few array methods and then you are going to try some yourself. 

As we code along, make sure to take notes in the issue tickets that were created when you copied the repo so that you have something to come back to and reference at a later time.

I will **NOT** be reviewing all the methods, and I will not go deeply into the algorithms. That is up to you and your learning as a software engineer. 

## Let's look at what we got
You will notice in the code, there are several directories with elements that make up the app. You are free to review those AFTER our class session, but they are not the focus of this learning.

For this exercise, we will be working in the `scripts` directory.

### Entity
| Attribute   | Type        |
| ----------- | ----------- |
| id          | number      |
| title       | string      |
| author      | string      |
| price       | number      |
| image       | string      |
| youTubeId   | string      |
| type        | string      |
| description | string      |
| externalLink| string      |
| inCart      | boolean     |

### Sample Data
```javascript
const referenceList = [
  {
    id: 1,
    title: "HBCU Info",
    author: "Author Name",
    price: 45.00,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f.jpg",
    youTubeId: "",
    type: "info",
    description: "Historically black colleges and universities (HBCUs) are institutions of higher education.",
    externalLink: "https://en.wikipedia.org/wiki/Historically_black_colleges_and_universities",
    inCart: false
  }
]
```

### Array methods we will cover
- `includes()` - string method
- `filter()`
- `map()`
- `forEach()`
- `reduce()`
- `findIndex()`
- `some()`
- `sort()`

## Contributors
[Dr. Teresa Vasquez (Dr T)](https://github.com/drteresavasquez)
