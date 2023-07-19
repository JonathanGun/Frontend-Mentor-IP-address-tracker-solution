"use client"

import { useRef } from "react"

interface ISearchBar {
  onSubmit: (value: string) => void
}

const SearchBar: React.FC<ISearchBar> = ({ onSubmit }) => {
  const inputElement = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-row w-full sm:max-w-[50vw]">
      <input type="text" placeholder="IP Address" ref={inputElement} className="rounded-l-md sm:rounded-l-lg py-2 px-3 text-xs grow" />
      <button onClick={() => onSubmit(inputElement.current?.value ?? "")} className="bg-black rounded-r-md sm:rounded-r-lg text-white px-3 text-center text-xs">
        &gt;
      </button>
    </div>
  )
}

export default SearchBar
