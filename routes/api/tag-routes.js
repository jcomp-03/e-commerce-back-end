const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      // join to the model 'Product'. Return the columns in attributes array
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products'
      }
    ]
  })
  .then(dbTagData => {
    
    if (!dbTagData) {
      res.status(404).json({ message: 'No tags found. Sorry.' });
      return;
    }

    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products'
      }
    ]
  })
  .then(dbTagData => {
    if(!dbTagData){
      res.status(404).json( { message: 'No tag found with this id. Sorry.' } );
      return;
    }

    res.json(dbTagData);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tag => {
    res.status(200).json( {message: "new tag created!", tag} );
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then( updatedTag => {
    if (!updatedTag) {
      res.status(404).json({ message: 'No tag found with this id. Sorry.' });
      return;
    }
    res.json(updatedTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  let deletedTagName;

  // run this to store the name of the tag in deletedTagName variable above.
  Tag.findOne({
    where: { 
      id: req.params.id
    }
  })
  .then(dbRow => {
    deletedTagName = dbRow.dataValues.tag_name;
  });

  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDeletedData => {
    if(!dbDeletedData){
      res.status(404).json({ message: 'No tag found with this id. Sorry.'})
      return;
    }
    
    res.json(`Tag '${deletedTagName}' with id ${req.params.id} has been deleted.`);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
