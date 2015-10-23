// Generated by CoffeeScript 1.10.0
(function() {
  /** @jsx React.DOM */;
  this.PersonCard = React.createClass({
    displayName: 'PersonCard',
    render: function() {
      var cardClasses, cx;
      cx = React.addons.classSet;
      cardClasses = cx({
        'card': true,
        'female': this.props.data.gender === 'female',
        'male': this.props.data.gender === 'male'
      });
      return React.createElement("div", {
        "className": cardClasses
      }, React.createElement("header", null, React.createElement("div", {
        "className": "avatar-wrapper"
      }, "           ", React.createElement("img", {
        "className": "avatar",
        "src": this.props.data.picture
      })), React.createElement("div", {
        "className": "info-wrapper"
      }, React.createElement("h4", null, this.props.data.first_name, " ", this.props.data.last_name), React.createElement("ul", {
        "className": "meta"
      }, React.createElement("li", null, React.createElement("i", {
        "className": "fa fa-map-marker"
      }), " ", this.props.data.location), React.createElement("li", null, React.createElement("i", {
        "className": "fa fa-birthday-cake"
      }), " ", moment(this.props.data.birth_date).format('D MMM YYYY'))))), React.createElement("div", {
        "className": "card-body"
      }, React.createElement("div", {
        "className": "headline"
      }, React.createElement("p", null, this.props.data.headline)), React.createElement("ul", {
        "className": "contact-info"
      }, React.createElement("li", null, React.createElement("i", {
        "className": "fa fa-phone"
      }), " ", this.props.data.phone_number), React.createElement("li", null, React.createElement("i", {
        "className": "fa fa-envelope"
      }), " ", this.props.data.email))));
    }
  });

}).call(this);
