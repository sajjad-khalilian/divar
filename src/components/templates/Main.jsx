function Main({posts}) {
    console.log(posts);
    const baseUrl = import.meta.env.VITE_BASE_URL


    return (
        <div>
            {
                posts.data.posts.map(i => (
                    <div key={i._id}>
                        <div>
                            <div>
                                <img src={`${baseUrl}${i.images[0]}`}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    ) 
}

export default Main
