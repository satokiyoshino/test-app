import Link from 'next/link'
import { GetServerSideProps } from 'next'


const About = (props: any) => {
    return (
        <>
            <div>ABOUT PAGE</div>
            <div>このブロックはSSRされています「{props.name}」</div>
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