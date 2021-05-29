import Link from 'next/link'
import { GetServerSideProps } from 'next'


const Index = (props: any) => {

    const count: number = 1

    return (
        <>
            {console.log("############")}
            {console.log(props)}
            <div>Hello World</div>
            <div>{count}</div>
            <div>{props.name}</div>
            <Link href='/about'><a>GOTO ABOUT</a></Link>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
      props: { name: 'John' }
    }
}


export default Index