import NFooter from '@/components/footer';
import NHeader from '@/components/header';

type Props = {
    children: JSX.Element;
}
export default function Layout({ children }: Props) {
    return <>
        <NHeader />
        <main>
            {children}
        </main>
        <NFooter />
    </>
}
