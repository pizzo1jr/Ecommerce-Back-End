// import model files
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category 
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Category has many products 
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});

// Tag belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

module.exports = { Product, Category, Tag, ProductTag };