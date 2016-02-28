var React = require('react');
var ApiUtil = require('../util/api_util');


var RewardDetail = React.createClass({
  _createBacker: function() {
    console.log("you clicked:", this.props.reward.reward_title);
    var newBacker = {project_id: this.props.reward.project_id};
    ApiUtil.createBacker(newBacker);
    //TODO this is what you are doing
  },

  render: function() {
    return(
      <div className="col-md-12 reward-detail" onClick={this._createBacker}>
        {this.props.reward.reward_title}
      </div>
    );
  }

});

module.exports = RewardDetail;
