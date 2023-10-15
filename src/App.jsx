import React,{useState,useCallback} from 'react'
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"
import "./App.css"
import ListItem from './components/ListItem'

const App = () => {

 const [list,setList] = useState([
  {id : "1", content : "🏏"}, 
  {id : "2", content : "⚾"}, 
  {id : "3", content : "🏀"}, 
  {id : "4", content : "🏈"}, 
  {id : "5", content : "⚽"}, 
 ])

 const onDragEnd = (result) => {
  if(!result.destination) return
  let updatedList = Array.from(list)
  const [removed] = updatedList.splice(result.source.index,1)
  updatedList.splice(result.destination.index,0,removed)
  setList(updatedList)
 }

 const getListStyle = (isDraggingOver) => {
  return isDraggingOver ? {"background-color" : "gray"} : {}
 }

 const getItemStyle = (isDragging) =>{
  return isDragging ? {"box-shadow": "0px 1em 2.5em -0.8em rgb(101,101,241)"} : {}
 }
 

  return (
    <>
      <div className='container'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='characters' >
            {(provided,snapshot)=>(
              <ul className='characters' {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {list.map(({id,content},index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {
                        (provided,snapshot)=>(
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                          {/* <li style={getItemStyle(snapshot.isDragging)}>{content}</li> */}
                          <ListItem getItemStyle={getItemStyle} isDragging={snapshot.isDragging} content={content}/>
                          </div>
                        )
                      }
                    </Draggable>
                    
                  ))}
                {provided.placeholder}
            </ul>
            )}
              </Droppable>
          </DragDropContext>
      </div>
    </>
  )
}
export default App