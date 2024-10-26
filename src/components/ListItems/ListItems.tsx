import { listItems } from "@/utils/Helpers/helper";
export default function ListItems(){
    return (
        <>
        {listItems.map((e) => {
            return <li key={e.id} className=" capitalize ">{e.name}</li>
        })}
        </>
    );
}                  