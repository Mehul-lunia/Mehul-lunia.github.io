import React,{useRef, useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ListItem = ({getItemStyle,isDragging,content}) => {
    
  return (
    <li  
     style={getItemStyle(isDragging)}   
     >{content}
    </li>
  )
}

export default ListItem