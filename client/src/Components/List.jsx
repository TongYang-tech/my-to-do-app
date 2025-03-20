import Show from './Show'

const List = ({ items, remove, edit }) => {
  const renderItems = items.map((item) => {
    return <Show
      key={item.id}
      item={item}
      remove={remove}
      edit={edit} />
  })
  return <ul className="listContainer">{renderItems}</ul>
}

export default List
