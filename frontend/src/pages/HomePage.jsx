const { useEffect } = require("react")

const HomePgae=()=>{
    const [data,setData] = useState();
    function getData(){

    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
        <h2>Employee</h2>
        <p>list of employee</p>
        <Link to={"./addEmployee"}>
        <Button>ADD EMPLOYEE</Button>
        </Link>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>
                        <span>Employee</span>
                    </th>
                    <th>Title</th>
                    <th>Role</th>

                    </tr>
                </thead>
                <tbody>
                    {/* APi */}
                </tbody>
            </table>
        </div>
        </>
    )
}