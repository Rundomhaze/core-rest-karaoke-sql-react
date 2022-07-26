const React = require('react');

module.exports = function Header() {
  return (
    <>
      <header role="banner" className="header">
        <a className="title" href="/">Karaoke</a>
        <a href="/new-entry-form" className="signup button">Sign up to Karaoke</a>
      </header>
    </>
  )
}
