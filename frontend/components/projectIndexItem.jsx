var React = require('react');
var History = require('react-router').History;

var ProjectIndexItem = React.createClass({
  mixins: [History],

  showDetails: function() {
    console.log("test");
    this.history.push('/project/' + this.props.project.id);
    console.log("you have clicked item number", this.props.project.id);
  },

  render: function() {
    var fundingAsPercent = this.props.project.funding_goal / this.props.project.current_funding;
    var fundingAsString = Math.round(fundingAsPercent).toString();

    if(fundingAsString === "Infinity"){
      fundingAsString = "0%";
    }
    else{
      fundingAsString += "%";
    }

    var fundingStyle = {width: fundingAsString};

    return(

      <div className="index-item col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={this.showDetails}
        key={parseInt(this.props.project.id)} >

        <div className="inner-box">
          <img className="index-item-image" src={this.props.project.img_url}>
          </img>

          <h3 className="project-index-item-title">{this.props.project.title}
          </h3>
          <br />

          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-success active"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={fundingStyle}>
                {fundingAsString}
            </div>
          </div>

          <div className="index-blerb">
            <p>Blurb: {this.props.project.blurb}</p>
          </div>

          <br />
        </div>

      </div>
    );
  }
});

module.exports = ProjectIndexItem;
