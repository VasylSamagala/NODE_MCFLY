const request = require( 'supertest' );;
const app = require( '../src/index' );


/* 
 *Testing get all notes
 */
describe( "GET /all", () =>
{
  it( "respond with json containing a list of all notes", ( done ) =>
  {
    request( app )
      .get( "/all" )
      .set( "Accept", "application/json" )
      .expect( 'Content-Type', /json/ )
      .expect( 200, done );
  } );
} );

/*
 *Testing get all favorite notes 
 */

describe( "GET /allFav", () =>
{
  it( "respond with json containing a list of all favorite notes", ( done ) =>
  {
    request( app )
      .get( "/allFav" )
      .set( "Accept", "application/json" )
      .expect( 'Content-Type', /json/ )
      .expect( 200, done );
  } );
} );

/* 
 *Testing get specified notes
 */

describe( "GET /:id", () =>
{
  it( "respond with json containing a list of specified notes", ( done ) =>
  {
    request( app )
      .get( "/:1" )
      .set( "Accept", "application/json" )
      .expect( 'Content-Type', /json/ )
      .expect( 200, done );
  } );
} );

/*
 *Testing POST Insert
 */

describe( "POST /", () =>
{
  it( "respond with 200 created", ( done ) =>
  {
    const data = {
      id: "10",
      significado: "hola hola",
      favorito: "1",
    };
    request( app )
      .post( "/" )
      .send( data )
      .set( "Accept", "application/json" )
      .expect( "Content-Type", /json/ )
      .expect( 200 )
      .end( ( err ) =>
      {
        if ( err ) return done( err );
        done();
      } );
  } );
} );


/*
 *Testing add favorite 
 */
describe( "GET /fav/:id", () =>
{
  it( "respond with created new favorite notes", ( done ) =>
  {
    request( app )
      .get( "/fav/:1" )
      .set( "Accept", "application/json" )
      .expect( 'Content-Type', /json/ )
      .expect( 200, done );
  } );
} );