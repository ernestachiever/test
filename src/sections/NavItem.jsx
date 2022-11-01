
const NavItem = ({item, className, onClickNav}) => {
  return (
    <li><a href={item.link} className={className} onClick={onClickNav}>{item.title}</a></li>
  )
}

export default NavItem