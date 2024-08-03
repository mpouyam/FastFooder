import { useState } from "react"
import { BsSearch } from "react-icons/bs"
const SearchBar = ({ searchItems }) => {
    const [value, setValue] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        searchItems(value)
    }
    return (
        <form className="search flex-fill align-items-center" onSubmit={onSubmit}>
            <div className="input-group">
                <input
                    className="form-control founded-end pe-5 border-success"
                    type="text"
                    placeholder="جست و جوی غذا ..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >

                </input>
                <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3"></BsSearch>
            </div>
        </form>
    )
}

export default SearchBar