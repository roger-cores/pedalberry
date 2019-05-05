import React from 'react'

import Paper, {Path, Rectangle, Point, PointText} from "paper"

function Rect({x, y, width, height, label="label"}) {

  const draw = React.useCallback(
    () => {
      var rectangle = new Rectangle(new Point(x, y), new Point(x+width, y+height))
      var path = new Path.Rectangle(rectangle)
      path.fillColor = '#e9e9ff'
      path.strokeColor = '#000000';
      path.selected = false

      var text = new PointText(new Point(x + (width/2), y + (height/1.9)));
      text.justification = 'center';
      text.fillColor = 'black';
      text.content = label;
    },
    [x, y, width, height, label],
  );

  React.useEffect(() => {
    // Paper.setup('canvas')
    draw()
  }, [draw])

  return null
}

export default Rect
