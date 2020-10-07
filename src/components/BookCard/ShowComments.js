import React from 'react'
import { CardContent, Collapse } from '@material-ui/core';
import CreateComment from '../CreateComment/CreateComment'

function ShowComments({addComment, item}) {

  return (
    <Collapse in={addComment} timeout="auto" unmountOnExit>
        <CardContent style={{display:'flex', justifyContent:'left'}}>
            <CreateComment item={item}/>
        </CardContent>
    </Collapse>
  )
}

export default ShowComments