var React = require('react');
var History = require('react-router').History;

var ProjectIndexItem = React.createClass({
  mixins: [History],

  showDetails: function() {
    this.history.push('/project/' + this.props.project.id);
  },

  _imgError: function(){
    // this.backupImage = (<img src="http://res.cloudinary.com/dur3lr9q4/image/upload/v1456796305/fsx6ruo0qqkl97f4lzrm.png"></img>);
    // console.log("error happend");
    this.refs.indexItemImage.src = "http://res.cloudinary.com/dur3lr9q4/image/upload/v1456796305/fsx6ruo0qqkl97f4lzrm.png";
    // debugger;
  },

  render: function() {

    var fundingAsPercent = this.props.project.funding_goal / this.props.project.current_funding;
    var fundingAsString = Math.round(fundingAsPercent);

    if(fundingAsString == Infinity){
      fundingAsString = 0;
    }

    var fundingStyle = fundingAsString;
    if(fundingStyle > 100){
      fundingStyle = "100";
    }
    fundingStyle = fundingStyle.toString() + "%";
    fundingAsString = fundingAsString.toString() + "%";

    fundingStyle = {width: fundingStyle};
    // debugger;
    return(

      <div className="index-item col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={this.showDetails}
        key={parseInt(this.props.project.id)} >

        <div className="inner-box">

          <img
            ref="indexItemImage"
            className="index-item-image"
            src={this.props.project.img_url}
            onError={this._imgError}
            >
          </img>

          <h3 className="project-index-item-title">{this.props.project.title}
          </h3>

          <br />

          <div className="index-blerb">
            <p>Blurb: {this.props.project.blurb}</p>
          </div>

          <div className="progress">
            <div className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow={fundingAsString}
              aria-valuemin="0"
              aria-valuemax="100"
              style={fundingStyle}>
                {fundingAsString}
            </div>
          </div>

          <div className="itemInfo">
            {this.props.project.campaign_end_date - Date.now()}
          </div>




          <br />
        </div>

      </div>
    );
  }
});

module.exports = ProjectIndexItem;
