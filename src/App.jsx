import { useEffect, useMemo, useState } from "react"
import divider from "./assets/imgs/pattern-divider-desktop.svg"
import dice from "./assets/imgs/icon-dice.svg"
import { adviceService } from "./services/advice.service"

function App() {
  const [advice, setAdvice] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    onRandomizeAdvice()
  }, [])

  const spinningClass = useMemo(() => {
    return isLoading ? "loading" : ""
  }, [isLoading])

  const onRandomizeAdvice = async () => {
    try {
      setIsLoading(true)
      const advice = await adviceService.getAdvice()
      setAdvice(advice)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!advice) return
  return (
    <div className='app'>
      <div className='main-content'>
        <p className='title'>advice #{advice.id}</p>
        <p className='advice'>"{advice.advice}"</p>
        <img src={divider} alt='' className='divider' />
        <div className={`random ${spinningClass}`} onClick={onRandomizeAdvice}>
          <img src={dice} alt='' />
        </div>
      </div>
    </div>
  )
}

export default App
