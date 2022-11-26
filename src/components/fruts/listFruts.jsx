import ItemFruts from "./itemFruts";


const ListFruts = ({fruts}) => {
    // const fruts = ['frutilla', 'banana', 'palta'];
    return (
        <ul>
            {fruts.map((frut, index) => (
                <ItemFruts key={index} frut={frut} />
            ))}
        </ul>
    );
}

export default ListFruts;