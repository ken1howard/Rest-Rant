const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div>
      <img src="https://www.bestwesternsiestakey.com/wp-content/uploads/2021/08/sunset-scaled-735x0-c-default.jpg" alt="Ocean Sunset" />
      <div>
        Photo by <a href="https://unsplash.com/@jae462">Jay Antol</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )
}

module.exports = home
