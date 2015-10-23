// Generated by CoffeeScript 1.10.0
(function() {
  /** @jsx React.DOM */;
  this.PeopleSearch = React.createClass({
    displayName: 'PeopleSearch',
    getInitialState: function() {
      return {
        searchLength: 0
      };
    },
    componentDidMount: function() {
      return this._subscribeToEvents();
    },
    componentWillUnmount: function() {
      return this._unsubscribeFromEvents();
    },
    _subscribeToEvents: function() {
      $(this.refs.search.getDOMNode()).on('keyup', this._handleSearchOnKeyup);
      return PubSub.subscribe('resetButton:onClick', (function(_this) {
        return function() {
          _this.refs.search.getDOMNode().value = '';
          return _this.setState({
            searchLength: 0
          });
        };
      })(this));
    },
    _unsubscribeFromEvents: function() {
      return PubSub.unsubscribe('resetButton:onClick');
    },
    _handleOnSubmit: function(e) {
      var searchValue;
      e.preventDefault();
      searchValue = this.refs.search.getDOMNode().value.trim();
      return this.props.onFormSubmit(searchValue);
    },
    _handleSearchOnKeyup: function(e) {
      return this.setState({
        searchLength: $(e.target).val().length
      });
    },
    _personText: function(count) {
      if (count > 1) {
        return 'people';
      } else {
        return 'person';
      }
    },
    render: function() {
      var count, overviewTitle, personText;
      count = this.props.totalCount;
      personText = this._personText(count);
      overviewTitle = this.props.totalCount > 0 ? count + " " + personText + " found" : void 0;
      return React.createElement("div", {
        "className": "filter-wrapper"
      }, React.createElement("div", {
        "className": "overview-wrapper"
      }, React.createElement("h3", null, overviewTitle), "         "), React.createElement("div", {
        "className": "form-wrapper"
      }, React.createElement("form", {
        "onSubmit": this._handleOnSubmit
      }, (this.state.searchLength !== 0 ? React.createElement(ResetButton, {
        "text": "Reset filter",
        "styleClass": "reset"
      }) : void 0), React.createElement("input", {
        "ref": "search",
        "placeholder": "Search people...",
        "type": "search"
      }))));
    }
  });

}).call(this);
