export default function Features() {
    return (
        <section className="px-6 md:px-16 py-20 font-inter">
            <h2 className="text-3xl font-bold text-center mb-14">Simplify Task Management</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white px-6 rounded-xl shadow hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Easy Task Organization</h3>
                    <p className="text-gray-600">Create, assign, and prioritize tasks easily with our intuitive interface.</p>
                </div>

                <div className="bg-white px-6 rounded-xl shadow hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                    <p className="text-gray-600">Work together with shared boards and real-time updates.</p>
                </div>

                <div className="bg-white px-6 rounded-xl shadow hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                    <p className="text-gray-600">Monitor milestones, deadlines, productivity easily.</p>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer">Get Started</button>
            </div>
        </section>
    )
}