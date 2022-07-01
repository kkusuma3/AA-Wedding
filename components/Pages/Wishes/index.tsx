import Container from "../../Container";

const Wishes = () => (
    <div className="bg-white">
        <Container>
            <div className="flex flex-row justify-evenly space-x-4">
                <div className="flex flex-col justify-evenly space-y-6 text-center">
                    <h4 className="text-2xl md:text-4xl font-bold">Your Wishes</h4>
                    <span className="text-md md:text-lg">Send your warmest wishes to the bride & groom</span>
                    <input type="text" name="Name" id="wishes-name" placeholder="Name" className="bg-gray-200 w-full p-3 rounded-md"/>
                    <textarea id="wishes-message" name="wishes" className="bg-gray-200 h-32 md:h-40 p-5 resize-none rounded-md" placeholder="Write your message here" />
                    <button className="m-2 rounded-3xl w-full mx-auto p-2 md:p-3 text-white bg-blue-700">Send</button>
                </div>
            </div>
        </Container>
    </div>
);

export default Wishes;