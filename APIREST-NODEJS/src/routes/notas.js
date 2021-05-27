const express = require( 'express' );
const router = express.Router();

const connection = require( '../database' );

//We get all parameters
router.get( '/all', ( req, res ) =>
{

  let querySql = 'SELECT * FROM `notes`';
  connection.query( querySql, ( err, rows, fields ) =>
  {

    if ( !err )
    {
      res.json( rows );
    }
    else
    {
      console.log( err );
    }
  } );
} );

//We get the all favorite
router.get( '/allFav', ( req, res ) =>
{

  let querySql = 'SELECT * FROM `notes` WHERE favorite=1';
  connection.query( querySql, ( err, rows, fields ) =>
  {

    if ( !err )
    {
      res.json( rows );
    }
    else
    {
      console.log( err );
    }
  } );
} );

//we get the specified parameter
router.get( '/:id', ( req, res ) =>
{
  const
  {
    id
  } = req.params;
  let querySql = 'SELECT * FROM `notas` WHERE id = ?';
  console.log( id );

  connection.query( querySql, [ id ], ( err, rows, fields ) =>
  {
    if ( !err )
    {
      res.json( rows );
    }
    else
    {
      console.log( err );
    }
  } );
} );

//We insert parameter
router.post( '/', ( req, res ) =>
{
  const id = req.body.id;
  const note = req.body.note;
  const favorite = req.body.favorite;
  let querySql = "INSERT INTO `notes` (id, note, favorite) VALUES(?,?,?)";
  connection.query( querySql, [ id, note, favorite ], ( err, fields, rows ) =>
  {
    if ( !err )
    {
      res.json(
      {
        Status: 'Nota saved'
      } );
    }
    else
    {
      console.log( err );
    }
  } )

} );

//We add favorite
router.get( '/fav/:id', ( req, res ) =>
{
  const
  {
    id
  } = req.params;
  let querySql = "UPDATE `notes` SET favorite='1' WHERE id= ?";
  connection.query( querySql, [ id ], ( err, fields, rows ) =>
  {
    if ( !err )
    {
      res.json(
      {
        Status: 'Change successfull'
      } );
    }
    else
    {
      console.log( err );
    }
  } )
} );



module.exports = router;