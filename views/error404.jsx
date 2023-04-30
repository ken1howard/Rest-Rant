const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="https://i.pinimg.com/originals/90/bd/ea/90bdeaab5f504b8524cda0fe306c7127.jpg" alt="Spongebob Face" />
          </main>
      </Def>
    )
  }
  

module.exports = error404
