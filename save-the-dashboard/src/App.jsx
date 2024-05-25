import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import blankConfig from "./data/blankConfig"
import Clock from "./components/Clock"
import News from "./components/News"
import Quote from "./components/Quote"
import Stocks from "./components/Stocks"
import ToDo from "./components/ToDo"
import Weather from "./components/Weather"
import ConfigMenu from "./components/ConfigMenu"
import './App.css'

function App() {


  const DEFAULT_CONFIG = blankConfig.map(widget => {
    return { ...widget, positionData: { ...widget.positionData } }
  })

  const [widgetConfig, setWidgetConfig] = useState(DEFAULT_CONFIG)
  const [saveRequested, setSaveRequested] = useState(false)

  function save() {
    setSaveRequested(true) // This causes the green "Saved!" message to be rendered on line 130 below. The state then gets set back to false by the setTimeout on line 70, which removes the message. 
  }






  /****** Write your code above! *******************************************************************  
   
   All of the code relevant to solving the challenge is above! Nothing about this project needs to be changed or analyzed outside of this code! 
      
   In addition to adding your own code, you will only have to make a small modification to the way the widgetConfig state is initialized above. Otherwise, no changes in the code above need to be made either! 
  
  ***************************************************************************************************/

  const widgetComponents = {
    Clock: <Clock />,
    News: <News />,
    Quote: <Quote />,
    Stocks: <Stocks />,
    ToDo: <ToDo />,
    Weather: <Weather />
  }

  const savedMessage = (
    <div className="saved-message-container">
      <p className="saved-message">Saved!</p>
    </div>
  )

  useEffect(() => {
    if (saveRequested) {
      setTimeout(() => {
        setSaveRequested(false)
      }, 1000)
    }
  }, [saveRequested])

  function dragHandler(e, data) {
    if (e.target.dataset.type !== "button") {
      setWidgetConfig((prevConfig) => {
        let allConfigs = [...prevConfig]
        let targetConfig = allConfigs.find(
          (widget) => widget.name === data.node.classList[1]
        )
        targetConfig.positionData = {
          ...targetConfig.positionData,
          customPosition: true,
          x: data.x,
          y: data.y,
        }
        return allConfigs
      })
    }
  }

  function getOffset(name) {
    let targetConfig = widgetConfig.find((widget) => widget.name === name)
    if (!targetConfig.positionData.customPosition) {
      return undefined
    } else {
      return { x: targetConfig.positionData.x, y: targetConfig.positionData.y }
    }
  }

  const widgetsToDisplay = widgetConfig
    .filter((widget) => widget.selected)
    .map((widget) => {
      const component = { ...widgetComponents[widget.name], key: nanoid() }
      component.props = {
        ...component.props,
        name: widget.name,
        gridArea: widget.positionData.gridArea,
        getOffset: getOffset,
        dragHandler: dragHandler,
        changeHandler: changeHandler,
      }
      return component
    })

  function changeHandler(event) {
    setWidgetConfig((prevConfig) => {
      return prevConfig.map((widget) => {
        return widget.name === event.target.name
          ? { ...widget, selected: !widget.selected }
          : { ...widget }
      })
    })
  }

  return (
    <div className="wrapper">
      {saveRequested && savedMessage}
      <div className="widget-container">{widgetsToDisplay}</div>
      <ConfigMenu
        stateProps={{ widgetConfig, setWidgetConfig, DEFAULT_CONFIG }}
        changeHandler={changeHandler}
        save={save}
      />
    </div>
  )
}


export default App