import Link from 'next/link'
import { GetServerSideProps } from 'next'


const About = (props: any) => {

    const count: number = 1

    return (
        <>
            {console.log("############")}
            {console.log(props)}
            <div>ABOUT PAGE</div>
            <div>{count}</div>
            <div>{props.name}</div>
            <Link href='/'><a>GOTO TOP</a></Link>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
      props: { name: 'Bob' }
    }
}


export default About