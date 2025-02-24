import{
    HOME,
    READ,
    CREATE,
    UPDATE,
    DELETE
} from "./consts";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Read from "../pages/Read";
import Update from "../pages/Update";
import Delete from "../pages/Delete";

export const routes=[
    {
        path: HOME,
        element: Home,
    },
    {
        path: READ,
        element: Read,
    },
    {
        path: CREATE,
        element: Create,
    },
    {
        path: UPDATE,
        element: Update,
    },
    {
        path: DELETE,
        element: Delete,
    }
]