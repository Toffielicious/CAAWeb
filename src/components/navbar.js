
const nav = [
    { text: 'Home' },
    { text: 'Certifications' },
    { text: 'Learn More' },

]

const Navbar = () => {

    return (
        <div className="flex flex-row justify-center gap-10 bg-brown ">
            {nav.map((navs, index) => (
                    <button key={index} className="px-6 py-2 " style={{ fontSize: '17px' }}>
                        {navs.text}
                    </button>
            ))}
        </div>

    )

}

export default Navbar