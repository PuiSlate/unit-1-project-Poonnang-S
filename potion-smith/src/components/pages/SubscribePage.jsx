const SubscribePage = () => {
    return (
        <main>
            <div className="main-content">
            <h1>Subscribe</h1>
            <h2>Receive free weekly recipes & inspiration in your inbox!</h2>
            </div>

            {/* <div className="subsribe-form"> */}
 {/* Create a subscribtion form here */}
            {/* </div> */}

           
            <div className="main-content">
            <h1>Follow Us on Social Media</h1>
            <h2>Daily inspiration and meal planning ideas, right in the palm of your hand.</h2>
            </div>
            
            <div id="contact-icons">
            <IconWithLabel id="email" classes="fa-solid fa-square-envelope">
                    contact@potionsmith.com
                </IconWithLabel>
                <IconWithLabel id="facebook" classes="fa-brands fa-square-facebook">
                    PotionSmith
                </IconWithLabel>
                <IconWithLabel id="instagram" classes="fa-brands fa-square-instagram"></IconWithLabel>
            </div>
        </main>    
    )
}

export default SubscribePage;