import React, { Component } from 'react';
import {noteData} from './firebaseConnect'
import NoteItem from './NoteItem'

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    }
  }

  componentWillMount() {
    noteData.on('value', (notes) => {
      var arrayData = []
      notes.forEach((element) => {
        const key = element.key;
        const noteTitle = element.val().noteTitle
        const noteContent = element.val().noteContent
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })
      })
      this.setState({
        dataFirebase: arrayData
      })
    })
  }
  

  getData = () => {
    if(this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <NoteItem 
            key={key}
            i={key}
            note={value}
            noteContent={value.noteContent}
            noteTitle={value.noteTitle}
          />
        )
      })
    }
  }

  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>
    );
  }
}

export default NoteList;