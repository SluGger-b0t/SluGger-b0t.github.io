import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg"
//     alt="Happy Place"
//   />
// )

//-----------------------------------------------------------------------------------------------

//JSX - CSS(inline styles)

// const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>Emily Henry</h4>

//but if we add same attributes in CSS folder with different values it won't change it will always follow inline CSS first
//external libraries use inline css, so if you want to make some changes, reference the library docs and elements tab

//alternate option

// const Title = () => {
//     const inlineHeadingStyles = {
//         margintop: '1rem',
//         fontsize: '1rem'
//     }
//   return <h2 style={inlineHeadingStyles}>Happy Place</h2>
// };

//FOR THE MOST PART, MULTIPLE APPROACHES AVAILABLE !!!
//AS LONG AS THE RESULT IS THE SAME, REALLY COMES DOWN TO PREFERENCE !!!!

//------------------------------------------------------------------------------------------------

//JSX- JS

//{} in JSX means going back to JS Land
//value inside must be an expression (return value), can't be a statement

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }

// const author = 'Emily Henry'

// const Book = () => {
//     const title = 'Happy Place';
//   return (
//     <article className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg"
//         alt="Happy Place"
//       />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//       {/* <p>{let x = 6}</p> */}
//       {/* this won't work as it is a statement */}
//       <p>{6+6}</p>
//     </article>
//   )
// }
//------------------------------------------------------------------------------------------------

//PROPS-initial setup

// const author = 'Emily Henry';
// const title = 'Happy Place';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg';

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book job = 'developer' />
//       <Book title = 'random title' number = {22} />
//     </section>
//   )
// }

// const Book = (props) => {
//   console.log(props);
//   return(
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {/* {console.log(props.job)}
//       {console.log(props.title)}
//       {console.log(props.number)} */}
//       <h4>{props.job}</h4>
//       <h4>{props.title}</h4>
//       <h4>{props.number}</h4>

//     </article>

//   )
// }

// props object, convention to call props, 'shakeAndBake' is an excellent alternative
// pass as key/value pairs
// if the prop exists it will return value, otherwise no value

// // parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// arguments
// someFunc('job', 'developer');

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book author={author} title={title} img={img} />
//       <Book title={title} img={img} />
//     </section>
//   )
// }
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------

//PROPS - Somewhat Dynamic Setup

//- setup an object
//- refactor vars to properties
//- copy/paste and rename
//- get values for second book
//- setup props

// const firstBook = {
//   title: 'Happy Place',
//   author: 'Emily Henry',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg'
// };

// const secondBook = {
//   title: 'Atomic Habits',
//   author: 'James Clear',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
// }

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//       author={firstBook.author}
//       title={firstBook.title}
//       img={firstBook.img} />

//       <Book
//       author={secondBook.author}
//       title={secondBook.title}
//       img={secondBook.img} />
//     </section>
//   )
// }
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------

//PROPS - Multiple Approaches

//destructuring in Vanilla JS
// saves time/typing
// pull out the properties
// don't need to reference object anymore

// const someObject = {
//   name: 'john',
//   job: 'developer',
//   location: 'florida',
// }

// console.log(someObject.name)
// const { name, job } = someObject
// console.log(job)

// no need for all the props.propName
// destructure inside component

// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// destructure in function parameters (in our case props)
// if you have console.log(props) - it won't be defined

// const Book = ({ img, title, author }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------

//Children Prop

// everything we render between component tags
// during the course we will mostly use it Context API
// special prop, has to be "children"
// can place anywhere in JSX

// const firstBook = {
//   title: 'Happy Place',
//   author: 'Emily Henry',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg',
// }

// const secondBook = {
//   title: 'Atomic Habits',
//   author: 'James Clear',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
// }

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
//           repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

//If we are using this approach then we have to add children with other properties but in case of PROPS it is by default
// const Book = ({ img, title, author, children }) => {
//   // rest of the logic
// }
// const Book = (props) => {
//   // const { img, title, author, children } = props
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//       {props.children}
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------

//Simple List (MAP method)

// map - creates a new array from calling a function for every array element.
// we can't render objects directly in React

// const books = [
//   {
//     img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg',
//     title: 'Happy Place',
//     author: 'Emily Henry',
//     id: 1,
//   },
//   {
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     id: 2,
//   },
// ]

// Example of MAP

// const names = ['john', 'peter', 'susan']
// //syntax of MAP in JS Nuggets
// const newNames = names.map((name) => {
//   console.log(name)
//   return <h1>{name}</h1>
// })

// function BookList() {
//   return(
//     <section className='booklist'>
//       {
//         books.map((book) =>
//         {
//           console.log(book);
//           // const { img, title, author } = book
//           return <Book img = {book.img} title = {book.title} author={book.author}/>;
//         }
//         )
//       }

//     </section>
//   )
// }

