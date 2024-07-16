import { ChevronsUpDown } from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'

const QuerySelector = ({ options, selectedOption, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const containerRef = useRef(null)

    const toggleDropdown = () => setIsOpen(prev => !prev)

    const handleOptionChange = useCallback((index) => {
        const newOption = options[index]?.value
        if (newOption && newOption !== "Select a Subject") {
            onOptionChange(newOption)
            setSelectedIndex(index)
        }
        setIsOpen(false)
        setHighlightedIndex(-1)
    }, [options, selectedOption, onOptionChange])

    useEffect(() => {
        const handleKeyboardEvents = (e) => {
            if (isOpen) {
                switch (e.key) {
                    case "Enter":
                        e.preventDefault()
                        if (highlightedIndex !== -1) {
                            handleOptionChange(highlightedIndex)
                        }
                        break
                    case "ArrowDown":
                        e.preventDefault()
                        setHighlightedIndex(prev => (prev + 1) % options.length)
                        break
                    case "ArrowUp":
                        e.preventDefault()
                        setHighlightedIndex(prev => (prev - 1 + options.length) % options.length)
                        break
                    case "Escape":
                        setIsOpen(false)
                        setHighlightedIndex(-1)
                        break
                }
            } else if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setIsOpen(true)
            }
        }

        document.addEventListener("keydown", handleKeyboardEvents)
        return () => {
            document.removeEventListener("keydown", handleKeyboardEvents)
        }
    }, [isOpen, options, highlightedIndex, handleOptionChange])

    return (
        <div
            className="w-full mb-1.5 box-border rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo flex items-center relative cursor-pointer"
            onClick={toggleDropdown}
            ref={containerRef}
            tabIndex={0}
        >
            <span className={`flex-1 ${selectedOption === `Select a Subject` ? "text-gray-300/70" : ""}`}>{selectedOption}</span>
            <button
                className={`${isOpen ? "text-Logo" : ""} hover:text-Logo text-Border`}
                onClick={(e) => { e.stopPropagation(); toggleDropdown() }}
            >
                <ChevronsUpDown className="size-4" />
            </button>
            {isOpen && (
                <ul className="absolute top-[calc(100%+1rem)] z-10 bg-Bg w-full left-0 outline outline-1 outline-Border rounded-md py-1 px-1">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`px-3 py-1 cursor-pointer hover:bg-Nav rounded-md ${highlightedIndex === index || selectedIndex === index ? "bg-Border" : ""
                                }`}
                            onClick={(e) => { e.stopPropagation(); handleOptionChange(index) }}
                        >
                            {option.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default QuerySelector
