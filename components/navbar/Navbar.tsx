import Image from "next/image"
import styles from '../../styles/components/Navbar.module.css'

const Navbar = () => {
    return (

        <div >


            <div className={styles.con}>
                <Image
                    src="/pics/Frame 357.png"
                    alt='nav bar vali image'
                    height={70}
                    width={70}
                />
                <div>
                    <ul className={styles.con}>
                        <li>Hypeindustry</li>
                        <li>Hype ofers</li>
                        <li>Shippings</li>
                        <li>Seller Request Form</li>
                        <li><button>Login</button></li>
                        <li>
                        <input type="text" placeholder="Search any thing" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Navbar