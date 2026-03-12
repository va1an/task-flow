export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center px-6 md:px-16 py-16 gap-1 font-inter">
            <div className="flex-1">
                <h1 className="text-4xl md:5xl font-bold leading-tight">Boost your productivity with <span className="text-blue-600">TaskFlow</span></h1>
                <p className="mt-6 text-gray-600">Organize tasks, colaborate with your team, and manage projects efficiently.</p>

                <div className="mt-6 flex gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer">Get Started</button>
                    <button className="px-6 py-3 border border-blue-600 rounded-lg cursor-pointer">Learn More</button>
                </div>
            </div>

            <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="dashboard" className="rounded-xl shadow-lg" />
            </div>
        </section>
    )
}