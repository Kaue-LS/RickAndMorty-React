import '../styles/searchBox.scss'
export default function SearchBox(filter){
    return(
        
        <div className='app__header'>
         <h3 className='app__header__logo'>Rick and Morty API</h3>

        <div className='app__header__menu'>
        <input className='app__header__menu__search'
        type='text'
        placeholder={filter.placeholder}
        onChange={filter.action }/>
        </div>
        </div>
        
    )


}
