var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var UserStore = require('../stores/UserStore');
var ApiUtil = require('../util/api_util');
var RewardDetail = require('./RewardDetail');
var ProjectIndexItem = require('./ProjectIndexItem');

var History = require('react-router').History;

var userRewardTableRows = React.createClass({
  mixins: [History],

  _clickRewardRow: function() {
    this.history.push('/project/' + this.props.reward.project_id);
  },

  render: function() {
    var dots = "";
    if(this.props.reward.description.length > 37){
      dots = "...";
    }

    return(
        <tr onClick={this._clickRewardRow.bind(this,this.props.reward.project_id)}>
          <th scope="row" className="user-table-row">{this.props.reward.title}</th>
          <td className="user-table-row">{this.props.reward.cost}</td>
          <td className="user-table-row">{this.props.reward.delivery_date}</td>
          <td className="user-table-row">{this.props.reward.description.slice(0,40) + dots}</td>
        </tr>
      );
  }

});

module.exports = userRewardTableRows;
