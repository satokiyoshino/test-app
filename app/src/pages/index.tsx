import Link from 'next/link'
import { GetServerSideProps } from 'next'


const Index = (props: any) => {
    return (
        <>
            <div>Hello World</div>
            <div>このブロックはSSRされています「{props.name}」</div>
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