import { noteData } from './firebaseConnect'
var redux = require('redux')

const noteInitialState = {
  isEdit: false,
  editItem: {},
  isAdd: false,
  alertShow: false,
  alertContent: '',
  alertType: ''
}

const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      noteData.push(action.getItem)
      console.log('Them du lieu ' + JSON.stringify(action.getItem) + " thanh cong")
      return state
    case "CHANGE_EDIT_STATUS":
      return {...state, isEdit: !state.isEdit}
    case "CHANGE_ADD_STATUS":
      return {...state, isAdd: !state.isAdd}
    case "GET_EDIT_STATUS":
      return {...state, editItem: action.editObject}
    case "EDIT":
    noteData.child(action.getItem.id).update({
      noteTitle: action.getItem.noteTitle,
      noteContent: action.getItem.noteContent
    })
    console.log('Da cap nhat du lieu', JSON.stringify(action.getItem));
      return {...state, editItem: {}}
    case "DELETE":
      noteData.child(action.deleteId).remove()
      console.log('da xoa phan tu co id ', action.deleteId);
      return state
    case "ALERT_ON":
    return {...state, alertShow: true, alertContent: action.alertContent, alertType: action.alertType}
    case "ALERT_OFF":
    return {...state, alertShow: false}
    default:
      return state
  }
}
var store = redux.createStore(allReducer)
store.subscribe(() => {
  console.log(store.getState());
})

export default store