const React = require('react');
const Layout = require('../Layout');

module.exports = function EditEntry({ entry }) {
  return (
    <Layout>
      <div className="formDiv">
      <h1>Edit the Entry</h1>

      <main className="form-wrapper" role="main">
        <form className="formEdit" method="post" action={`/api/update-entry/${entry.id}`} id={`${entry.id}`}>
          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="singer" type="text" defaultValue={entry.singer} />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="songTitle" type="text" defaultValue={entry.songTitle} />

          <input type="submit" className="buttonEdit button" defaultValue="Update Entry" />
        </form>
        <a href="/">Back</a>
      </main>
      </div>
    </Layout>
  );
};
