/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('../Layout');

module.exports = function NewEntry({ errors }) {
  return (
    <Layout>
      <h1>Sign Up to Karaoke</h1>

      <main className="form-wrapper" role="main">

        {errors && (
          <div className="errors-wrapper">
            <span>Your entry could not be saved:</span>
            <ul className="errors">
              {errors.map((error, index) => (
                <li className="error" key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="formAdd">
        <form className="addForm" method="post" action="/api/create-new-post">
          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="singer" type="text" defaultValue="Михаил Круг" />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="songTitle" type="text" defaultValue="Владимирский Централ" />

          <input type="submit" className="addBtn button" defaultValue="Put me on the List!" />
        </form>
        </div>
        <a href="/">Back</a>
      </main>

    </Layout>
  );
};
