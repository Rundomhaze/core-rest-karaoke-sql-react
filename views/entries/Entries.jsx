const React = require('react');
const Layout = require('../Layout');
const Header = require('../entries/Header')

module.exports = function Entries({ entries }) {
  return (
    <Layout>
      <Header></Header>
      <h1>Upcoming Karaoke Artists</h1>

      <main role="main">
        <ul className="entries">
          {entries.map((entry) => (
            <li className="entry" key={entry.id}>
              <span className="singer">{entry.singer}</span>
              <span className="song-title">{entry.songTitle}</span>
              <ul className="entry-links">
                <li className="entry-link"><a className="detailsBtn" href={`show-one-entry/${entry.id}`}>details</a></li>
                <li className="entry-link"><a className="editBtn" href={`edit-one-entry-form/${entry.id}`} id={`${entry.id}`}>edit</a></li>
                <li className="entry-link"><a className="deleteBtn" href={`api/delete-entry/${entry.id}`} id={`${entry.id}`}>delete</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
