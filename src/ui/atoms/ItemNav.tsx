
interface IItemNavProps{
    name:string
}
export default function ItemNav({name}: IItemNavProps){
    return (
        <li>{name}</li>
    )
}