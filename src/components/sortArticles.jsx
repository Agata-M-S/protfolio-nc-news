export const SortArticles = ({setSortBy, setOrder, sortBy, order})=>{

  return (<div className="sort">
    <label htmlFor="sorting">
      Sort By: </label>
    <select id="sorting" defaultValue={sortBy} onChange={(e)=>{
      setSortBy(e.target.value)
    
    }}
    >
      <option value={'created_at'}> Date</option>
      <option value={'author'}> Author</option>
      <option value={'votes'}> Votes</option>
      <option value={'comment_count'}> Comments</option>
    </select>
    <label htmlFor="order">
      Order By: </label>
    <select id="order" defaultValue={order} onChange={(e)=>{
      setOrder(e.target.value)
    }}>
      <option value={'DESC'}> Descending</option>
      <option value={'ASC'}> Ascending</option>
    </select>
  </div>)
}