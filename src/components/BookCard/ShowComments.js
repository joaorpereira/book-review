import React from 'react'
import { CardContent, Collapse } from '@material-ui/core';
import CreateComment from '../CreateComment/CreateComment'

function ShowComments({addComment, item, user}) {

  return (
    <Collapse in={addComment} timeout="auto" unmountOnExit>
        <CardContent style={{display:'flex', justifyContent:'left'}}>
            <CreateComment item={item} user={user}/>
        </CardContent>
    </Collapse>
  )
}

export default ShowComments