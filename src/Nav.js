import React, { Component } from 'react';
import { connect } from 'react-redux'


class Nav extends Component {

  handleAdd= (event) => {
    event.preventDefault()
    this.props.changeEditStatus()
    this.props.changeAddStatus()
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand" href="http://fedu.vn">Fedu</a>
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav  mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="http://google.com.vn">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://google.com.vn" onClick={(event) => this.handleAdd(event)}>Them ghi chu</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    },
    changeAddStatus: () => {
      dispatch({
        type: "CHANGE_ADD_STATUS"
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Nav)