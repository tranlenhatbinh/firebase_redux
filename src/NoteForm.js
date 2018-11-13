import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }
  
  componentWillMount() {
    if(this.props.editItem) {
      this.setState({
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent,
        id: this.props.editItem.id
      })
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  addData = (title, content) => {
    if(this.state.id) {
      var editObject = {}
      editObject.id=this.state.id
      editObject.noteContent=this.state.noteContent
      editObject.noteTitle=this.state.noteTitle
      this.props.editDataStore(editObject)
      this.props.changeEditStatus()
      this.props.alertOn('Sua thanh cong', 'success')
    } else {
      var item = {}
      item.noteTitle = title
      item.noteContent = content
      this.props.addDataStore(item)
      this.props.alertOn('Them moi thanh cong', 'success')
    }
  }

  printTitle = () => {
    if(this.props.addStatus) {
      return <h4>Them moi</h4>
    } else {
      return <h4>Sua ghi chu</h4>
    }
  }
  
  render() {
    const {editItem} = this.props
    return (
      <div className="col-4">
        {this.printTitle()}
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tieu de Note</label>
            <input defaultValue={editItem.noteTitle} onChange= {(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tieu De Note" />
            <small id="helpIdNoteTitle" className="form-text text-muted">Dien tieu de vao day</small>
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Noi dung Note</label>
            <textarea defaultValue={editItem.noteContent}  onChange= {(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteTitle" placeholder="Noi dung Note" />
            <small id="helpIdNoteTitle" className="form-text text-muted">Dien tieu de vao day</small>
          </div>
          <button type="reset" onClick= {() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Luu</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    addStatus: state.isAdd
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type: "ADD_DATA", getItem})
    },
    editDataStore: (getItem) => {
      dispatch({type: "EDIT", getItem})
    },
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);