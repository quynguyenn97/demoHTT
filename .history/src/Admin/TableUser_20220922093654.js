import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getListUser } from "../services/apiServices";

const TableUser = () => {
    const [listUsers, setListUsers] = useState();
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        let res = await getListUser();
        setListUsers(res.data.data);
        console.log(setListUsers);
    };

    return (
        <>
            <div className="my-3">
                <span>List Users:</span>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};
export default TableUser;