var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpService');

var List = React.createClass({
    getInitialState: function () {
        return { ingredients:[] };
    },
    componentWillMount: function () {
      HTTP.get('/gfs').then(function (data) {
          this.setState({ ingredients: data });
      }.bind(this));
    },
    render: function () {
        var listItems = this.state.ingredients.map(function (item) {
            return <ListItem key={item.id} ingredient={item.tipo} />;
        });   
        
        return (<ul> {listItems}</ul>);
    }
});

module.exports = List;