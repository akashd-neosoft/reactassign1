import React from 'react'

function Home(props) {
    console.log(props)
    return (
        <table>
            <thead>
                <th>id</th>
                <th>Postname</th>
                <th>Postdescription</th>
                <th>Image</th>
                <th>Author</th>
                <th>Date</th>
            </thead>
            <tbody>
                {props.title.map((val, index)=>{
                    return (
                    <tr key={index}>
                        <td>{val.id+1}</td>
                        <td>{val.postname}</td>
                        <td>{val.post_description}</td>
                        <td><img src={val.img} alt="" /></td>
                        <td>{val.author}</td>
                        <td>{val.date}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Home
