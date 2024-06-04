const sequelize = require (`../db`);

const { DataTypes } = require(`sequelize`);

const user = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    number: {type: DataTypes.STRING, unique: true },
    password:{ type: DataTypes.STRING, },
    role: { type: DataTypes.STRING, defaultValude:"User" }, 
});
const basket = sequelize.define('basket', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const basketitem = sequelize.define('basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
    
});

const item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: {type: DataTypes.INTEGER, unique: true },
    img:{ type: DataTypes.STRING, llowNull: false },
});
const colors = sequelize.define('colors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
const generation = sequelize.define('generation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});
const category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
const iteminfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, unique: true, allowNull: false },
});


const ColorsCategory = sequelize.define('colors_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const GenerationCategory = sequelize.define('generation_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

user.hasOne(basket);
basket.belongsTo(user);

basket.hasMany(basketitem);
basketitem.belongsTo(basket);

colors.hasMany(item);
item.belongsTo(colors);

generation.hasMany(item);
item.belongsTo(generation);

category.hasMany(item);
item.belongsTo(category);

item.hasMany(basketitem);
basketitem.belongsTo(item);

item.hasMany(iteminfo);
iteminfo.belongsTo(item);

colors.belongsToMany(category, {through: ColorsCategory});
category.belongsToMany(colors, {through: ColorsCategory});

generation.belongsToMany(category, {through: GenerationCategory});
category.belongsToMany(generation, {through: GenerationCategory});

module.exports = {
    user,
    basket,
    basketitem,
    item,
    colors,
    generation,
    category,
    ColorsCategory,
    GenerationCategory,
    iteminfo,
};




