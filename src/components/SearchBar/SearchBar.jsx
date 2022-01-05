import './SearchBar.scss'
export default function SearchBar(filter){
    return(
        <div className='Search'>
            <div className='Search__IconBar'>
                <p>Search Character</p>
                <span><i class="im im-magnifier"></i>
                <input
                  type='text'
                  placeholder={filter.placeholder}
                  onChange={filter.action}/>      
                  </span>   
            </div>

        </div>
    )
}