import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 my-20'>
            <div className=''>
                <h2 className='font-bold text-2xl'>How will you improve the performance of a React Application?</h2>
                <p>1. Keeping component state local where necessary</p>
                <p>2. Memoizing React components to prevent unnecessary re-renders</p>
                <p>3. Code-splitting in React using dynamic <kbd class="kbd">import()</kbd></p>
                <p>4. Windowing or list virtualization in React applications</p>
                <p>5. Lazy loading images in React</p>

                <h2 className='font-bold text-2xl mt-5'>What are the different ways to manage a state in a React application?</h2>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <p>1. Local state</p>
                <p>2. Global state</p>
                <p>3. Server state</p>
                <p>4. URL state</p>

                <h2 className='font-bold text-2xl mt-5'>How does prototypical inheritance work?</h2>

                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>

                <h2 className='font-bold text-2xl mt-5'>Why you do not set the state directly in React. For example, if you have <kbd class="kbd">const [products, setProducts] = useState([])</kbd>. Why you do not set <kbd class="kbd">products = [...]</kbd> instead, you use the setProducts</h2>
                <p>In React, every state update causes the component being updated to re-render. Because re-rendering is an expensive operation, making state updates synchronously can cause serious performance issues, for example, increasing load times or causing your application to crash. By batching state updates, React avoids unnecessary re-renders, boosting performance overall.</p>
                <h2 className='font-bold text-2xl mt-5'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>The<kbd class="kbd">arr.find()</kbd> method in Javascript is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever first element satisfies the condition is going to print. This function will not work function having the empty array elements, also does not change the original array.</p>

                <h2 className='font-bold text-2xl mt-5'> What is a unit test? Why should write unit tests?</h2>
                <p>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p>
                <p>The goal of unit testing is to isolate each part of the program and show that the individual parts are correct.[1] A unit test provides a strict, written contract that the piece of code must satisfy. As a result, it affords several benefits. </p>

            </div>

        </div>
    );
};

export default Blog;