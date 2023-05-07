const React = require('react')
const Def = require('../default')

function show (data) {
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
}

module.exports = show

