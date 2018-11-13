import React, { Component } from 'react';
import {connect} from 'react-redux'

class NoteItem extends Component {

  secondActionButton = () => {
    this.props.changeEditStatus()
    this.props.getEditData(this.props.note)
  }

  deleteData = () => {
    this.props.getDeleteData(this.props.note.id)
    this.props.alertOn('Xoa ghi chu " ' + this.props.note.noteTitle + ' "Thanh cong" ', 'danger')
  }

  render() {

    return (
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#note1" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
              {this.props.noteTitle}
            </a>
          <div className="btn-group float-right">
            <button className="btn btn-outline-info" onClick={() => this.secondActionButton()}>Sua</button>
            <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}>Xoa</button>
          </div>
          </h5>
        </div>
        <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
          <div className="card-body">
          {this.props.noteContent}
          </div>
        </div>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    },
    getEditData: (editObject) => {
      dispatch({
        type: "GET_EDIT_STATUS",
        editObject
      })
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type: "DELETE",
        deleteId
      })
    },
    alertOn: (alertContent, alertType) => {
      dispatch({
        type: "ALERT_ON",
        alertContent,
        alertType
      })
    },
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(NoteItem)
