var React = require('react');
var ApiUtil = require('../util/api_util');


var RewardDetail = React.createClass({

  _clickerFunc: function() {
    if(this.props.clickerFunc === "none") {

    } else {
      var newBacker = {reward_id: this.props.reward.reward_id};
      if (this.props.reward.reward_max_count &&
        this.props.reward.reward_number_sold > this.props.reward.reward_max_count) {
        alert(this.props.reward.reward_title + " is sold out!");
      } else {
        ApiUtil.createBacker(newBacker);
      }
    }
  },

  render: function() {
    var reward = this.props.reward;
    if(reward.rewards_bought.rewards_bought > 0) {
      var count = "You own: " + reward.rewards_bought.rewards_bought;
    } else {
      count = "";
    }

    if(parseInt(reward.reward_max_count) > 0) {
      var countRemaining = "Quantity remaining: " + reward.number_remaining;
    } else {
      countRemaining = "";
    }

    return(

      <div className="col-md-12 reward-detail" onClick={this._clickerFunc}>
        <section>Pledge{" $" + reward.reward_cost}</section>
        <section>{reward.reward_number_sold} backers. Limited{reward.reward_number_sold + " left of " + reward.reward_max_count}</section>
        <br />
        <section className="reward-title">{reward.reward_title}</section>
        <section>{reward.reward_description}</section>
        <section>Estimated delivery {reward.reward_delivery_date}</section>
        <section>{count}</section>

        <div className="hover">
          <div className="reward-select">Select this reward</div>
        </div>

      </div>
    );
  }

});

module.exports = RewardDetail;
