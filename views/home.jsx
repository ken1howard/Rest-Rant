const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div>
      <img src="/public/CSS/images/Beach-Sunset.jpg" alt="Ocean Sunset" />
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
