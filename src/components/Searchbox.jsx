import React, { Component } from "react";
import { connect } from "react-redux";

import messages from "../data/messages";

class Searchbox extends Component {
  state = {
    isOpen: false,
    userSearch: "",
    numberOfResults: 0
  };

  toggleDisplaySearchForm = this.toggleDisplaySearchForm.bind(this);
  searchValue = this.searchValue.bind(this);

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.getElementById("searchInput").focus();
    }
  }

  toggleDisplaySearchForm() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  searchValue(e) {
    var matches = {};
    const userValue = e.target.value;
    const userLanguage = this.props.lang;
    const messagesOfHisLanguage = messages[userLanguage];

    for(var key in messagesOfHisLanguage) {
      if(messagesOfHisLanguage.hasOwnProperty(key)) {
        if(messagesOfHisLanguage[key].toLowerCase().includes(userValue.toLowerCase())) {
          matches[key] = messagesOfHisLanguage[key];
        }
      }
    }

    console.clear();
    console.log(matches);
    this.setState({ userSearch: userValue });
  }

  render() {
    return (
      <Searchform
        toggleDisplaySearchForm={this.toggleDisplaySearchForm}
        open={this.state.isOpen}
        search={this.searchValue}
      />
    );
  }
}

const Searchform = props => {
  return (
    <div className="searchbox">
      <button
        className="btn btn-outline-dark my-2 my-sm-0 m-button m-searchbar__button"
        onClick={props.toggleDisplaySearchForm}
      >
        <i className="fas fa-search" />
      </button>
      <div
        className={( props.open ? "" : "-displayNone " ) + "modal"}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input type="text" id="searchInput" className="modal-title" placeholder="..." onChange={ props.search }/>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.toggleDisplaySearchForm}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps)(Searchbox);
