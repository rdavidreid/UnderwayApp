var React = require('react');
var ApiUtil = require('../util/api_util');
var Modal = require('react-modal');



var RewardDetail = React.createClass({

  _clickerFunc: function() {
    if(this.props.clickerFunc === "none") {
    } else if(this.props.clickerFunc === "expired"){

    }
    else {
      var newBacker = {reward_id: this.props.reward.reward_id};
      if (this.props.reward.reward_max_count &&
        this.props.reward.reward_number_sold >= this.props.reward.reward_max_count) {

          var background = this.state.customStyles;
          this.state.modalTitle = "Sold Out!";
          this.state.modalMsg = "Please select a different reward";
          background.content.backgroundColor = "#ffff00";
          this.setState({customStyles: background});
          this.openModal();

      } else {

        var background = this.state.customStyles;
        this.state.modalTitle = "Purchase Success!";
        this.state.modalMsg = "Thankyou for your support";
        background.content.backgroundColor = "#33cc33";
        this.setState({customStyles: background});
        ApiUtil.createBacker(newBacker);
        this.openModal();
      }
    }
  },

  getInitialState: function() {
    return({modalIsOpen: false,
            customStyles: {
              content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)',
                borderRadius          : '10px',
                border                : '1px solid black'
              },
              overlay : {
               position          : 'fixed',
               top               : 0,
               left              : 0,
               right             : 0,
               bottom            : 0,
               backgroundColor   : 'rgba(0, 0, 0, 0.5)'
             }
          }
    });
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    Modal.setAppElement(document.body);

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

    if (reward.reward_max_count){
      var rewardLimit = "Limited " + reward.number_remaining + " left of " + reward.reward_max_count;
    } else {
      rewardLimit = "";
    }

    if (this.props.clickerFunc === "expired"){
      var hoverDiv = (
        <div className="mask red-mask">
          <br />
            <div className="reward-select"><h4>Funding period over</h4></div>
        </div>
      );
    }
    else if(this.props.clickerFunc === "none") {
      var hoverDiv = (
      <div className="no-mask">
      </div>
      );
    }
    else {
      var hoverDiv = (
        <div className="mask green-mask">
          <br />
            <div className="reward-select"><h4>Select this reward</h4></div>
          </div>
        );
    }
    var modalTitle = "";
    var modalMsg = "";

    return(

      <div className="col-md-12 reward-detail" onClick={this._clickerFunc}>


        <section>Pledge{" $" + reward.reward_cost}</section>
        <section>{reward.reward_number_sold} backers. {rewardLimit}</section>
        <br />
        <section className="reward-title">{reward.reward_title}</section>
        <section>{reward.reward_description}</section>
        <section>Estimated delivery {reward.reward_delivery_date}</section>
        <section>{count}</section>

        {hoverDiv}

        <Modal
          className="reward-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={this.state.customStyles} >
          <h2 className="reward-modal-title">{this.state.modalTitle}</h2>
          <div className="reward-modal-msg">{this.state.modalMsg}</div>
        </Modal>

      </div>


    );
  }

});

// <div className="reward-select"><h4>Select this reward</h4></div>
module.exports = RewardDetail;
