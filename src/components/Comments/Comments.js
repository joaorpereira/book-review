import React, { useEffect, useState } from 'react'
import {
  Box,
  Divider,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { db } from '../../services/firebase'
import { regularColor, secondaryColor } from '../../constants/colors'
import { withStyles } from '@material-ui/styles'

const StyledTooltip = withStyles(() => ({
  arrow: {
    color: secondaryColor,
  },
  tooltip: {
    backgroundColor: secondaryColor,
    fontSize: '11px',
    fontWeight: 600
  },
}))(Tooltip)

function BookCard({ item }) {
  const { id } = item

  const classes = useStyles()
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (id) {
      db.collection('posts')
        .doc(id)
        .collection('comments')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
          setComments(snapshot.docs.map(doc => doc.data()))
        })
    }
  }, [id])

  return (
    <Box className={classes.container}>
      <Divider light />
      {comments.length !== 0 ? (
        <Box style={{ margin: '0px', padding: '0px' }}>
          {comments.map(comment => {
            return (
              <Box key={comment.text}>
                <StyledTooltip
                  arrow
                  disableFocusListener
                  disableTouchListener
                  title={<p style={{ textAlign: 'justify' }}>{comment.text}</p>}
                >
                  <Typography variant='body2' className={classes.comments}>
                    <strong>{comment.username}</strong>
                    {': '}
                    {comment.text}
                  </Typography>
                </StyledTooltip>

                <Divider variant='middle' />
              </Box>
            )
          })}
        </Box>
      ) : (
        <Typography
          className={classes.comments}
          variant='body2'
          style={{ color: 'grey' }}
        >
          No comments
        </Typography>
      )}
    </Box>
  )
}

export default BookCard

const useStyles = makeStyles({
  container: {
    margin: '10px 0px 10px 0px',
    minHeight: '50px',
  },
  comments: {
    margin: '0px 16px 0px 16px',
    paddingTop: '10px',
    textTransform: 'capitalize',
    color: regularColor,
    textAlign: 'justify',
    textOverflow: 'ellipsis',
    width: '270px',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    overflow: 'hidden !important',
  },
})
