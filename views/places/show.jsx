const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className= "inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3> 
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    rating = (
      <h3>
      {Math.round(averageRating)} stars
      </h3>
    )
    }
  }
  {
    (
  
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      }
    

    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img className='images1' src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit </a>     
        
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">Delete </button>
</form> 


          </main>
        </Def>
    )


module.exports = show


    