// function BookList() {
//   return (
//     <section className="booklist">
// {books.map((book) => {
//   console.log(book)
//   const { img, title, author, id } = book
//   return <Book img={img} title={title} author = {author} id={id} />
// })}
//     </section>
//   )
// }

//Or we can directly use index of an array at the place of id

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book, index) => {
//         console.log(book)
//         const { img, title, author} = book
//         return <Book book={book} key={index} />
//       })}
//     </section>
//   )
// }

//------------------------------------------------------------------------------------------------

//Pass the entire object

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book book={book} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { title, author, img, id } = props.book

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//       <h4>{id}</h4>
//     </article>
//   )
// }

//alternative - destructuring in props itself

// const Book = ({ book: { img, title, author } }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

//Using spread Operator

//Example of spread operator

// const friends = ['john', 'peter', 'anna']
// const newFriends = [...friends, 'susan']
// console.log(friends)
// console.log(newFriends)
// const someObject = {
//   name: 'john',
//   job: 'developer',
// }
// // COPY NOT A REFERENCE !!!!
// const newObject = { ...someObject, location: 'florida' }
// console.log(someObject)
// console.log(newObject)

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// const Book = ({ img, title, author }) => {
//   // rest of the code
// }

//------------------------------------------------------------------------------------------------

//EVENT HANDLER

//https://legacy.reactjs.org/docs/events.html link for syntax and lst of other events
//no need to memorize them(idea is the same)
//most common
// onClick (click events)
// onSubmit (submit form )
// onChange (input change )

// function BookList() {
//   return (
//     <section className="booklist">
//       <EventHandler/>
//       {books.map((book) => {
//         return <Book {...book} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>

//     </article>
//   )
// }

// const EventHandler = (e) =>{
//   const handleFormInput = (e) => {
//     console.log(e)
//     // e.target - element
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log('handle form input')
//   }
//   const handleButtonClick = (e) => {
//     alert('handle button click');
//   }
//   const handleFormSubmission = (e) => {
//     e.preventDefault()
//     console.log('Form Submitted');
//   }
//    return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//       <button onClick={handleButtonClick}>Click me</button>
//     </section>
//   )
// }

//alternate method
{
  /* <button type="submit" onClick={handleFormSubmission}>
  submit form
</button> */
}

//------------------------------------------------------------------------------------------------

//MIND GRENADE

// alternative approach
// pass anonymous function (in this case arrow function)
// one liner - less code

// function BookList() {
//   return (
//     <section className="booklist">
//       <EventHandler/>
//       {books.map((book) => {
//         return <Book {...book} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// const EventHandler = () => {
//   return(
//     <article>
//       <button onClick={() => console.log('Button Click Handled')}>Click Me</button>
//     </article>
//   )
// }

// const EventHandler = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={() => console.log('you clicked me')}>click me</button>
//     </section>
//   )
// }

//------------------------------------------------------------------------------------------------

//MIND GRENADE-2

// remove EventsExamples
// components are independent by default

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />
//       })}
//     </section>
//   )
// }

//if u want particular event handling then you can use this approach
// const Book = (props) => {
//   const { img, title, author } = props
//   const displayTitle = () => {
//     console.log(title)
//   }

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayTitle}>display title</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------
// Prop Drilling

// react data flow - can only pass props down
// alternatives Context API, redux, other state libraries

// function BookList()
// {
//   const someValue = 'shakeAndBake';
//   const displayValue = () => {
//     console.log(someValue);
//   }
//   return(
//     <section className='booklist'>

//     {books.map((book) => {
//       return(
//         <Book {...book} displayValue={displayValue}/>
//       )
//     })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author, displayValue } = props

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayValue}>click me</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

//------------------------------------------------------------------------------------------------

//More Complex Example

// initial setup
// create getBook function in booklist
// accepts id as an argument and finds the book
// Javascript Nuggets - Filter and Find
// pass the function down to Book Component and invoke on the button click
// in the Book Component destructure id and function
// invoke the function when user clicks the button, pass the id
// the goal : you should see the same book in the console

// const BookList = () => {
//   // const getBook = (id) => {
//   //   const book = books.find((book) => book.id === id)
//   //   console.log(book)
//   // }

//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author, getBook, id } = props
//   // console.log(props);
//   // const getSingleBook = () => {
//   //   getBook(id)
//   // }

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       {/* this is not going to work */}
//       {/* <button onClick={getSingleBook}>display title</button> */}
//       <h4>{author}</h4>
//     </article>
//   )
// }

// two fixes
// first option - setup wrapper
// second option - wrap in the anonymous arrow function

//------------------------------------------------------------------------------------------------

//IMPORT AND EXPORT STATEMENTS

// two flavors named and default exports

// - with named exports names MUST match
// - with default exports,can rename but only one per file



const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id)
  //   console.log(book)
  // }

  return (
    <div>
      <h1 className="title">Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} />
        })}
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
