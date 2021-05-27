const mysql = require( 'mysql' );

const conection = mysql.createConnection(
{
  host: 'localhost',
  user: 'root',
  password: 'master',
  database: 'better_notes'
} );

conection.connect( function ( err )
{
  if ( err )
  {
    console.log( err );
    return;
  }
  else
  {
    console.log( 'Connection successfull' );
  }
} );

module.exports = conection;