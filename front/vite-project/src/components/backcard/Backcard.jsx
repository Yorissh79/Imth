import React, {useState} from 'react'
import style from './Backcard.module.scss'
import Card from "./components/card/Card.jsx";

const Backcard = ({data, who}) => {

    const [searchText, setSearchText] = useState('')
    const [filter, setFilter] = useState('default')

    const regex = new RegExp(searchText + ".*$")

    const filteredData = data?.filter(filter => filter.name.toLowerCase().search(regex) !== -1)
        .sort((a, b) => {
            if (filter === 'asc') return Number(b.price) - Number(a.price)
            if (filter === 'desc') return Number(a.price) - Number(b.price)
            if (filter === 'default') return 0
        })

    return (
       <div className={style.main}>
           <div className={style.top}>
               <input placeholder="Search for..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                <div className={style.btns}>
                    <button onClick={() => {setFilter("desc")}}>Az</button>
                    <button onClick={() => {setFilter("asc")}}>Cox</button>
                    <button onClick={() => {setFilter("default")}}>Default</button>
                </div>
           </div>
           <div className={style.bottom}>
               {filteredData?.map(item => <Card key={item._id} item={item} who={who} />)}
           </div>
       </div>
    )
}

export default Backcard