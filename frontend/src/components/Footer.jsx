export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white px-6 md:px-16 py-12 font-inter">
            <div className="grid md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-4">TaskFlow</h2>
                    <p className="text-gray-300">Manage tasks and boost productivity with modern workflow tools.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Features</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Dashboard</li>
                        <li>Task Manager</li>
                        <li>Collaboration</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-400 mt-10">
                2026 TaskFlow. All rights reserved.
            </div>
        </footer>
    )
}