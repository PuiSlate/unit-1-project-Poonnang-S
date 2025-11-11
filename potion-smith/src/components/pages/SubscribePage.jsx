const SubscribePage = () => {
    return (
        <main>
            <div className="main-content">
            <h1>Subscribe</h1>
            <h2>Receive free weekly recipes & inspiration in your inbox!</h2>
            </div>

            <form>
                <div className="container">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text" placeholder="Name" name="name" required></input>

                <label className="sr-only" htmlFor="email">Email address</label>
                <input type="text" placeholder="Email address" name="email" required></input>
                
                <label className="checkbox-label">
                    <input type="checkbox" name="subscribe" defaultChecked/>Weekly Newsletter</label>
                </div>

    
                <div className="container">
                    <input type="submit" value="Subscribe"></input>
                </div>
            </form>

        </main>
        
    )
}

export default SubscribePage;