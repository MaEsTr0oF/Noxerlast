import { dataStore } from "@/store/DataStore"
import { iconsBaseLink } from "@/utils/globalVariables"
import { RefObject, useRef, useState } from "react"

interface AccordionProps {
  text: string
  title: string
}

function Accordion({ text, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const refCurrent = useRef<HTMLParagraphElement>(null)

  function toggleHandler() {
    if (refCurrent.current) {
        if (isOpen) {
        setIsOpen(false)
        refCurrent.current.style.marginTop = `0px`
        refCurrent.current.style.maxHeight = `0px`
        } else {
        setIsOpen(true)
        refCurrent.current.style.marginTop = `15px`
        refCurrent.current.style.maxHeight = `${refCurrent.current.scrollHeight}px`
        }
    }
  }

  return (
    <div className={`description-block ${isOpen ? "description-block--open" : ""}`}>
      <div onClick={toggleHandler} className="description-header">
        <h3 className="description-title">{title}</h3>

        <button onClick={toggleHandler} className="description-expand-button cursor-pointer">
          <img
            src={`${iconsBaseLink}dark-expand-icon.svg`}
            className="description-expand-icon"
            alt="Развернуть"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-icon.svg"
            }}
          />
        </button>
      </div>

      <p ref={refCurrent} className="description-text">
        {text}
      </p>
    </div>
  )
}

export default Accordion
