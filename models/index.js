const User = require('./User');

const Comment = require('./Comment');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'blogger_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'readerComment_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'blogger_id',
});

Blog.hasMany(Comment, {
  foreignKey: 'blogComment_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'blogger_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blogComment_id',
});

module.exports = { User, Blog, Comment };
