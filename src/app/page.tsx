import Features from '@/components/landing page/features';
import Hero from '../components/landing page/hero';
import Nav from '../components/landing page/nav';

export default function Home() {
    return (
        <div className=" overflow-x-clip flex flex-col">
            <Nav />
            <Hero />
            <Features />
        </div>
    );
}
