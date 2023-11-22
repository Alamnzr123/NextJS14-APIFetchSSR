import React from 'react'

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
const Home = (data) => {
    // You can pass the data to Page Function
    // SSR only display result on Terminal or Backend
    console.log(data);
    return (
        <div>Check Your Terminal for result!</div>
    )
}

export default Home