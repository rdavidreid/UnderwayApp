var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Cloud = require('./Cloud');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ProjectStore = require('../stores/ProjectStore');
var ReactQuill = require('react-quill');
var DateTime = require('react-datetime');
var Modal = require('react-modal');

var projectForm = React.createClass({
  mixins: [LinkedStateMixin, History, ReactQuill.Mixin],

  inputs: {
    title: "",
    blurb: "",
    campaign_end_date: "",
    details: "",
    category_id: "",
    funding_goal: "",
    img_url: ""
  },

  getInitialState: function() {
    return({
      title: "",
      blurb: "",
      campaign_end_date: "",
      details: "",
      category_id: "",
      funding_goal: "",
      img_url: "",
      modalIsOpen: false,
      customStyles: {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          borderRadius          : '10px',
          border                : '1px solid black',
          backgroundColor       : "#ffff00"
        },
        overlay : {
          position               : 'fixed',
          top                    : 0,
          left                   : 0,
          right                  : 0,
          bottom                 : 0,
          backgroundColor        : 'rgba(0, 0, 0, 0.5)'
        }
      },
    });
  },

  componentDidMount: function() {
  var editor = this.createEditor(
    // this.getEditorElement(),
    // this.getEditorConfig()
    );
    this.setState({ editor:editor });
  },

  componentWillReceiveProps: function(nextProps) {
    if ('value' in nextProps && nextProps.value !== this.props.value) {
      this.setEditorContents(this.state.editor, nextProps.value);
    }
  },

  onTextChange: function(value) {
    // this.setState({details: value});
    this.state.details = value;
  },

  onDateChange: function(value) {
    this.state.campaign_end_date = new Date(value.valueOf());
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  getEditorContents: function() {
    this.state.Project.project.details;
  },

  // TODO: REFACTOR / CLEAN THIS. add into another file

  validateInput: function() {
    this.errors = [];
    if(this.state.title === "") {
      this.errors.push("Title can not be blank");
    }
    if(this.state.title.length > 50) {
      this.errors.push("Title is too long");
    }
    if(this.state.blurb ==="") {
      this.errors.push("blurb cannot be blank");
    }
    if(this.state.blurb.length > 150) {
      this.errors.push("blurb is too long");
    }
    if(this.state.campaign_end_date === "") {
      this.errors.push("date cannot be blank");
    }
    if(this.state.details === "") {
      this.errors.push("details cannot be blank");
    }
    if(this.state.category_id ==="") {
      this.errors.push("you must select a category");
    }
    if(this.state.funding_goal === "") {
      this.errors.push("You must have a funding goal");
    }
    if(typeof parseInt(this.state.funding_goal) !=='number' ||
              (parseInt(this.state.funding_goal) % 1) !== 0){
      this.errors.push("Funding goal must be a number");
    }
    if(parseInt(this.state.funding_goal) <= 0) {
      this.errors.push("Funding goal must be positive");
    }
    if (this.errors.length > 0) {
      return false;
    }
    return true;
  },

  createProject: function(event) {
    event.preventDefault();
    var project = {};

    //TODO EDIT THIS

    Object.keys(this.inputs).forEach(function(key){
      project[key] = this.state[key];
    }.bind(this));
    var valid = this.validateInput();
    if (valid) {
      ApiUtil.createProject(project, function(id) {
        this.history.pushState(null, "/editreward/" + id, {new: true});
      }.bind(this));
    } else{
      this.errorList = this.errors.map(function(el) {
        return (<li>{el}</li>);
      });
      this.openModal();
    }
  },

  postImage: function (image) {
    this.setState({img_url: image.url});
  },

  validDate: function(current){
    var today = DateTime.moment();
    return current.isAfter(today);
  },

  render: function() {
    Modal.setAppElement(document.body);

    return(
      <div className="create-form col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
      <form className="form-horizontal createProjectForm" onSubmit={this.createProject}>

        <h2 className="create-form-title">Create Project</h2>

        <div className="form-group ">
          <label htmlFor='project_title' className="col-sm-2 control-label">Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="project_title"
              valueLink={this.linkState("title")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='project_blurb' className="col-sm-2 control-label">Blurb:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="project_blurb"
              valueLink={this.linkState("blurb")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='project_end_date' className="col-sm-2 control-label">End date:
          </label>
          <div className="col-sm-10">
            <DateTime
              isValidDate={this.validDate}
              input={false}
              onChange={this.onDateChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='category' className="col-sm-2 control-label">Category:</label>
          <div className="col-sm-10">
            <select id="category" valueLink={this.linkState("category_id")}>
              <option value=" ">select:</option>
              <option value={1}>Art</option>
              <option value={2}>Comics</option>
              <option value={3}>Design</option>
              <option value={4}>Fashion</option>
              <option value={5}>Film</option>
              <option value={6}>Food</option>
              <option value={7}>Games</option>
              <option value={8}>Music</option>
              <option value={9}>Photography</option>
              <option value={10}>Technology</option>
              <option value={11}>Theater</option>

            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='funding_goal' className="col-sm-2 control-label" >Funding Goal:
          </label>
          <div className="col-sm-10">
            <div className="left-inner-addon">
              <span>$</span>
              <input
                className="form-control"
                type="text"
                id="funding_goal"
                valueLink={this.linkState("funding_goal")}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor='img_url' className="col-sm-2 control-label">Image:
          </label>
            <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="img_url"
              valueLink={this.linkState("img_url")}
            />
          <br />
          <Cloud postImage={this.postImage} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12"><h3 className="details-title">Details</h3></div>
          <div clssName="col-sm-12"><h5 className="details-title">Describe your project in detail! More details = more funding</h5></div>
          <div className="col-sm-12">
            <ReactQuill
              className="quill-component"
              theme="snow"
              onChange={this.onTextChange}
              >
            </ReactQuill>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-10">
            <button className="button blue">Create Project</button>
          </div>
        </div>

      </form>

      <Modal
        className="reward-modal"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={this.state.customStyles} >
        <h2 className="reward-modal-title">Errors:</h2>
        <div className="reward-modal-msg">{this.errorList}</div>
      </Modal>
    </div>

    );
  }
});

module.exports = projectForm;
