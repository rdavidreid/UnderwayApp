var React = require('react');
var History = require('react-router').History;

var ProjectIndexItem = React.createClass({
  mixins: [History],

  showDetails: function() {
    this.history.push('/project/' + this.props.project.id);
  },

  _imgError: function(){
    this.refs.indexItemImage.src = "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457053272/icgwgkmu2r7k05echr1q.png";
  },

  _formatTime: function(t){

    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
    if( m === 60 ){
      h++;
      m = 0;
    }
    if( h === 24 ){
      d++;
      h = 0;
    }
    if( d < 0){
      d = 0;
    }
    return d;
  },

  render: function() {

    var fundingAsPercent = this.props.project.current_funding / this.props.project.funding_goal;
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

    var timeRemainingInt = (Date.parse(this.props.project.campaign_end_date) - new Date());
    var daysToGo = this._formatTime(timeRemainingInt);

    var pleged = ("$" + this.props.project.current_funding);

    return(

      <div className="index-item col-xs-12 col-sm-6 col-md-4 col-lg-3"
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
          <div className="index-item-infos">

            <div className="item-info">
              <h6>Days to go:</h6>
              <section>{daysToGo}</section>
            </div>

            <div className="item-info">
              <h6>Funded:</h6>
              <section>{fundingAsString}</section>
            </div>

            <div className="item-info">
              <h6>Pleged:</h6>
              {pleged}
            </div>

          </div>
          <br />
        </div>

      </div>
    );
  }
});

module.exports = ProjectIndexItem;
