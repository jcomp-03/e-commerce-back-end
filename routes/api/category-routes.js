const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      // join to the model 'Product'. Return the columns in attributes array
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbCategoryData => {
    
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No categories found. Sorry.' });
      return;
    }

    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Category,
        key: 'category_id'
      }
    ]
  })
  .then(dbCategoryData => {
    if(!dbCategoryData){
      res.status(404).json( { message: 'No product found with this id. Sorry.' } );
      return;
    }

    res.json(dbCategoryData);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(category => {
    res.status(200).json( {message: "new category created!", category} );
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then( updatedCategory => {
    if (!updatedCategory) {
      res.status(404).json({ message: 'No category found with this id. Sorry.' });
      return;
    }
    res.json(updatedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete one category by its `id` value
  let deletedCategoryName;

  // run this to store the name of the category in deletedCategoryName variable above.
  Category.findOne({
    where: { 
      id: req.params.id
    }
  })
  .then(dbRow => {
    deletedCategoryName = dbRow.dataValues.category_name;
  });

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDeletedData => {
    if(!dbDeletedData){
      res.status(404).json({ message: 'No category found with this id. Sorry.'})
      return;
    }
    
    res.json(`Category '${deletedCategoryName}' with id ${req.params.id} has been deleted.`);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
