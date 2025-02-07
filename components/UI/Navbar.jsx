import { Link } from "react-router";

export default function Navbar(){
    return(
        <haeder style={styles.header}>
            <nav>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <NavLink to="/"
                        style={
                            ({isActive}) =>{
                                return{
                                    fontWeight: isActive ? "bold" : "normal"
                                }
                            }
                        }>
                            kezdolap
                        </NavLink>
                        {/*<Link style={styles.link} to="/">Kezdolap</Link>*/}
                    </li>
                    <li style={styles.li}>
                    <NavLink to="about"
                        style={
                            ({isActive}) =>{
                                return{
                                    fontWeight: isActive ? "bold" : "normal"
                                }
                            }
                        }>
                            kezdolap
                        </NavLink>
                        {/*<Link style={styles.link} to="about">What color is a carrot?</Link>*/}
                    </li>
                </ul>
            </nav>
        </haeder>
    )
}

const styles = {
    header: {
        backgroundColor: '#555',
        height: 100,
        display: 'flex',
        alignItems: 'center'
    },
    ul: {
        display: 'flex',
        gap: 10
    },
    li: {
        color: 'black',
        listStyle: 'none'
    },
    link: {
        textDecoration: 'none'
    }
}