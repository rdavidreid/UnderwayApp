var React = require('react');
var ApiUtil = require('../util/api_util.js');

var Cloud = React.createClass({

  _uploadPicture: function(event) {

    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button className="button blue" onClick={this._uploadPicture}>Upload Image</button>
      </div>
    );
  }
});

module.exports = Cloud;
