//DEFAULT EXPORT

const Book = (props) => {
  const { img, title, author, getBook, id, index } = props
  // console.log(props);
  // const getSingleBook = () => {
  //   getBook(id)
  // }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      {/* <button onClick={getSingleBook}>display title</button> */}
      <h4>{author}</h4>
      <span className="number">{`# ${index + 1}`}</span>
      {/* just to make it look good we have added # */}
      {/* alternative method is:*/}
      {/* <span className="number">#{index + 1}</span> */}
    </article>
  )
}

export default Book;
