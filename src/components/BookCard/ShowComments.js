import React from 'react'
import { CardContent, Collapse, makeStyles } from '@material-ui/core'
import CreateComment from '../CreateComment/CreateComment'

function ShowComments({ addComment, item }) {
  const classes = useStyles()
  return (
    <Collapse in={addComment} timeout='auto' unmountOnExit>
      <CardContent className={classes.comment}>
        <CreateComment item={item} />
      </CardContent>
    </Collapse>
  )
}

export default ShowComments

const useStyles = makeStyles(() => ({
  comment: {
    marginBottom: '20px',
    paddding: '0',
    display: 'flex',
    justifyContent: 'space-between',
    height: '25px',
  },
}))
