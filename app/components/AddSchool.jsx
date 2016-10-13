var React = require('react');
var actions = require('../actions/SchoolActions');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      tagline: ''
    }
  },
  addSchool: function(e) {
    e.preventDefault();
    actions.addSchool(this.state);
  },
  handleInputChange: function(e) {
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },
  render: function() {
    return (
      <form onSubmit={this.addSchool} className="form">
        <div className="form-group">
          <label htmlFor="name" className="control-label">School Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />
        </div>
        <div className="form-group">
          <label htmlFor="tagline" className="control-label">Tagline:</label>
          <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} placeholder="Tagline" />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">Add School</button>
        </div>
      </form>
    )
  }
})
